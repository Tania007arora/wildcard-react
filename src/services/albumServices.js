import axios from 'axios';

export function getAlbums(setAlbum) {
  axios.get("https://jsonplaceholder.typicode.com/albums").then((response,) => {
    setAlbum(response.data);
  }).catch((error) => {
    console.log("Error Occurred");
  })
}

export function getAlbumDetails(setAlbum, albumId) {
  axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`).then((response,) => {
    setAlbum(response.data);
  }).catch((error) => {
    console.log("Error Occurred");
  })
}

export function getPhotos(setPhotos, albumId) {
  axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).then((response,) => {
    setPhotos(response.data);
  }).catch((error) => {
    console.log("Error Occurred");
  })
}