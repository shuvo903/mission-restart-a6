const url = "https://fakestoreapi.com/products"

const product = () =>{
    const data = fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => console.log(data))
    
}