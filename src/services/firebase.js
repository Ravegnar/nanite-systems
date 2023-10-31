import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebaseConfig"
import { getFirestore, doc, setDoc, query, where, collection, getDocs } from "firebase/firestore/lite"

const firebase = initializeApp(firebaseConfig)
const firestore = getFirestore(firebase)

export const addData = async (path, data) => {
	let result = null,
		error = null

	try {
		result = await setDoc(doc(firestore, path), data, {
			merge: true
		})
	} catch (e) {
		error = e
	}

	return { result, error }
}

export const getData = async (path) => {
	try {
		const collectionData = collection(firestore, path)
		const queryData = query(collectionData, where("id", ">", 0))
		const docsData = await getDocs(queryData)
		console.log(docsData)

		result = docsData.docs.map((doc) => doc.data())
	} catch (e) {
		error = e
	}

	return { result, error }
}
