import { useState } from "react"
function Card(props) {
  const [completeTask, setcompleteTask] = useState(false);
  return (
    <>
      <div class="w-full bg-white rounded-2xl shadow-lg border border-blue-100 p-6">


        <div class="flex items-start gap-4">


          <button
            className={`shrink-0 w-5 h-5 mt-1 rounded-full border-2 border-blue-300 hover:border-blue-400 transition-colors ${completeTask ? "bg-blue-300" : "bg-white"
              }`}
            onClick={() => {
              setcompleteTask(!completeTask);
              console.log(`button was clicked ${completeTask}`);
            }}
          >
          </button>


          <div class="flex-1 min-w-0">
            {(completeTask) ?
              (<h3 class="text-base font-semibold text-gray-900 line-through">{props.task.titleTask}</h3>)
              : (<h3 class="text-base font-semibold text-gray-900">{props.task.titleTask}</h3>)}
            <p class="text-sm text-gray-500 mt-1 leading-relaxed">{props.task.des}</p>
          </div>


          <button class="shrink-0 text-gray-300 hover:text-blue-400 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>


        <div class="flex items-center gap-3 mt-4 pt-4 border-t border-blue-50">
          <span class="flex items-center gap-1 text-xs text-gray-400">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Due Sep 12
          </span>
        </div>

      </div>
    </>
  )
}

export default Card
