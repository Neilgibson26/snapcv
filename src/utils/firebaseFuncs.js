import { db } from "./firebase";
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

export async function addUser(userID, user) {
  try {
    await setDoc(doc(db, "users", userID + ""), user, { merge: true });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getUser(userID, callback) {
  const docRef = doc(db, "users", userID + "");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    callback({ id: docSnap.id, ...docSnap.data() });
  } else {
    // doc.data() will be undefined in this case
    console.log("This is in addUser");
    callback(null);
  }
}

export async function getAllUsers(callback) {
  const allUsers = await getDocs(collection(db, "users"));
  const usersArray = [];
  allUsers.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    usersArray.push({ id: doc.id, ...doc.data() });
    console.log(doc.id, " => ", doc.data());
  });
  callback(usersArray);
}

export async function addJob(userID, jobID, job) {
  try {
    await setDoc(
      doc(db, "jobs", jobID + ""),
      { employerID: userID, ...job, interestedUsers: [] },
      { merge: true }
    );
    addEmployeeAndJob(userID, { id: jobID, ...job });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getAllJobs(callback) {
  const allJobs = await getDocs(collection(db, "jobs"));
  const jobsArray = [];
  allJobs.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    jobsArray.push({ id: doc.id, ...doc.data() });
    console.log(doc.id, " => ", doc.data());
  });

  callback(jobsArray);
}
export async function getJob(jobID, callback) {
  const docRef = doc(db, "jobs", jobID + "");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    callback({ id: docSnap.id, ...docSnap.data() });
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    callback(null);
  }
}

export async function addEmployeeAndJob(userID, job) {
  const employeeRef = doc(db, "employers", userID + "");
  const employeeSnap = await getDoc(employeeRef);

  if (employeeSnap.exists()) {
    console.log("Document data:", employeeSnap.data());
    const data = employeeSnap.data();
    data.postedJobs.push(job);
    console.log("user", userID);
    await setDoc(doc(db, "employers", userID + ""), data, { merge: true });
  } else {
    console.log("No such document!");
    await setDoc(
      doc(db, "employers", userID + ""),
      { postedJobs: [job] },
      { merge: true }
    );
  }
  try {
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getEmployer(userID, callback) {
  const docRef = doc(db, "employers", userID + "");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    callback({ id: docSnap.id, ...docSnap.data() });
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    callback(null);
  }
}

export async function applyToJob(user, job) {
  job.interestedUsers.push(user);

  await setDoc(doc(db, "jobs", job.id + ""), job, { merge: true });
  try {
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
