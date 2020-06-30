/*HTTP Request Mehtod

GET - Retrives Data and has no secondry effect
POST - Send Data to server and add resources

HEAD, DELETE, PATCH*/

const root = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(root, { method: "GET" })
    .then(response => response.json())
    .then(json => console.log(json))