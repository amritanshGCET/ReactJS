import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchGIFs, fetchVideos } from "../api/mediaApi";
import { setLoading, setError, setResults } from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

function ResultGrid() {
  let finalData;
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector((store) => store.search);
  let Data = [];
  const getData = async () => {
    if (!query) return 
    try {
      dispatch(setLoading());
      if (activeTab == "photos") {
        Data = await fetchPhotos(query);
        finalData = Data.results.map((item) => ({
          id: item.id,
          title: item.alt_description,
          type: "photo",
          thumbnail: item.urls.thumb,
          src: item.urls.full,
          originalUrl: item.links.html,
        }));
      } 
      else if (activeTab == "videos") {
        Data = await fetchVideos(query);
        finalData = Data.hits.map((item) => ({
          id: item.id,
          title: item.description,
          type: "video",
          thumbnail: item.thumbnail,
          src: item.urls.mp4,
          originalUrl: item.url,
        }));
      } 
      else {
        Data = await fetchGIFs(query);
        finalData = Data.data.map((item) => ({
          id: item.id,
          title: item.title,
          type: "gif",
          thumbnail: item.images.fixed_width_small.url,
          src: item.images.downsized.url,
          originalUrl: item.url,
        }));
      }
      dispatch(setResults(finalData));
    } 
    catch (err) {
      dispatch(setError(err));
    }
  };

  useEffect(() => {
    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="grid w-full grid-cols-1 gap-6 overflow-y-auto px-4 pb-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ResultGrid;
