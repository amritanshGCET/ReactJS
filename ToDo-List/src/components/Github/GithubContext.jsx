import { createContext, useContext, useEffect, useState } from "react";

const GithubContext = createContext(null);

export function GithubProvider({ username, children }) {
    const [user, setUser] = useState(null);
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!username) {
            setUser(null);
            setRepositories([]);
            setError("");
            setLoading(false);
            return undefined;
        }

        const controller = new AbortController();
        setLoading(true);
        setError("");

        Promise.all([
            fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
                signal: controller.signal,
            }),
            fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12`, {
                signal: controller.signal,
            }),
        ])
            .then(async ([userResponse, repositoriesResponse]) => {
                if (!userResponse.ok || !repositoriesResponse.ok) {
                    const response = !userResponse.ok ? userResponse : repositoriesResponse;
                    throw new Error(
                        response.status === 404
                            ? "GitHub user not found. Check the username and try again."
                            : "Unable to load GitHub data right now. Please try again.",
                    );
                }

                return Promise.all([userResponse.json(), repositoriesResponse.json()]);
            })
            .then(([userData, repositoryData]) => {
                setUser(userData);
                setRepositories(repositoryData);
            })
            .catch((requestError) => {
                if (requestError.name !== "AbortError") {
                    setUser(null);
                    setRepositories([]);
                    setError(requestError.message);
                }
            })
            .finally(() => {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            });

        return () => controller.abort();
    }, [username]);

    return (
        <GithubContext.Provider value={{ user, repositories, loading, error }}>
            {children}
        </GithubContext.Provider>
    );
}

export function useGithubInfo() {
    const context = useContext(GithubContext);

    if (!context) {
        throw new Error("useGithubInfo must be used inside a GithubProvider");
    }

    return context;
}
