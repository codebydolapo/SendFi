import { db } from "./config";



// Add a new document in collection "cities"
export default function registerVoter(name, NIN, walletAddress){

    db.collection("Voters").doc(walletAddress).set({
        name: name,
        NIN: NIN,
        walletAddress: walletAddress
    })
    .then(() => {
        console.log("Voter successfully registered!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}