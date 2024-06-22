const loadCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  showCatagories(data.data);
};

const showCatagories = (catagories) => {
  const categoriesContainer = document.getElementById("category-btn-container");
  categoriesContainer.innerHTML = "";
  catagories.forEach((element) => {
    // console.log(element);

    const button = document.createElement("button");
    button.classList.add("p-3");
    button.classList.add("m-3");
    button.classList.add("btn");
    button.classList.add("bg-[#FF1F3D]");

    button.onclick = () => clickDynamicButton(element.category_id, button);
    // button.disabled = element.category !== "All";
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
  console.log(data.length);
  const cardContainer = document.getElementById("card-container");
  const emptyDataContainer = document.getElementById("empty-data");
  if (data.length === 0) {
    cardContainer.innerHTML = "";
    emptyDataContainer.classList.remove("hidden");
    emptyDataContainer.classList.add("flex");
    emptyDataContainer.classList.add("justify-center");
    // const showEmptyData = document.getElementById("show-empty-data-img");
    // showEmptyData.innerHTML = emptyDataContainer;
    // return;
  } else {
    cardContainer.innerHTML = "";
    emptyDataContainer.classList.add("hidden");
    data.forEach((element) => {
      // console.log(element);

      const cardDiv = document.createElement("div");
      cardDiv.classList = `card, w-96, bg-base-100, shadow-xl`;
      cardDiv.innerHTML = `
      
       <figure>
                <img
                  src=${element.thumbnail}
                  alt="Shoes"
                />
              </figure>
              <div class="mt-5 mb-6">
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
              
                <h2 class="ml-[50px]">
                  ${element.authors[0].profile_name}
                  <div class="avatar ml-[6px]">
                  <div class="w-5 rounded-full bg-[#2568EF] mx-auto text-center">
            <p class="text-white">&#10003</p>
                  </div>
                  
                  </div>
                </h2>
               
                <p class="ml-[50px]">${element.others?.views} <span>views</span></p>
               
              </div>
      `;
      cardContainer.appendChild(cardDiv);
    });
  }
};

// click dynamic button

const clickDynamicButton = (categoryId, clickButton) => {
  // button.disabled = element.category !== "All";
  const buttons = document.querySelectorAll("#category-btn-container button");
  buttons.forEach((button) => {
    button.disabled = false;
  });
  clickButton.disabled = true;
  // if (!clickButton) {
  //   disabled = true;
  // } else {
  //   disabled = false;
  // }
  //  .disabled = true;

  // clickButton.disabled = false;
  // if (!clickButton) {
  //   disabled = true;
  // }
  // setTimeout(() => {
  //   clickButton.disabled = false; // Re-enable the clicked button after a short delay
  // }, 100);

  showClickData(categoryId);
};

// music data

const showClickData = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  console.log(data);
  showAllData(data.data);
};

loadAllData();
loadCategory();
