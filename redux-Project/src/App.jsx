import React from "react";
import { fetchPhotos,fetchGIFs,fetchVideos} from "./api/mediaApi";

function App() {
  const GetPhotos=async ()=>{
    const data = await fetchPhotos('cat')
    console.log(data.results);
  }
  const GetGifs=async ()=>{
    const response=await fetchGIFs('mouse')
    console.log(response.data);
  }
  const GetVideos=async()=>{
    const data =await  fetchVideos('nature')
    console.log(data.hits)
  }
  return <div className="h-screen w-full bg-gray-800 text-white">
    <button onClick={GetPhotos} className="bg-green-400 p-2 m-2 rounded-2xl">Get photos</button>
    <button onClick={GetGifs} className="bg-green-400 p-2 m-2 rounded-2xl">Get GIFs</button>
    <button onClick={GetVideos} className="bg-green-400 p-2 m-2 rounded-2xl">Get Videos</button>
  </div>
}

export default App;
