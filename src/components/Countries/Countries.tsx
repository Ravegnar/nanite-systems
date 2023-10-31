//'use client'
import {addData, getData} from "@/services/firebase";

const Countries = () => {

  const handleForm = async () => {
    const data = {
      name: 'John snow',
      house: 'Stark'
    }

    const { result, error } = await addData('Nanite Systems', data)

    console.log(result)
    if (error) {
      return console.log(error)
    }
  }

  let frrr: any

 // handleForm()
/*
  (async () => {
    frrr = await getData('Nanite Systems', ["user-id"])
    console.log(frrr)
  })()
  */
  
  return (
    <div></div>
  )
  };
  
export default Countries;
/*
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig'; // Zde importujte konfiguraci z vašeho souboru
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'Nanite Systems');
  console.log(citiesCol)
  const citySnapshot = await getDocs(citiesCol);
  console.log(citySnapshot)
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList)
  return cityList;
}
//const firstThreeRes = await citiesRef.orderBy('name').limit(3).get();

async function getCity(db) {
    const nsCollection = collection(db, 'test'); // Nahraďte za správný název sbírky
    const frkQuery = query(nsCollection, where('id', '>', 0));
    const frkSnapshot = await getDocs(frkQuery);
    const frkCities = frkSnapshot.docs.map((doc) => doc.data());
  console.log(frkCities)
    return frkCities;
  }
  getCity(db)
  */
/*
import React from "react";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  query,
  collection,
  limit,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { firestore } from "../firebase";

function Products() {
  // Define a query reference using the Firebase SDK
  const ref = query(collection(firestore, "products"));

  // Provide the query to the hook
  const query = useFirestoreQuery(["products"], ref);

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  const snapshot = query.data;

  return snapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data();

    return <div key={docSnapshot.id}>{data.name}</div>;
  });
}
*/
//"use client"
/*
import { useEffect, useState } from 'react'

import { useQuery } from '@apollo/client';
import database from '@/services/firebase';
import { gql } from '@apollo/client';

console.log(database)

const QUERY = gql`
  query {
    countries {
      capital
    }
  }
`;

const Countries = () => {
return ""
};

export default Countries;
*/
/*

function Countries() {
	useEffect(() => {
        (async () => {
			try {
			  const response = await fetch("https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/NCO.json")
			  const data = await response.json();
			  console.log(data)
			} catch (error) {
				console.log(error)
			} 
		  })()
	}, [])
	
	return (
		<div>asdasd</div>
	)
  }

export default Countries;

{
  "rules": {
    ".read": "now < 1978748400000",
    ".write": false
  }
}

import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query {
    countries {
      capital
    }
}
`;
*/

/*
const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
export default function Countries() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return (
      <h2>as
      </h2>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  return <div>asd</div>;
}
*/


/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrk0FL4bowNHiGT3ULMxTFlsmvShwCnQ8",
  authDomain: "nanite-systems-739f7.firebaseapp.com",
  databaseURL: "https://nanite-systems-739f7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nanite-systems-739f7",
  storageBucket: "nanite-systems-739f7.appspot.com",
  messagingSenderId: "946223334122",
  appId: "1:946223334122:web:61a9e277e9353e7ea30d93",
  measurementId: "G-6RE6MZ1CZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/