//calls the highlighted Title element on hover
function hoverTitle(x) {
  //console.log("HOVERED");
  var img = document.createElement("img");
  img.src = "./img/TitleHover.png";
  img.setAttribute("id", "hover_title");
  var src = document.getElementById("title_node");
  src.appendChild(img);
}
//clears the highlighted Title element
function clearHoverTitle(x) {
  var hoverTitle = document.getElementById("hover_title");
  hoverTitle.parentNode.removeChild(hoverTitle);
}
//calls the highlighted Nav element on hover
function hoverNav(x) {
  var img2 = document.createElement("img");
  img2.src = "./img/NavHover.png";
  img2.setAttribute("id", "hover_nav");
  var src2 = document.getElementById("nav_node");
  src2.appendChild(img2);
}
//clears the highlighted Nav element
function clearHoverNav(x) {
  var hoverNav = document.getElementById("hover_nav");
  hoverNav.parentNode.removeChild(hoverNav);
}

//calls the highlighted Nav element on hover
function clickedNav(x) {
  var parent = document.getElementById("root");
  console.log(parent.children.length);
  //console.log(parent.children);
  if (parent.children.length == 3) {
    console.log("THERE WAS NORMAL BACKGROUND");
    var img3 = document.createElement("img");
    img3.src = "./img/scan_sidebar_expanded.JPG";
    img3.setAttribute("id", "clicked_nav");
    var src3 = document.getElementById("root");
    src3.appendChild(img3);
  } else {
    console.log("Your shit was there");
    var src3 = document.getElementById("clicked_nav");
    src3.parentNode.removeChild(src3);
  }
  /*
  
  */
}
//clears the highlighted Nav element
function clearclickedNav(x) {
  var hoverNav = document.getElementById("hover_nav");
  hoverNav.parentNode.removeChild(hoverNav);
}
