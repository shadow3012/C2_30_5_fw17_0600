// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffee = JSON.parse(localStorage.getItem("coffee"))||[]
let sum =0

for(let x = 0;x<coffee.length;x++){
 sum+=coffee[x].price
}
document.getElementById("total_amount").innerText =sum

coffee.forEach(({image,price,title},index)=>{

    let div = document.createElement("div")
    div.className = "coffeebox"
    let img = document.createElement("img")
    img.src = image
    let Price = document.createElement("h3")
    Price.innerText = price
    let button = document.createElement("button")
    button.innerText = "Remove"
    let name = document.createElement("h2")
    name.innerText = title
    let data = {title,image,price}
    button.id = "remove_coffee"
    button.onclick = ()=>{
       coffee.splice(index,1)
       localStorage.setItem("coffee",JSON.stringify(coffee))
       window.location.reload()

    }
    div.append(img,name,Price,button)
    document.getElementById("bucket").append(div)
    })

    document.getElementById("confirm_checkout").addEventListener("click",()=>{
        window.location.href = "/./checkout.html"
    })