document.addEventListener("DOMContentLoaded", function () {
   
    var search =document.getElementById("search")
   
    search.addEventListener("keyup",function(){
       var productcontainer= document.getElementById("products")
      var productlist = productcontainer.querySelectorAll("div")
       var enteredValue = Event.target.value.toUppercase()
      
      for (count=0;count<productlist.length;count=count+1)
       {
         var productname =productlist[count].querySelector("p").textContent
      }
      
       if(productname.toUppercase().indexOf(enteredvalue)<0)
      {
          productlist[count].style.display="none"
       }
      else{
         productlist[count].style.display="block"
      }
 })
   });