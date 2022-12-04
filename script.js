function getCatImage() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let newCat = document.createElement("img");
      newCat.src = data[0].url;
      document.getElementById("catImage").src = data[0].url;
      return document.body.appendChild(newCat);
    });
}

// let catImgUrl = data[0].url;
// let newCat = document.createElement("catImage");
// newCat.setAttribute("src", `${catImgUrl}`);
// newCat.classList.add("showcase");

// let catFrame = document.querySelector(".image-container");
// image - container.appendChild(catFrame);
// const button = document.getElementById("button");
// const moreCat = docyment.getElementById(".image-container");

// button.addEventListener("click", function () {
//   let element = document.createElement(getCatImage());
// });

// const btn = document.querySelector("button");
// btn.addEventListener("click", getCatImage);

// const imageFrame = document.querySelector(".image-container");
// function addImage (){

// }

// function addimage() {
//   let img = document.createElement("img");
//   document.get;
// }

// document.getElementById("button").onclick = appendchild(getCatImage());

// document.getElementById("img").appendChild(getCatImage);
// document.getElementById("catImage").appendChild(getCatImage());

// const button = document.querySelector("button");
// button.addEventListener("click", (event) => {
// document.getElementById("img").appendChild(getCatImage);

// });
