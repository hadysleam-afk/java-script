function getEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success ==> Hadysleam@gmail.com");
        }, 3000);
    });
}
getEmail().then((result) => {
    console.log(result);
});
