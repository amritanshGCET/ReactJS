function About() {
  return (
    <main className="flex flex-1 items-center bg-stone-100 px-6 py-10 text-stone-900 sm:py-12">
      <article
        className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-cover bg-center p-8 text-left shadow-2xl sm:p-12"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3532555/pexels-photo-3532555.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-stone-950/60" />
        <div className="relative">
          <p className="mb-6 inline-block rounded-md bg-teal-300 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950">
            About this project
          </p>
          <div className="space-y-5 text-base leading-8 text-white">
          <p>
            I made this project to polish my React skills. I tried to avoid
            using AI and chatbots; only the major part of the CSS and some of
            the GitHub data page were done with AI because I was too impatient
            to finish them on my own.
          </p>
          <p>
            I know it is a small project, but I learned so many new things
            about React. Now I have the confidence to build even bigger
            projects.
          </p>
          <p>
            Edit: The About section was also done with AI.
          </p>
          <p className="border-t border-white/30 pt-4 text-sm text-stone-200">
            Image credit:{" "}
            <a
              href="https://www.pexels.com/@hiteshchoudhary/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-teal-200 underline decoration-teal-300/70 underline-offset-4 transition hover:text-white"
            >
              Hitesh Choudhary - Photography
            </a>
          </p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default About;
