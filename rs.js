function showNavbar()
{
    var sidenav=document.querySelector(".side-navbar")
    sidenav.style.display="block"
    
}
function closeNavbar()
{
     var sidenav=document.querySelector(".side-navbar")
    sidenav.style.display="none"

    }


    function navigate(url){
        location.href = `${url}.html`
    }
    