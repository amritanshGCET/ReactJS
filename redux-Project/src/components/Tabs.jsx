import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

function Tabs() {
  const tabs = ["photos", "videos", "GIFs"];
  const dispatch = useDispatch();
  const activeElem=useSelector((state)=>state.search.activeTab)
  return (
    <div className="flex gap-10 p-10">
      {tabs.map((elem, idx) => {
        return (
          <button
            onClick={() => {
              dispatch(setActiveTabs(elem));
            }}
            className={`${(activeElem==elem?'bg-emerald-600':'bg-gray-600')}  border rounded active:scale-95 px-5 py-3 text-xl`}
            key={idx}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
