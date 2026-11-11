import { useDispatch,useSelector } from 'react-redux'
import {fetchPhotos,fetchGIFs,fetchVideos} from '../api/mediaApi'
import { setActiveTabs,setQuery,setLoading,setError,setResults} from '../redux/features/searchSlice'
import { useEffect } from 'react';

function ResultGrid() {
    const dispatch=useDispatch();

    const {query,activeTab,results,loading,error}=useSelector((store)=>store.search)
    let Data
    const getData=async()=>{
        if(activeTab=='photos'){
            Data= await fetchPhotos(query)
            const finalData=Data.results.map((item)=>({
                id:item.id,
                title:item.alt_description,
                type:'photo',
                thumbnail:item.urls.thumb,
                src:item.urls.full,
            }))
            console.log(finalData)
        }
        else if(activeTab=='videos'){
             Data= await fetchVideos(query)
             const finalData=Data.hits.map((item)=>({
                id:item.id,
                title:item.description,
                type:'video',
                thumbnail:item.thumbnail,
                src:item.urls.mp4,
            }))
             console.log(finalData)
        }
        else{
             Data= await fetchGIFs(query)
             const finalData=Data.data.map((item)=>({
                id:item.id,
                title:item.title,
                type:'gif',
                thumbnail: item.images.fixed_width_small.url,
                src: item.images.downsized.url,
            }))
             console.log(finalData)
        }
        
    }

    useEffect(()=>{getData()},[query,activeTab])
    return (
        <div>

        </div>
    )
}

export default ResultGrid
