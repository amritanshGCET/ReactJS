import React, { useState,useRef } from 'react'

function Github() {
    const[req,setReq]=useState(false);
    const[isEmpty,setIsEmpty]=useState(false);
    const inputRef=useRef(null)
    const handleClick=()=>{
      const textValue = inputRef.current.value
      if(textValue.length===0){
        setIsEmpty(true)
      }

    }
    return (
       <div className="min-h-screen bg-stone-100 px-6 py-16 font-serif text-stone-900">
  <div className="mx-auto max-w-xl">

    {/* Hero / search */}
    <section className="mb-12">
      <h1 className="mb-2 text-center text-3xl font-semibold leading-snug">
        Find anyone on GitHub
      </h1>
      <p className="mb-7 text-center text-base leading-relaxed text-stone-500">
        Enter a username to pull up their profile, stats, and pinned work.
      </p>
      <div>{isEmpty ? (<p className="text-red-500">*You cannot fill blank username*</p>):(<p></p>)}</div>
      <div className="flex overflow-hidden rounded-md border border-stone-300 bg-white shadow-sm">
        <input
          type="text"
          aria-label="GitHub username"
          placeholder="octocat"
          className="min-w-0 flex-1 border-none bg-transparent px-4 py-3.5 font-mono text-sm text-stone-900 outline-none placeholder:text-stone-400"
          ref={inputRef}
           onChange={() => setIsEmpty(false)}
        />
        <button className="cursor-pointer bg-teal-700 px-6 text-sm font-medium text-white hover:bg-teal-800" onClick={handleClick}>
          Look up
        </button>
      </div>
    </section>

    {/* Profile card */}
    <section className="mb-5 rounded-lg border border-stone-200 bg-white p-7">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-teal-50 text-2xl font-semibold text-teal-700">
          OC
        </div>

        <div>
          <h2 className="mb-0.5 text-xl font-semibold">The Octocat</h2>
          <p className="mb-3 font-mono text-sm text-teal-700">@octocat</p>
          <p className="mb-3 max-w-md text-sm leading-relaxed text-stone-500">
            Mascot and mischief-maker for GitHub. Building small tools and
            breaking bigger ones since 2008.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400">
            <span>San Francisco, CA</span>
            <span className="h-1 w-1 rounded-full bg-stone-300" />
            <span>GitHub Inc.</span>
            <span className="h-1 w-1 rounded-full bg-stone-300" />
            <span>Joined Jan 2008</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 border-t border-stone-200 pt-5">
        <div>
          <span className="block font-mono text-2xl font-semibold">48</span>
          <span className="text-xs text-stone-400">repositories</span>
        </div>
        <div>
          <span className="block font-mono text-2xl font-semibold">9.2k</span>
          <span className="text-xs text-stone-400">followers</span>
        </div>
        <div>
          <span className="block font-mono text-2xl font-semibold">12</span>
          <span className="text-xs text-stone-400">following</span>
        </div>
      </div>
    </section>

    {/* Pinned repositories */}
    <h3 className="mb-3 mt-10 text-base font-semibold">Pinned repositories</h3>
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">

      <div className="rounded-lg border border-stone-200 bg-white p-4">
        <p className="mb-1.5 font-mono text-sm font-semibold text-teal-700">
          git-consortium
        </p>
        <p className="mb-3.5 min-h-8.5 text-xs leading-relaxed text-stone-500">
          A repository for Git-related tools shared across the community.
        </p>
        <div className="flex items-center gap-3.5 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            Shell
          </span>
          <span className="text-teal-700">★ 214</span>
        </div>
      </div>

      <div className="rounded-lg border border-stone-200 bg-white p-4">
        <p className="mb-1.5 font-mono text-sm font-semibold text-teal-700">
          Spoon-Knife
        </p>
        <p className="mb-3.5 min-h-8.5 text-xs leading-relaxed text-stone-500">
          This repo is for demonstration purposes only — fork away.
        </p>
        <div className="flex items-center gap-3.5 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            HTML
          </span>
          <span className="text-teal-700">★ 12.8k</span>
        </div>
      </div>

      <div className="rounded-lg border border-stone-200 bg-white p-4">
        <p className="mb-1.5 font-mono text-sm font-semibold text-teal-700">
          octo.nvim
        </p>
        <p className="mb-3.5 min-h-8.5 text-xs leading-relaxed text-stone-500">
          Minimal editor plugin for browsing issues without leaving the terminal.
        </p>
        <div className="flex items-center gap-3.5 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Lua
          </span>
          <span className="text-teal-700">★ 3.4k</span>
        </div>
      </div>

      <div className="rounded-lg border border-stone-200 bg-white p-4">
        <p className="mb-1.5 font-mono text-sm font-semibold text-teal-700">
          boxen
        </p>
        <p className="mb-3.5 min-h-8.5 text-xs leading-relaxed text-stone-500">
          Create boxes in the terminal, with borders and colors of your choosing.
        </p>
        <div className="flex items-center gap-3.5 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            JavaScript
          </span>
          <span className="text-teal-700">★ 6.1k</span>
        </div>
      </div>

    </div>
  </div>
</div>
    )
}

export default Github
