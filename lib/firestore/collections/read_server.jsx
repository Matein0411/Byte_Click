import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const getCollection = async ({ id }) => {
  const data = await getDoc(doc(db, `collections/${id}`));
  if (data.exists()) {
    return data.data();
  } else {
    return null;
  }
};

// export const getCollections = async () => {
//   const list = await getDocs(collection(db, "collections"));
//   return list.docs.map((snap) => snap.data());
// };

// const serializeTimestamps = (data) => {
//   return {
//     ...data,
//     timestampCreate: data.timestampCreate
//       ? data.timestampCreate.seconds // O usar: new Date(data.timestampCreate.seconds * 1000).toISOString()
//       : null,
//   };
// };

const serializeTimestamps = (data) => {
  return {
    ...data,
    timestampCreate: data.timestampCreate ? data.timestampCreate.seconds : null,
    timestampUpdate: data.timestampUpdate ? data.timestampUpdate.seconds : null,
  };
};


export const getCollections = async () => {
  const list = await getDocs(collection(db, "collections"));
  return list.docs.map((snap) => serializeTimestamps(snap.data())); // 🔹 Serializar datos
};
