import { useState } from "react"
function Card(props) {
  const [completeTask, setcompleteTask] = useState(false);
  const [remove,setRemove]=useState(false);
  const today = new Date();
  if(!remove){
      return (
    <>
      <div className="w-full rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">


        <div className="flex items-start gap-4">


          <button
            className={`mt-1 h-5 w-5 shrink-0 rounded-full border-2 border-teal-300 transition-colors hover:border-teal-500 ${completeTask ? "bg-teal-600" : "bg-white"
              }`}
            onClick={() => {
              setcompleteTask(!completeTask);
              console.log(`button was clicked ${completeTask}`);
            }}
          >
          </button>


          <div className="min-w-0 flex-1">
            {(completeTask) ?
              (<h3 className="text-base font-semibold text-stone-900 line-through">{props.task.titleTask}</h3>)
              : (<h3 className="text-base font-semibold text-stone-900">{props.task.titleTask}</h3>)}
            <p className="mt-1 text-sm leading-relaxed text-stone-500">{props.task.des}</p>
          </div>


          <button className="shrink-0 text-stone-300 transition-colors hover:text-red-500" onClick={()=>{setRemove(!remove)}}>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>


        <div className="mt-4 flex items-center gap-3 border-t border-stone-200 pt-4">
          <span className="flex items-center gap-1 text-xs text-stone-400">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {today.toLocaleDateString('en-GB')}
          </span>
        </div>

      </div>
    </>
  )
}
else{
  return (
  <>
  </>
  )
}
}

export default Card
