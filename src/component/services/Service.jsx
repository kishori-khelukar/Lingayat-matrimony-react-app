import axios from "axios";
const Base_Url = "http://localhost:8080/";

//get single user url
export function getUserLogin(data) {
  return axios.post(Base_Url + "user/getUserLogin", data);
}
//add feedback url-
export function addFeedback(data) {
  return axios.post(Base_Url + "feedback/addFeedback", data);
}
//get all user url
export function getAllUsers() {
  return axios.get(Base_Url + "user/getAllUsers");
}
//get single user url
export function getSingleUser(id) {
  return axios.get(Base_Url + "user/getSingleUser/" + id);
}
//add user url
export function addUsers(data) {
  return axios.post(Base_Url + "user/addUsers", data);
}
//update user url-
export function updateUser(data, id) {
  return axios.put(Base_Url + "user/updateUser/" + id, data);
}
