console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let watching = new Promise((resolve, reject) => {
    let userWatchingLiveStream = true
    if (userWatchingLiveStream) {
        resolve("Thumbs up and Subscribe!");
    } else {
        reject("User left.")
    }
})
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.error(err);
});