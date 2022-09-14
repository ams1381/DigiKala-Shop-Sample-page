import Datajson from './assets/Product-Data/Data.json' assert {type : "json"};

var ProductItems = document.querySelectorAll(".productItem")
var ProductItemPicture = document.querySelectorAll(".productItem img");
var ProductItemTitle = document.querySelectorAll(".productItem .Title");
var Rates = document.querySelectorAll(".productItem .Status .Rate p");
var Prices = document.querySelectorAll(".productItem .Price p");
var SellStatus = document.querySelectorAll(".productItem .Status .SellStatus");
var CartChangeStatus = localStorage.getItem("CartChangeStatus");

ProductItemPicture.forEach((item,index) => {
   item.setAttribute(`src`,`${Datajson.LapTops[index].ImageSoure}`);
})
ProductItemTitle.forEach((item,index) => {
    item.textContent = `${Datajson.LapTops[index].Title}`;
})
Rates.forEach((item,index) => {
    item.textContent = `${Datajson.LapTops[index].Rate}`;
})
Prices.forEach((item,index) => {
    item.textContent = `${Datajson.LapTops[index].Price} تومان`;
})
SellStatus.forEach((item,index) => {

    item.textContent = `${Datajson.LapTops[index].Status}`;
    if(Datajson.LapTops[index].Status == "موجود در انبار")
        item.style.color = "rgb(139, 139, 255)";
    else
        item.style.color = "rgb(243, 56, 78)";
});

ProductItems.forEach((item,index) => {
   item.addEventListener("click",() => {
     window.open("Product.html");
     localStorage.setItem("myindex", index);
   })
});

// if(CartChangeStatus)
// {
//     document.querySelector("nav ion-icon").classList = "added";
// }
// else
// {
//     document.querySelector("nav ion-icon").classList.remove("added");
// }