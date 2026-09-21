function GithubCard({ repository }) {
    return (
        <article className="rounded-lg border border-stone-200 bg-white p-4 text-left shadow-sm">
            <a
                href={repository.html_url}
                target="_blank"
                rel="noreferrer"
                className="mb-1.5 block font-mono text-sm font-semibold text-teal-700 hover:underline"
            >
                {repository.name}
            </a>
            <p className="mb-3.5 min-h-8.5 text-xs leading-relaxed text-stone-500">
                {repository.description || "No description provided."}
            </p>
            <div className="flex flex-wrap items-center gap-3.5 text-xs text-stone-400">
                {repository.language && (
                    <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-teal-600" />
                        {repository.language}
                    </span>
                )}
                <span className="text-teal-700">★ {repository.stargazers_count}</span>
                <span>Forks {repository.forks_count}</span>
            </div>
        </article>
    );
}

export default GithubCard;
