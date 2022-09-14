import Datajson from './assets/Product-Data/Data.json' assert {type : "json"};

var productIndex = localStorage.getItem("myindex");

var productImage = document.querySelector(".productImg img");
var description = document.querySelectorAll(".productConfig ul li span");
var Show_More = document.querySelector(".ShowMore");
var AddingControlPanel = document.querySelector(".AddedToCart");
var AddPanel = document.querySelector(".AddToCart");
var ProcutNumber = 1;
var CartChanged = false;
var Cart = [];

Show_More.addEventListener("click",() => {
    let displayAcc = document.createElement("li");
    let displayAccSpan = document.createElement("span");
    displayAcc.textContent = "دقت صفحه نمایش :"
    displayAccSpan.textContent = Datajson.LapTops[productIndex].DisplayAccurancy;
    displayAcc.appendChild(displayAccSpan);

    let LaptopUsage = document.createElement("li");
    let LaptopUsageSpan = document.createElement("span");
    LaptopUsage.textContent = "طبقه بندی :";
    LaptopUsageSpan.textContent = Datajson.LapTops[productIndex].Sort;

    LaptopUsage.appendChild(LaptopUsageSpan);

    document.querySelector(".productConfig ul").appendChild(displayAcc);
    document.querySelector(".productConfig ul").appendChild(LaptopUsage);
    Show_More.style.display = "none";
})
productImage.setAttribute(`src`,`${Datajson.LapTops[productIndex].ImageSoure}`);


document.querySelector(".Rate p").textContent = Datajson.LapTops[productIndex].Rate;
document.querySelector(".AddToCart .price").textContent = Datajson.LapTops[productIndex].Price + " تومان ";


description.forEach((item,index) => {
    switch(index)
    {
        case 0:
            item.textContent = Datajson.LapTops[productIndex].Cpu;
            break;
        case 1:
            item.textContent = Datajson.LapTops[productIndex].RamMemory;
            break;
        case 2:
            item.textContent = Datajson.LapTops[productIndex].RamType;
            break
        case 3:
            item.textContent = Datajson.LapTops[productIndex].Graphic;
            break
        case 4:
            item.textContent = Datajson.LapTops[productIndex].DisplaySize;
            break
    }
})

productImage.addEventListener("mousemove",(e) => {
    
    const pageX = e.pageX;
   const pageY = e.pageY;

   let x , y;
   var offsetX , offsetY;

  e.offsetX ? offsetX = e.offsetX : offsetX = pageX;
  e.offsetY ? offsetY = e.offsetY : offsetX = pageY;
  x = offsetX/document.querySelector(".productImg").offsetWidth*100;
  y = offsetY/document.querySelector(".productImg").offsetHeight*100;

  productImage.setAttribute(`style`,`transform-origin: ${x}% ${y}%;
  transform: scale(1.5);
  `);
})
document.querySelector(".productImg").addEventListener("mouseleave",() =>
{
    productImage.removeAttribute("style");
})  
document.querySelector(".Buy").addEventListener("click",() => {
    
     AddPanel.style.display = "none";
    AddingControlPanel.style.display = "flex";
})
document.querySelector(".seeCart").addEventListener("click",() => {
    window.open("CartPage.html","_self");
    
})
document.querySelector(".addNumber").addEventListener("click",() => {
    ProcutNumber++
    document.querySelector(".ProductNumber").textContent = ProcutNumber;
    CartChanged = true;
    localStorage.setItem("CartChangeStatus", true);
    Cart.push(Datajson.LapTops[productIndex]);
    
})
document.querySelector(".reduceNumber").addEventListener("click",() => {
    if(ProcutNumber == 1)
       {
        AddingControlPanel.style.display = "none";
        AddPanel.style.display = "block";
        CartChanged = false;
       }
    else
    {
        ProcutNumber--
        document.querySelector(".ProductNumber").textContent = ProcutNumber;
        CartChanged = true;
        localStorage.setItem("CartChangeStatus", true);
    }
})
// some test change
