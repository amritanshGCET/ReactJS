import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import CollectionPage from './components/CollectionPage'
import { COLLECTION_STORAGE_KEY } from './redux/features/collectionSlice'

function App() {
  const [showCollection, setShowCollection] = useState(false)
  const collectionList = useSelector((state) => state.collection.collectionList)

  useEffect(() => {
    try {
      window.localStorage.setItem(
        COLLECTION_STORAGE_KEY,
        JSON.stringify(collectionList)
      )
    } catch (error) {
      console.error("Unable to save collection:", error)
    }
  }, [collectionList])

  return (
    <div className="min-h-screen w-full bg-gray-800 text-white">
      <div className="flex justify-end p-4">
        <button
          type="button"
          onClick={() => setShowCollection(!showCollection)}
          className="rounded border border-gray-600 px-4 py-2 font-medium transition hover:border-gray-400"
        >
          {showCollection ? 'Back to Search' : 'View Collection'}
        </button>
      </div>
      {showCollection ? (
        <CollectionPage />
      ) : (
        <>
          <SearchBar />
          <Tabs />
          <ResultGrid />
        </>
      )}
    </div>
  )
}

export default App
