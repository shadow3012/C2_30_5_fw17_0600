// Add the coffee to local storage with key "coffee"

let url = `https://masai-mock-api.herokuapp.com/coffee/menu`

function getCoffee(){
let res=fetch(url).then((data)=>{
 let res = data.json()
 return res
 
}).then((res)=>{
    
    return res.menu
}).then((res)=>{
    append(res.data)
}).catch((err)=>{
    console.log(err)
})
}
getCoffee()
function append(data){
    data.forEach(({description,image,ingredients,price,title},index)=>{

    let div = document.createElement("div")
    div.className = "coffeebox"
    let img = document.createElement("img")
    img.src = image
    let Price = document.createElement("h3")
    Price.innerText = price
    let button = document.createElement("button")
    button.innerText = "Add To Bucket"
    let name = document.createElement("h2")
    name.innerText = title
    let data = {title,image,price}
    button.onclick = ()=>{
        let coffee = JSON.parse(localStorage.getItem("coffee"))||[]
        coffee.push(data)
        localStorage.setItem("coffee",JSON.stringify(coffee))
        
        changeCount(coffee.length)




    }
    div.append(img,name,Price,button)
    document.getElementById("menu").append(div)
    })
}

let tar = document.getElementById("coffee_count")
let coffee_count = JSON.parse(localStorage.getItem("coffee"))
tar.innerText = coffee_count.length
function changeCount(x){
    
    tar.innerHTML = null
    tar.innerText = x
    
}