import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Thing } from "../types/thing";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveThingInDB = async (thing:Thing) => {
    try {
        await addDoc(collection(db, "things"), thing);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

/*const getThingFromDB = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});
}*/

export default { saveThingInDB }