//this function is to be called once and once alone
import { db } from "./config";
import data from "./NINArray.json"



// Add a new document in collection "cities"
export default function uploadNINs(NINs){

    db.collection("Voters").add({
       data
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}