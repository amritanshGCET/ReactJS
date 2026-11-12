import { useSelector } from 'react-redux'

function CollectionPage() {
    const collectionData = useSelector((state) => state.collection.collectionList)

    return (
        <main className="px-4 pb-10 sm:px-6">
            <h1 className="mb-6 text-2xl font-bold">Your Collection</h1>
            {collectionData.length === 0 ? (
                <p className="text-gray-300">No saved items yet.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {collectionData.map((item) => (
                        <article
                            key={item.collectionId}
                            className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-lg"
                        >
                            <div className="aspect-4/3 overflow-hidden bg-gray-950">
                                {item.collectionType === 'video' ? (
                                    <video
                                        className="h-full w-full object-contain"
                                        src={item.collectionSrc}
                                        controls
                                    />
                                ) : (
                                    <img
                                        className="h-full w-full object-contain"
                                        src={item.collectionSrc}
                                        alt={item.collectionTitle || 'Saved item'}
                                    />
                                )}
                            </div>
                            <p className="p-4 text-sm font-medium text-gray-200">
                                {item.collectionTitle || 'Untitled item'}
                            </p>
                        </article>
                    ))}
                </div>
            )}
        </main>
    )
}

export default CollectionPage
