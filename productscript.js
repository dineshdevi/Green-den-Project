// Search navbar

var search = document.getElementById("search")
var productcontainer = document.getElementById("productcontainer")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var entervalue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {

        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(entervalue) == -1) {
            
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})