// Set service worker
("use strict");

// import "https-localhost";
// // app is an express app, do what you usually do with express
// listen(5000);
// redirect();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../../sw.js");
}
