document.addEventListener("DOMContentLoaded", function () {
  // Array of category data
  const categories = [
    { name: "Grocery", img: "assets/grocery.png", link: "/category/grocery" },
    { name: "Mobiles", img: "assets/mobiles.png", link: "/category/mobiles" },
    { name: "Fashion", img: "assets/fashion.png", link: "/category/fashion" },
    { name: "Electronics", img: "assets/electronics.png", link: "/category/electronics" },
    { name: "Furniture", img: "assets/home-furniture.png", link: "/category/furniture" },
    { name: "Appliances", img: "assets/appliances.png", link: "/category/appliances" },
    { name: "BeautyToys", img: "assets/beauty-toys.png", link: "/category/beauty-toys" },
    { name: "TwoWheelers", img: "assets/two-wheelers.png", link: "/category/two-wheelers" }
  ];

  // Get the categories container
  const categoriesContainer = document.querySelector(".categories");

  // Loop through the categories and create the HTML structure dynamically
  categories.forEach(category => {
    // Create a div for each category
    const categoryDiv = document.createElement("a");
    categoryDiv.classList.add("category");
    categoryDiv.setAttribute("href", category.link);

    // Create an image element
    const img = document.createElement("img");
    img.setAttribute("src", category.img);
    img.setAttribute("alt", category.name);

    // Create a paragraph element for the category name
    const name = document.createElement("p");
    name.textContent = category.name;

    // Append the image and name to the category div
    categoryDiv.appendChild(img);
    categoryDiv.appendChild(name);

    // Append the category div to the container
    categoriesContainer.appendChild(categoryDiv);
  });
});
