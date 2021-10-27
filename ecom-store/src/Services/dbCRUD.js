import firestore from "./firebase";

//Create
export const createProduct = async (product) => {
  const colRef = firestore.collection("products");
  const docRef = colRef.doc();
  await docRef.set(product);
};

//Read All
export const getProducts = async () => {
  const colRef = firestore.collection("products");
  const snapshot = await colRef.get(); //returns a promise
  return cleanedRecord(snapshot);
};

//Read by ID
export const findProduct = async (id) => {
  const colRef = firestore.collection("products");
  const docRef = colRef.doc(id);
  const snapshot = await docRef.get();
  return cleanRecord(snapshot);
};

//Read by name

//Update
export const updateProduct = async (id, partial) => {
  const colRef = firestore.collection("products");
  const docRef = colRef.doc(id);
  await docRef.update(partial);
};

//Destroy
export const deleteProduct = async (id) => {
  const colRef = firestore.collection("products");
  const docRef = colRef.doc(id);
  await docRef.delete(id);
};

//Clean Read data
export const cleanRecord = (docSnapshot) => ({
  id: docSnapshot.id,
  ...docSnapshot.data(),
});

export const cleanedRecord = (querySnapshot) => {
  return querySnapshot.docs.map(cleanRecord);
};
