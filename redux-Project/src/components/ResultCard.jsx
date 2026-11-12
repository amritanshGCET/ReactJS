import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCollection } from "../redux/features/collectionSlice";
function ResultCard({ item }) {
  const dispatch=useDispatch();
  const isVideo = item.type === "video";
  const videoRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  const playVideo = () => {
    const playPromise = videoRef.current?.play();
    playPromise?.catch((error) => {
      console.error("Unable to play video:", error);
    });
  };

  const pauseVideo = () => {
    if (!isClicked && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isClicked) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    } else {
      playVideo();
    }
    setIsClicked(!isClicked);
  };

  const media = isVideo ? (
    <video
      ref={videoRef}
      className="h-full w-full object-contain"
      src={item.src}
      poster={item.thumbnail}
      muted
      loop
      playsInline
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      onClick={toggleVideo}
    />
  ) : (
    <img
      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
      src={item.src}
      alt={item.title || `${item.type} result`}
      loading="lazy"
    />
  );

  const clickHandler=()=>{
    dispatch(setCollection({
      collectionId:item.id,
      collectionTitle:item.title,
    collectionType: item.type,
    collectionSrc: item.src,
    originalUrl: item.url,
    }))
  }
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex aspect-4/3 w-full items-center justify-center overflow-hidden bg-gray-950">
        {item.originalUrl && !isVideo ? (
          <a
            className="h-full w-full"
            href={item.originalUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${item.type} original website`}
          >
            {media}
          </a>
        ) : (
          media
        )}
      </div>
      <div className="p-4">
        <p className="line-clamp-2 min-h-10 wrap-break-word text-sm font-medium capitalize leading-5 text-gray-200">
          {item.title || `Untitled ${item.type}`}
        </p>
        <button
          type="button"
          onClick={clickHandler}
          className="mt-3 rounded border border-gray-600 px-3 py-1.5 text-sm font-medium text-gray-200 transition hover:border-gray-400 hover:text-white"
        >
          Save
        </button>
      </div>
    </article>
  );
}

export default ResultCard
