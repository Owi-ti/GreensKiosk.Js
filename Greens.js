fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(products) {
 console.log(products);

let theProducts = document.getElementById('products')
products.forEach(k => {
    let productsList = document.createElement('li')
    productsList.innerText = `${k.name}`
    theProducts.appendChild(productsList) }) 
})
.catch(function(error){
 console.log('error',error); });

fetch('http://localhost:5000/products/fruits')
.then(function(response) {
    return response.json(); })
.then(function(fruits) {
 console.log(fruits);


let thefruList = document.getElementById('fruList')
fruits.forEach(k => {
    let fruList = document.createElement('li')
    fruList.innerText = `${k.name}`
    thefruList.appendChild(fruList) })
 })
.catch(function(error){
 console.log('error',error);
});
fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(vegetables) {
 console.log(vegetables);




let thevegList = document.getElementById('vegList')
vegetables.forEach(k => {
    let vegList = document.createElement('li')
    vegList.innerText = `${k.name}`
    thevegList.appendChild(vegList) })
 })
.catch(function(error){
 console.log('error',error);
});