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


let x =document.querySelector("form")
x.addEventListener("submit", addUser)


function addUser(event)
{
    event.preventDefault()

        let user =document.querySelector("#user").value;

        let pass =document.querySelector("#pass").value;

        let users =JSON.parse(localStorage.getItem("UserSignup"))

        console.log(user,pass,users)
        for(let i=0;i<users.length;i++)
        {
            // console.log(users[i].user)
            if(user==users[i].user)
            {
                if(pass ==users[i].pass)
                {
                    alert("Login Successful")
                    console.log(users[i].user)
                    console.log(users[i].pass)
                    window.location.href="index.html"
                }
                else if(i==users.length-1 &&user!=users[i].pass)
                {
                    alert("Wrong Password")
                }
                break;
            }
            else if(user=="Admin")
            {
                if(pass="admin")
                {
                    alert("You are directing to admin page,but we didnot add up yet")
                }
            }
            else if(i==users.length-1 &&user!=users[i].user){
                alert("Invalid User ID, Please Creata Account!")
            }
        }

}