var editorial = document.getElementById("editorial");
var packaging = document.getElementById("packaging");
var branding = document.getElementById("branding");
var graphic = document.getElementById("graphic");
var interaction = document.getElementById("interaction");
var cv = document.getElementById("cv");

function myEditorial() {
  var x = document.getElementById("editorial");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  packaging.style.display = "none";
  branding.style.display = "none";
  graphic.style.display = "none";
  interaction.style.display = "none";
  cv.style.display = "none";
}

function myPackaging() {
  var x = document.getElementById("packaging");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  editorial.style.display = "none";
  branding.style.display = "none";
  graphic.style.display = "none";
  interaction.style.display = "none";
  cv.style.display = "none";
}

function myBranding() {
  var x = document.getElementById("branding");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  packaging.style.display = "none";
  editorial.style.display = "none";
  graphic.style.display = "none";
  interaction.style.display = "none";
  cv.style.display = "none";
}

function myGraphic() {
  var x = document.getElementById("graphic");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  packaging.style.display = "none";
  branding.style.display = "none";
  editorial.style.display = "none";
  interaction.style.display = "none";
  cv.style.display = "none";
}

function myInteraction() {
  var x = document.getElementById("interaction");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  packaging.style.display = "none";
  branding.style.display = "none";
  graphic.style.display = "none";
  editorial.style.display = "none";
  cv.style.display = "none";
}

function myCv() {
  var x = document.getElementById("cv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  packaging.style.display = "none";
  branding.style.display = "none";
  graphic.style.display = "none";
  editorial.style.display = "none";
  interaction.style.display = "none";
}