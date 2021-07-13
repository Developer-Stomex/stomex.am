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


