<!--
    Object.entries(data).map(([key, val]: any) => {
        return (
        <div key={key}>{val?.name ? val.name : key}</div>
        )
    })

    <div className="flex flex-col items-center justify-center">
        {Object.entries(data).map(([key, val]: any) => {
            return (
                <div key={key} className="">
                    {val?.name ? val.name : key}
                </div>
            )
        })}
    </div>

								<Image src={val.image} width={500} height={500} alt="Picture of the author" />
								<img
									src={val.image}
									alt=""
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>

https://ravegnar.github.io/NC-store/static/media/Heavy.42e763ecd8533de593e6.jpg



<div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
        </a>

        </div>
    </div>
</div>




		//const queryData = query(collectionData, where("id", ">", 0))
		//orderBy("name"),
		//const queryData = query(collectionData, orderBy("name"), limit(3));


    export const getData = async (coll, docu) => {
	let result = null,
		error = null
		getTop3ToolsByPrice()

	try {
		const collectionData = doc(firestore, coll, docu)
		const docsData = await getDoc(collectionData)

		result = docsData.data()//.docs.map((doc) => doc.data())
		console.log(result)
	} catch (e) {
		console.log(e)
		error = e
	}

	return { result, error }
}
	//let data: any
	//let loading = false
	/*
	useEffect(() => {
		if (!activeProducts) {
			return
		}
		loading = true
		;(async () => {
      const { result, error } = await getData(`NS-Products`, activeProducts)
      if (result) {
        loading = false
        data = result
        console.log(data, error)
      }
		})()
	}, [activeProducts])
  */
	//getData(`NS-Products`, "Weapons")
	/*
  (async () => {
    frrr = await getData('Nanite Systems', ["user-id"])
    console.log(frrr)
  })()   ${type}
  */

  addDoc
aggregateFieldEqual
aggregateQuerySnapshotEqual
and
arrayRemove
arrayUnion
average
collection
collection
collection
collectionGroup
connectFirestoreEmulator
count
deleteDoc
deleteField
doc
doc
doc
documentId
endAt
endAt
endBefore
endBefore
getAggregate
getCount
getDoc
getDocs
getFirestore
getFirestore
getFirestore
getFirestore
increment
initializeFirestore
initializeFirestore
limit
limitToLast
or
orderBy
query
query
queryEqual
refEqual
to
runTransaction
serverTimestamp
setDoc
setDoc
setLogLevel
snapshotEqual
startAfter
startAfter
startAt
startAt
sum
terminate
updateDoc
updateDoc
where
writeBatch
-->
