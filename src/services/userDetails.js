import axios from 'axios';

export function getUsers(setUser) {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response,) => {
    setUser(response.data);
  }).catch((error) => {
    console.log("Error Occurred");
  })
}

export function getUserDetails(setUserDetail, userId) {
  axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response,) => {
    setUserDetail(response.data);
  }).catch((error) => {
    console.log("Error Occurred");
  })
}