import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function addUser(userID, user) {
  try {
    await setDoc(doc(db, "users", userID + ""), user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getUser(userID) {
  const docRef = doc(db, "users", userID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return docSnap.data();
}
