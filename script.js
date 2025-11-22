document.getElementById("shopBtn").addEventListener("click", function() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});


var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  document.getElementById("prevBtn").style.display = n === 0 ? "none" : "inline";
  document.getElementById("nextBtn").innerHTML = (n === x.length - 1) ? "Submit" : "Next";
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");

  if (n === 1 && !validateForm()) return false;

  x[currentTab].style.display = "none";

  currentTab += n;

  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}

function validateForm() {
  var x = document.getElementsByClassName("tab");
  var y = x[currentTab].getElementsByTagName("input");
  var valid = true;

  for (let i = 0; i < y.length; i++) {
    if (y[i].value.trim() === "") {
      y[i].classList.add("invalid");
      valid = false;
    } else {
      y[i].classList.remove("invalid");
    }
  }

  return valid;
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000);
}

