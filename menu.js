function gotoMenu()
{
    window.location.href="menu.html"
}
function login()
{
    window.location.href="login.html"
}
function signup()
{
    window.location.href="signup.html"
}
function home()
{
    window.location.href="index.html"
}


// popup window code start from here

function openPopUp()
{
   let x= document.querySelector("#popup")
    x.style.display ="block";
}

function closePopup()
{
    let x= document.querySelector("#popup")
    // x.style.display ="none";
    window.location.href="menu.html"
}


/// fetching code start here
let url ="https://www.themealdb.com/api/json/v1/1/search.php?f=a"
async function xyz(){
    try{
        let response = await fetch(url)

        let data =await response.json()
        console.log(data.meals)
        // let x = await data.json()
        addToMenu(data.meals)
     
    }
    catch (err)
    {
        console.log("err:",err)
    }
}

xyz()

function addToMenu(data)
{
    data.forEach( function (data,index){

        let img =document.createElement("img")
            img.src= data.strMealThumb;

        let div1 =document.createElement("div")
            div1.innerHTML=data.strCategory
        
        let div2 =document.createElement("div")
            div2.innerHTML= `Price: ${Math.floor(Math.random()*(500-100)+100)}`;

        let div3 =document.createElement("div")
            div3.setAttribute("id","img")
        let but =document.createElement("button")
            but.setAttribute("onclick","cart_add()")
            but.innerHTML="+Cart"

        div3.append(img,div1,div2,but)

       let x = document.querySelector("#showmemu")
        x.append(div3)
        
        function cart_add()
        {
            let img =document.createElement("img")
            img.src= data.strMealThumb;

            let div1 =document.createElement("div")
                div1.innerHTML=data.strCategory
            
            let div2 =document.createElement("div")
                div2.innerHTML= `Price: ${Math.floor(Math.random()*(500-100)+100)}`;

            let div3 =document.createElement("div")
                div3.setAttribute("id","img")
            let but =document.createElement("button")
                but.setAttribute("onclick","cart_add()")
                but.innerHTML="Delet"

            div3.append(img,div1,div2,but)

        let x = document.querySelector("#showmemu")
            x.append(div3)
        }
    })
}

