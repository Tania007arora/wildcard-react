import axios from 'axios';

export function getPosts(setPost) {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response,) => {
    setPost(response.data);
  }).catch((error) => {
    console.log("Error Occurred");
  })
}

export function getPostDetails(setPost, postId) {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((response,) => {
    setPost(response.data);
  }).catch((error) => {
    console.log("Error Occurred");
  })
}

export function getPostComments(setComment, postId) {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((response,) => {
    setPost(response.data);
  }).catch((error) => {
    console.log("Error Occurred");
  })
}