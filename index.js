const postUrl = 'https://jsonplaceholder.typicode.com/posts';


const response = fetch(postUrl);
const user = response.then((data) => console.log(data.json()));
console.log(user);