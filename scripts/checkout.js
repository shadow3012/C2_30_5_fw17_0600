document.querySelector("form").addEventListener("submit",order)
 function order(){
     event.preventDefault()
    let name = document.getElementById("name")
    let number = document.getElementById("number")
    let address = document.getElementById("address")
    console.log(name.value)
    if(name.value!=null && number.value!=null&&address.value!=null){

        al()
    }
    
    
}
let id
function al(){
    let data = ["Your order is accepted","Your order is being Prepared ","Your order is being packed","Your order is out for delivery","Order delivered"]
    let time = [0,3000,5000,2000,2000]
    alert(data[0])
if(id){
    clearTimeout(id)
}
id=setTimeout(()=>{
    alert(data[1])
    
},3000)
id=setTimeout(()=>{
alert(data[2])
},8000)
id=setTimeout(()=>{
alert(data[3])
},10000)
id=setTimeout(()=>{
alert(data[4])
},12000)

}

   
