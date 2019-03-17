//calls the highlighted Title element on hover
function hoverTitle(x) {
  //console.log("HOVERED");
  var img = document.createElement("img");
  img.src = "TitleHover.png";
  img.setAttribute("id", "hover_title");
  var src = document.getElementById("title_node");
  src.appendChild(img);
}
//clears the highlighted Title element
function clearHoverTitle(x) {
  //console.log("CLEARED");
  var hoverTitle = document.getElementById("hover_title");
  hoverTitle.parentNode.removeChild(hoverTitle);
}

//calls the highlighted Nav element on hover
function hoverNav(x) {
  var img = document.createElement("img");
  img.src = "NavHover.png";
  img.setAttribute("id", "hover_nav");
  var src = document.getElementById("nav_node");
  src.appendChild(img);
}
//clears the highlighted Nav element
function clearHoverNav(x) {
  var hoverNav = document.getElementById("hover_nav");
  hoverNav.parentNode.removeChild(hoverNav);
}
