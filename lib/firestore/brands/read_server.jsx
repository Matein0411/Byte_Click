import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const getBrand = async ({ id }) => {
  const data = await getDoc(doc(db, `brands/${id}`));
  if (data.exists()) {
    return data.data();
  } else {
    return null;
  }
};

// export const getBrands = async () => {
//   const list = await getDocs(collection(db, "brands"));
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


export const getBrands = async () => {
  const list = await getDocs(collection(db, "brands"));
  return list.docs.map((snap) => serializeTimestamps(snap.data())); // 🔹 Serializar datos
};
