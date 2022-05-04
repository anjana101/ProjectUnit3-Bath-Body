var cartData = JSON.parse(localStorage.getItem("cart"));

var total = cartData.reduce(function(sum,elem,index,arr){
    return sum+elem.price
},0)

var length = cartData.length;

console.log(total)

document.querySelector("h2").innerText ="You Have    "+length+"    Item In The Cart and"+"Total is Rs     "+ total;



cartData.map(function(elem){
  
    var box = document.createElement("div");
   

    var img = document.createElement("img");
    img.setAttribute("class", "img_div")
    img.src = elem.image;

    var status = document.createElement("p");
    status.setAttribute("class", "status_div")
    status.innerText = elem.status

    var names = document.createElement("h3");
    names.setAttribute("class", "names_div")
    names.textContent = elem.name;

    var about = document.createElement("p");
    about.setAttribute("class", "about_div")
    about.innerText = elem.about;

    var prices = document.createElement("p");
    prices.setAttribute("class", "prices_div")
    prices.innerText = elem.price;

    var discount = document.createElement("p")
    discount.setAttribute("class", "discount_div")
    discount.innerText = elem.discount;


    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("class", "buttons_div");
    btn.addEventListener("click", function() {
        removeItem(elem,index)
    })

     
    

    box.append(img,status,names,about,prices,discount,btn);

    document.querySelector("#container").append(box);
});


function removeItem(elem,index){
    cartData.splice(index,1);
    console.log(cartData);
    localStorage.setItem("cart",JSON.stringify(cartData))
    window.location.reload()
}