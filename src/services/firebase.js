import { getFirestore, doc, setDoc, query, where, collection, getDocs, getDoc } from "firebase/firestore/lite"
import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebaseConfig"

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

/*
    import { addData, getData } from "@/services/firebase"
    const handleForm = async () => {
		const data = dbData["NS-Products"]["Equipment"]

		const { result, error } = await addData("NS-Products/Equipment", data)

		console.log(error)
		if (error) {
			return console.log(error)
		}
	}
*/

export const getData = async (coll, docu) => {
	let result = null,
		error = null

	try {
		const collectionData = doc(firestore, coll, docu)
		//const queryData = query(collectionData, where("id", ">", 0))
		const docsData = await getDoc(collectionData)

		result = docsData.data()//.docs.map((doc) => doc.data())
	} catch (e) {
		error = e
	}

	return { result, error }
}
