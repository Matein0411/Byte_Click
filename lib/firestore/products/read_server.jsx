import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export const getProduct = async ({ id }) => {
  const docSnap = await getDoc(doc(db, `products/${id}`));
  // const data = await getDoc(doc(db, `products/${id}`));
  // if (data.exists()) {
  //   return data.data();
  if (docSnap.exists()) {
    return serializeTimestamps(docSnap.data()); // 🔹 Serializar timestamps
  } else {
    return null;
  }
};

export const getFeaturedProducts = async () => {
  const list = await getDocs(
    query(collection(db, "products"), where("isFeatured", "==", true))
  );
  // return list.docs.map((snap) => snap.data());
  return list.docs.map((snap) => serializeTimestamps(snap.data())); // 🔹 Serializar timestamps
};

export const getProducts = async () => {
  const list = await getDocs(
    query(collection(db, "products"), orderBy("timestampCreate", "desc"))
  );
  // return list.docs.map((snap) => snap.data());
  return list.docs.map((snap) => serializeTimestamps(snap.data())); // 🔹 Serializar timestamps
};

export const getProductsByCategory = async ({ categoryId }) => {
  const list = await getDocs(
    query(
      collection(db, "products"),
      orderBy("timestampCreate", "desc"),
      where("categoryId", "==", categoryId)
    )
  );
  // return list.docs.map((snap) => snap.data());
  return list.docs.map((snap) => serializeTimestamps(snap.data())); // 🔹 Serializar timestamps
};

// const serializeTimestamps = (data) => {
//   return {
//     ...data,
//     timestampCreate: data.timestampCreate ? data.timestampCreate.toMillis() : null,
//     timestampUpdate: data.timestampUpdate ? data.timestampUpdate.toMillis() : null,
//   };
// };

const serializeTimestamps = (data) => {
  return {
    ...data,
    timestampCreate: data.timestampCreate ? data.timestampCreate.seconds : null,
    timestampUpdate: data.timestampUpdate ? data.timestampUpdate.seconds : null,
  };
};

