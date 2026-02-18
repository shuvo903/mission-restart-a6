const loadProduct = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => displayProduct(json));
};
const loadProducts = (category) =>  {

    const url = `https://fakestoreapi.com/products/category/${category}`
    console.log(url);
}


const displayProduct = (products) => {
  const productBtnContainer = document.getElementById("product-btn-container");

  productBtnContainer.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.innerHTML = `

  
        
<button " class="btn btn-outline  btn-primary rounded-full mb-10">All</button>


`;

  productBtnContainer.append(allBtn);

  for (let product of products) {
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `  
    
<button onclick="loadProducts(${product.category})" class="btn btn-outline  btn-primary rounded-full mb-10"> ${product}</button>


`;

    productBtnContainer.append(btnDiv);
  }
};

loadProduct();
