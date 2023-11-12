import {
	getFirestore,
	doc,
	docs,
	setDoc,
	addDoc,
	count,
	query,
	orderBy,
	startAfter,
	startAt,
	endBefore,
	where,
	limit,
	collection,
	getDocs,
	getDoc,
	getCount
} from "firebase/firestore/lite"
import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebaseConfig"
import dbData from "./dbData.json"

const firebase = initializeApp(firebaseConfig)
const firestore = getFirestore(firebase)

/*
export const addData = async (coll, docu, data) => {
	let result = null,
		error = null

	try {
		result = await setDoc(doc(firestore, coll, docu), data, {
			merge: true
		})
	} catch (e) {
		error = e
	}

	return { result, error }
}
Object.entries(dbData["NS-Products"]["Equipment"]["Equipment"]).map(async ([k, v]) => {
	const { result, error } = await addData("Equipment", k, v)

	console.log(result, error)
	if (error) {
		return console.log(error)
	}
	//
})
*/
/*
import { addData, getData } from "@/services/firebase"
    const handleForm = async () => {
		const data = dbData["NS-Products"]["Weapons"]["Primary"]

		const { result, error } = await addData("NS-Products", "Weapons", data)

		console.log(result, error)
		if (error) {
			return console.log(error)
		}
	}

	handleForm()
*/
let lastVisible
let payload = {}
let totalPages
let lastKey

export const getData = async (options) => {
	const {
		name,
		order = "name",
		direction = "asc",
		page = 1,
		limitCount = 6
	} = options

	let result = null,
		error = null

	let key = name + order + direction
	console.log(key, options)

	if (key === lastKey && payload[name][page]) {
		console.log("stored", payload[name][page])
		return { result: payload[name][page], error: null, totalPages}
	}

	const constraints = [collection(firestore, name), orderBy(order, direction)]

	if (lastVisible && page > 1) {
		constraints.push(startAfter(lastVisible))
	}

	try {
		const queryData = query(...constraints, limit(limitCount))
		const docsData = await getDocs(queryData)

		lastVisible = docsData.docs[docsData.docs.length - 1]

		result = docsData.docs.map((doc) => doc.data())
		console.log("result", result)

		if (page === 1 && key !== lastKey) {
			const queryData = query(...constraints)
			const snapshot = await getCount(queryData)
			const totalCount = snapshot.data().count

			totalPages = Math.ceil(totalCount / limitCount)
			payload[name] = {}
		}

		lastKey = key
		payload[name][page] = result
	} catch (e) {
		console.error(e)
		error = e
	}

	return { result, error, totalPages }
}
