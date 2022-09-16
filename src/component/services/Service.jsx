import axios from "axios";
const Base_Url = "http://localhost:8080/";

//add feedback url-
export async function addFeedback(data) {
  try {
    const response = await axios.post(Base_Url + "feedback/addFeedback", data);
    return await response;
  } catch (error) {
    return [];
  }
}
//registration form url
export async function addUsers(data) {
  try {
    const response = await axios.post(Base_Url + "user/addUsers", data);
    return await response;
  } catch (error) {
    return [];
  }
}
