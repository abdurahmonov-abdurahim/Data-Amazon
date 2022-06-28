"use strict";

// import * as things from './things.js';
import { products } from './things.js';

import { categories } from './categories.js';

const elCategoryList = document.querySelector(".category__list");

const renderCategories = function (categoryarr) {

  const categoriesName = [];

  categoryarr.forEach(item => {

    categoriesName.push(item.name)
  });


  categoryarr.forEach(category => {

    //ADDING NEW ELEMENTS
    const elCategoryItem = document.createElement("li");
    const elCategoryButton = document.createElement("button");
    const elButtonImage = document.createElement("img");
    const elButtonDesc = document.createElement("p");

    //ADD AS CHILD TO LIST
    elCategoryList.appendChild(elCategoryItem);
    elCategoryItem.appendChild(elCategoryButton);
    elCategoryButton.appendChild(elButtonImage);
    elCategoryButton.appendChild(elButtonDesc);

    //SETTING ATTRIBUTE
    elCategoryList.setAttribute("class", "d-flex list-unstyled flex-wrap justify-content-between");
    elCategoryItem.setAttribute("class", "item")
    elCategoryButton.setAttribute("class", "p-n-1 back-color backhover")
    elButtonImage.setAttribute("src", category.img)
    elButtonImage.style.width = "50px";
    elButtonImage.style.height = "50px";
    elCategoryItem.style.width = "95px";
    elButtonDesc.textContent = category.name
    elButtonDesc.setAttribute("class", "font-desc mt-1");

    elCategoryButton.addEventListener("click", product => {
      product.preventDefault();

      product.forEach(item => {

        //ADDING NEW ELEMENTS
        const elProductsItem = document.createElement("li");
        const elProductsLink = document.createElement("a");
        const elLinkImage = document.createElement("img");
        const elLinkDescWrapper = document.createElement("div");
        const elLinkDescTitle = document.createElement("h5")
        const elLinkDescName = document.createElement("span")
        const elLinkDescRateBox = document.createElement("div")
        const elLinkDescPrice = document.createElement("p")
        const elLinkDescRating = document.createElement("p")

        //ADD AS CHILD TO LIST


      })
    })
  })
};

//BUTTON LISTENING AND ADDING ELEMENTS TO HTML



renderCategories(categories)