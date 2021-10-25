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
export const findProduct = async () => {
  const colRef = firestore.collection("products");
  const docRef = colRef.doc(id);
  const snapshot = await docRef.get();

  return cleanRecord(snapshot);
};

//Update

//Destroy
const deleteRecord = async () => {
  await deleteProduct(product.id);
};

//Clean Read data
const cleanRecord = (docSnapshot) => ({
  id: docSnapshot.id,
  ...docSnapshot.data(),
});

const cleanedRecord = (querySnapshot) => {
  return querySnapshot.docs.map(cleanRecord);
};
