console.log(1111111);
console.log(3333333);
setTimeout(() => console.log('ikkkk'),5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(55555550);
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}