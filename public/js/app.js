// fetch('http://localhost:3000/weather?address=seattle')
// .then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }

//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    // To prevent the default behavior of refreshing the browser upon clicking the submit button
    e.preventDefault()
    //.value extracts the input value and stores in location variable
    const location = search.value

    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''
    
    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})


// BROWSER HTTP REQUEST WITH FETCH
// To make http request from client side jasvscript we'll use the fetch API
// Fetch is not part of JS. It is a browser-based API which means it's something we can use in all modern browsers
// It's not accessible in node.js so the code we write inside of here isn't going to be something you'll be able to use in a backend node script
// This script is running in client side Javascript so using the fetch API is perfectly fine
// Calling fetch in client side javascript is going to kick off an async operation, much like calling a request in node.js
// This means we don't have access to the data right away. Instead we provide a callback function and that function will run at some point in the future when the data is available

// To use fetch:
// fetch() is an asynchronous operation. What we get back from fetch() function is a promise
// Use a .then() method to resolve the promise
// Now in .then(), we have access to the response we got back from fetch
// We provide a callback that takes in the response as an argument. And we can do whatever we want with the response inside the callback
// But first we need to convert the json string response to a javascript object
// NOTE: the response we get back from fetch() is in json string format
// We need to call .json() on the response. WHAT WE GET BACK FROM .JSON() IS ANOTHER PROMISE. So we need to call another .then() method to resolve the promise. Now we have a javascript object of the DATA in the 2nd .then() method
// We pass in another callback to the .then() method and that callback takes in the data
// fetch('url').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })