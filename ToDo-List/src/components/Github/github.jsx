import { useState } from "react";
import GithubCard from "./GithubCard";
import { GithubProvider, useGithubInfo } from "./githubData";

function GithubContent() {
    const { user, repositories, loading, error } = useGithubInfo();

    return (
        <>
            {loading && (
                <p className="mb-5 rounded-lg border border-teal-200 bg-teal-50 p-4 text-sm text-teal-800">
                    Loading GitHub data...
                </p>
            )}

            {error && (
                <p role="alert" className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {error}
                </p>
            )}

            {user && !loading && (
                <>
                    <section className="mb-5 rounded-lg border border-stone-200 bg-white p-7 text-left">
                        <div className="flex flex-col gap-5 sm:flex-row">
                            <img
                                src={user.avatar_url}
                                alt={`${user.login}'s profile`}
                                className="h-20 w-20 shrink-0 rounded-full"
                            />
                            <div>
                                <h2 className="mb-0.5 text-xl font-semibold">
                                    {user.name || user.login}
                                </h2>
                                <p className="mb-3 font-mono text-sm text-teal-700">@{user.login}</p>
                                <p className="mb-3 max-w-md text-sm leading-relaxed text-stone-500">
                                    {user.bio || "This user has not added a bio yet."}
                                </p>
                                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400">
                                    {user.location && <span>{user.location}</span>}
                                    {user.company && <span>{user.company}</span>}
                                    <a href={user.html_url} target="_blank" rel="noreferrer" className="text-teal-700 hover:underline">
                                        View profile
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 border-t border-stone-200 pt-5">
                            <div>
                                <span className="block font-mono text-2xl font-semibold">{user.public_repos}</span>
                                <span className="text-xs text-stone-400">repositories</span>
                            </div>
                            <div>
                                <span className="block font-mono text-2xl font-semibold">{user.followers}</span>
                                <span className="text-xs text-stone-400">followers</span>
                            </div>
                            <div>
                                <span className="block font-mono text-2xl font-semibold">{user.following}</span>
                                <span className="text-xs text-stone-400">following</span>
                            </div>
                        </div>
                    </section>

                    <h3 className="mb-3 mt-10 text-left text-base font-semibold">Repositories</h3>
                    {repositories.length > 0 ? (
                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                            {repositories.map((repository) => (
                                <GithubCard key={repository.id} repository={repository} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-left text-sm italic text-stone-400">This user has no public repositories.</p>
                    )}
                </>
            )}
        </>
    );
}

function Github() {
    const [username, setUsername] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedUsername = inputValue.trim();

        if (!trimmedUsername) {
            setIsEmpty(true);
            return;
        }

        setIsEmpty(false);
        setUsername(trimmedUsername);
    };

    return (
        <GithubProvider username={username}>
            <div className="min-h-screen bg-stone-100 px-6 py-16 font-serif text-stone-900">
                <div className="mx-auto max-w-xl">
                    <section className="mb-12 flex flex-col items-center text-center">
                        <h1 className="mb-2 text-center text-3xl font-semibold leading-snug">
                            Find anyone on GitHub
                        </h1>
                        <p className="mb-7 text-center text-base leading-relaxed text-stone-500">
                            Enter a username to pull up their profile, stats, and repositories.
                        </p>
                        {isEmpty && (
                            <p role="alert" className="mb-2 text-left text-sm text-red-500">
                                Please enter a GitHub username.
                            </p>
                        )}
                        <form onSubmit={handleSubmit} className="flex w-full overflow-hidden rounded-md border border-stone-300 bg-white text-left shadow-sm">
                            <input
                                type="text"
                                aria-label="GitHub username"
                                placeholder="octocat"
                                value={inputValue}
                                className="min-w-0 flex-1 border-none bg-transparent px-4 py-3.5 font-mono text-sm text-stone-900 outline-none placeholder:text-stone-400"
                                onChange={(event) => {
                                    setInputValue(event.target.value);
                                    setIsEmpty(false);
                                }}
                            />
                            <button type="submit" className="cursor-pointer bg-teal-700 px-6 text-sm font-medium text-white hover:bg-teal-800">
                                Look up
                            </button>
                        </form>
                    </section>
                    <GithubContent />
                </div>
            </div>
        </GithubProvider>
    );
}

export default Github;
