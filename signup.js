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

let signup_arr =[]

let x =document.querySelector("form")
x.addEventListener("submit", addUser)


function addUser(event)
{
    event.preventDefault()
    
    
        let user =document.querySelector("#user").value;
        let contact =document.querySelector("#num").value;
        let pass =document.querySelector("#pass").value;
        let Re_pass =document.querySelector("#repass").value;

        if(user.includes("@"))
        {
            if(contact.length ==10)
            {
                if(pass==Re_pass)
                {
                    alert("Welcome User! Account Created Successfull")
                    signup_arr.push({user,contact,pass,Re_pass})
                    localStorage.setItem("UserSignup",JSON.stringify(signup_arr))
                }
                else{
                    alert("Invalid Re-password")
                }
            }
            else
            {
                alert("Invalid Contact Number")
            }
        }
        else
        {
            alert("Invalid User ID, Note: @ is missing")
        }
    
    // console.log(obj)
    

    
}