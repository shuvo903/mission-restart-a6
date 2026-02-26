const trendingNow = () => {
  manageSpinner(true);

  const url = "https://fakestoreapi.com/products";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTrendingNow(data));
};

const displayTrendingNow = (products) => {
  const topRated = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);

  const trendingNowCardContainer = document.getElementById("trending-product");
  if (!trendingNowCardContainer) return;

  trendingNowCardContainer.innerHTML = "";

  topRated.forEach((products) => {
    const trendingNowCard = document.createElement("div");

    trendingNowCard.className = "trendingNowCard";

    trendingNowCard.innerHTML = `
      <div class="card bg-white w-auto shadow-md drop-shadow-md hover:drop-shadow-xl">
        <div class="bg-[#e5e7eb] rounded-t-2xl items-center">
          <img class="w-full h-96 object-contain p-5" src="${products.image}" alt="image">
        </div>
        <div class="card-body text-2xl text-black font-normal">
          <div class="flex justify-between">
            <div class="badge bg-[#e0e7ff] text-[#321ecc] rounded-3xl p-3.5 font-semibold mb-3">
              ${products.category}
            </div>
            <div class="text-lg text-gray-400 font-normal">
              <i class="fa-solid fa-star text-orange-400"></i>
              ${products.rating.rate} (${products.rating.count})
            </div>
          </div>
          <h2 class="font-semibold lg:text-xl text-lg lg:w-80 w-72 truncate">
            ${products.title}
          </h2>
          <p class="text-2xl text-black font-bold">
            $${products.price}
          </p>
          <div class="card-actions w-full gap-4 flex">
            <button onclick="loadProductDetail(${products.id})"
              class="btn flex-1 rounded-lg border-gray-400 font-bold border-2 text-gray-500 btn-outline">
              <i class="fa-regular fa-eye"></i> Details
            </button>
            <button class="btn flex-1 rounded-lg font-bold btn-primary">
              <i class="fa-solid fa-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    `;

    trendingNowCardContainer.append(trendingNowCard);
  });
  manageSpinner(false);
};

const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("trending-product").classList.add("hidden");
  } else {
    document.getElementById("trending-product").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};

const loadProductDetail = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url);
  const detailes = await res.json();
  displayProductDetailes(detailes);
};

const displayProductDetailes = (products) => {
  const detailesModal = document.getElementById("details-container");

  detailesModal.innerHTML = `
  
              <div class=" bg-white w-auto">
                 
                  <div class=" text-2xl text-center  text-black font-normal">
                  <h2 class="font-bold text-xl w-full mb-6">${products.title}</h2>
                  <p class="font-normal text-sm w-full mb-6">${products.description}</p>
                  <div class="flex justify-between">
                  <p class="text-2xl text-black font-bold">
                      $${products.price}
                  </p>     
                          <div class="text-lg text-gray-600 font-normal"><i class="fa-solid fa-star text-orange-400 mb-6"></i>
                              ${products.rating.rate} (${products.rating.count})
                          </div>
                      </div>
                      
                      <div class="card-actions w-full gap-4 flex ">
                          
  
                          <button class="btn flex-1 rounded-lg font-bold btn-soft btn-primary"><i
                                  class="fa-solid fa-cart-plus"></i>
                              Buy Now</button>

                          <button class="btn flex-1 rounded-lg font-bold btn-soft btn-primary"><i class="fa-solid fa-credit-card"></i>
                              Add to Cart</button>
                      </div>
                  </div>
              </div>
  
  `;
  document.getElementById("modal").showModal();
};
trendingNow();
