$(".card").click(function (evt) {
   const cardContentImg = this.querySelector(".info__img img").src
   const cardContentTitle = this.querySelector(".info__title p").innerHTML
   const cardContentPrice = this.querySelector(".info__price p").innerHTML
   addProduct(cardContentImg, cardContentTitle, cardContentPrice)
   
});

function addProduct(cardContentImg, cardContentTitle, cardContentPrice) {
   debugger
   let container = document.createElement("div");
   container.classList.add("product__popap-item");
   container.insertAdjacentHTML(
      'afterbegin',
      `<div class="product__popap-item-img">
         <img src = "${cardContentImg}" alt = "" >
       </div>
       <div class = "product__popap-item-nc" >
          <p class ="product__popap-item-nc-name"> ${cardContentTitle}</p>
          <p class = "product__popap-item-nc-count"><span class = "product-minus"> - </span> 1 <span class="product-plus">+</span> </p>
       </div>
       <div class = "product__popap-item-price" >
          <p> ${cardContentPrice} </p>
       </div>
       <div class = "product__popap-item-cancel" name = "cancel">
          <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16"viewBox = "0 0 16 16" fill = "none" >
          <path d = "M9.46585 7.99996L15.6959 1.76969C16.1014 1.36443 16.1014 0.709194 15.6959 0.30394C15.2907 -0.101313 14.6354 -0.101313 14.2302 0.30394L7.99991 6.53421L1.76983 0.30394C1.36439 -0.101313 0.709336 -0.101313 0.304082 0.30394C-0.101361 0.709194 -0.101361 1.36443 0.304082 1.76969L6.53417 7.99996L0.304082 14.2302C-0.101361 14.6355 -0.101361 15.2907 0.304082 15.696C0.506045 15.8981 0.771595 15.9997 1.03696 15.9997C1.30232 15.9997 1.56768 15.8981 1.76983 15.696L7.99991 9.4657L14.2302 15.696C14.4323 15.8981 14.6977 15.9997 14.9631 15.9997C15.2284 15.9997 15.4938 15.8981 15.6959 15.696C16.1014 15.2907 16.1014 14.6355 15.6959 14.2302L9.46585 7.99996Z" fill = "#C4C4C4"> </path>
          </svg>
      </div>
       `
   )

   let countProduct = document.querySelector(".header__col-product-count")
   countProduct.innerHTML++

   document.querySelector('.poroducts-con').appendChild(container)
   




}
document.addEventListener("DOMContentLoaded", () => {


   const shopIcon = document.querySelector(".header__col-product-shop");
   const prdPop = document.querySelector(".product__popap");
   const prdPopCancel = document.getElementsByName("cancel");
   let totalPrice = document.querySelector(".products-total__price");
   let prdCount = document.querySelector(".products__count");
   let prdCountIcon = document.querySelector(".header__col-product-count");

   shopIcon.addEventListener("click", () => {
      if (prdCount.innerHTML != "0") {
         prdPop.classList.toggle("active");
      }
   });
   window.addEventListener("click", (e) => {
      const target = e.target;
      if (
         !target.closest(".product__popap") &&
         !target.closest(".header__col-product-shop") &&
         !target.closest(".product__popap-item-cancel")
      ) {
         prdPop.classList.remove("active");
      }
   });



   prdPopCancel.forEach(function (item) {
      item.addEventListener("click", function (e) {
         let itemPrice = item.parentNode.childNodes[5].innerText;
         totalPrice.innerText -= itemPrice;

         prdCount.innerHTML -= 1;
         prdCountIcon.innerHTML -= 1;

         if (prdCount.innerHTML == 0) {
            prdPop.classList.remove("active");
            prdCountIcon.style.display = "none";
         }

         item.parentNode.parentNode.removeChild(item.parentNode);
      });
   });
});


// Search Input Focus
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon path");
searchInput.addEventListener("focusin", () => (searchIcon.style.fill = "#08AEE2"));
searchInput.addEventListener("focusout", () => (searchIcon.style.fill = "#2E5BCF"));


