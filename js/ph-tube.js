const loadCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  showCatagories(data.data);
};

const showCatagories = (catagories) => {
  const background = "##FF1F3D";
  catagories.forEach((element) => {
    // console.log(element);
    const categoriesContainer = document.getElementById(
      "category-btn-container"
    );

    const button = document.createElement("button");
    button.classList.add("p-3");
    button.classList.add("m-3");
    button.classList.add("btn");
    button.classList.add("bg-[#FF1F3D]");
    if (element.category !== "All") {
      button.disabled = true;
    }
    // button.style.cssText = "p-3 m-3 btn btn-[#FF1F3D]";
    button.innerText = element.category;
    categoriesContainer.appendChild(button);
  });
};

const loadAllData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1000"
  );
  const data = await res.json();
  showAllData(data.data);
};
const showAllData = (data) => {
  data.forEach((element) => {
    console.log(element);
    const cardContainer = document.getElementById("card-container");
    const cardDiv = document.createElement("div");
    cardDiv.classList = `card, w-96, bg-base-100, shadow-xl`;
    cardDiv.innerHTML = `
    
     <figure>
              <img
                src=${element.thumbnail}
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
            <div class="flex w-full">
            <div class="avatar mr-3">
             <div class="w-10 rounded-full">
 <img class =""
                src=${element.authors[0].profile_picture}
                alt="Shoes"
              />
            </div>
            </div>
            
             <h2 class="card-title font-bold text-[16px]">${element.title}
              </h2>
            </div>
            
              <h2 class="">
                ${element.authors[0].profile_name}
                <div class="avatar">
                <div class="w-10 rounded-full">
            <i class="fa-solid fa-check"></i>
                </div>
                
                </div>
              </h2>
              <i class="fa-solid fa-check"></i>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
    `;
    cardContainer.appendChild(cardDiv);
  });
};
loadAllData();
loadCategory();
