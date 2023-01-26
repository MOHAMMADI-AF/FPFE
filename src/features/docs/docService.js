import axios from "axios";
//.if the application cannot find the location of the API it send the request to the proxy server which is send in the package.json file
const API_URL = "/api/docs/";

// Create new doc
const createDoc = async (docData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, docData, config);

  return response.data;
};

// Get user docs
const getDocs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//. Update user doc
const updateDoc = async (docId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.update(API_URL + docId, config);

  return response.data;
};
// Delete user doc
const deleteDoc = async (docId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + docId, config);

  return response.data;
};

const docService = {
  createDoc,
  getDocs,
  deleteDoc,
  updateDoc,
};

export default docService;
