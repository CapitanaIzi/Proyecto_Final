import { db } from "../config/firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProductsModel = async () => {
  const snapshot = await getDocs(productsCollection);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getProductByIdModel = async (id) => {
  const productRef = doc(db, "products", id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    throw new Error("Producto no encontrado");
  }

  return { id: snapshot.id, ...snapshot.data() };
};

export const createProductModel = async (data) => {
  const docRef = await addDoc(productsCollection, data);
  return { id: docRef.id, ...data };
};

export const deleteProductModel = async (id) => {
  const productRef = doc(db, "products", id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    throw new Error("Producto no encontrado");
  }

  await deleteDoc(productRef);
  return { id };
};