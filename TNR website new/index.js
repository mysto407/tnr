function toggleMenu() {
    var iconElement = document.getElementById("iconElement");
    var x = document.getElementById("myTopnav");

    // Check if the current icon is plus or x and toggle accordingly
    if (iconElement.classList.contains("fa-plus")) {
        iconElement.classList.remove("fa-plus");
        iconElement.classList.add("fa-times"); // Assuming "x" icon is represented by "fa-times" class
        document.getElementById("myTopnav").style.width = "250px";
        x.className += " responsive";
        openNav();
    } else {
        iconElement.classList.remove("fa-times");
        iconElement.classList.add("fa-plus");
        document.getElementById("myTopnav").style.width = "0";
        closeNav();
    }
}

function openNav() {
    document.getElementById("myTopnav").style.width = "300px";

}

function closeNav() {
    document.getElementById("myTopnav").style.width = "0";

}

// map
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}