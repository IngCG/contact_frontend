import axios from "axios";

const API_URL = "http://localhost/contact_backend";

export const getContacts = () => axios.get(`${API_URL}/api.php`);
export const addContact = (data) => axios.post(`${API_URL}/api.php`, data);
export const updateContact = (data) => axios.put(`${API_URL}/api.php`, data);
export const deleteContact = (id) =>
  axios.delete(`${API_URL}/api.php?id=${id}`);
