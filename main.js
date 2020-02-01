

// slide to slide position
function SlideTo(to, active) {

    var dot = document.getElementsByClassName("dot")
    
    // remove active dot in pagination and add new one
    for (i = 0; i < slideLength; i++) {
      if (dot[i].classList.contains("active")) {
        dot[i].classList.remove("active")
      }
    }
    document.getElementById(to).classList.add("active")

    // calc width to slide to target
    var targetStep = to - currentSlide
    sliderBox.style.right = slideWidth * ((targetStep + currentSlide) - 1) + "px"
    currentSlide = to
}


// next image
function Next() {
  if (currentSlide >= slideLength) {
    currentSlide = 1
    SlideTo(currentSlide)
  } else {
    currentSlide += 1
    SlideTo(currentSlide)
  }
}

// back to prev image
function Prev() {
  if (currentSlide == 1) {
    currentSlide = slideLength
    SlideTo(currentSlide)
  } else {
    currentSlide -= 1
    SlideTo(currentSlide)
  }
}

function AddSlide() {
  // create `slider-item` element and append to `slider-box`
  var newSlider = document.createElement("div")
  var img = document.createElement("img")
  newSlider.className = "slider-item"
  img.setAttribute("src", "assets/simple.png")
  newSlider.appendChild(img)
  sliderBox.appendChild(newSlider)

  // reset value
  slide = document.getElementsByClassName("slider-item")
  sliderBox = document.getElementsByClassName("slider-box")[0]
  sliderPagination = document.getElementsByClassName("pagination")[0]
  currentSlide = 1
  slideLength = slide.length
  slideWidth = slide[0].clientWidth;
  sliderContainer = slideLength * slideWidth
  sliderBox.style.width = sliderContainer + "px"
  sliderBox.style.marginLeft = slideWidth

  // reset pagination dot
  sliderPagination.innerHTML = ''

  // add new pagination
  for (item=1; item <= slideLength; item++) {
    var dot = document.createElement('span');
    dot.className = "dot"
    dot.id = item
    dot.setAttribute("onclick",`SlideTo(${item})`);

    if (item == slideLength) { 
      dot.classList.add("active")
    }
    
    sliderPagination.appendChild(dot)
  }
}

// elemment
var slide = document.getElementsByClassName("slider-item")
var sliderBox = document.getElementsByClassName("slider-box")[0]
var sliderPagination = document.getElementsByClassName("pagination")[0]
var currentSlide = 1

var slideLength = slide.length
var slideWidth = slide[0].clientWidth;
var sliderContainer = slideLength * slideWidth

// set slider view size
sliderBox.style.width = sliderContainer + "px"
sliderBox.style.marginLeft = slideWidth


// create pagination
for (item=1; item <= slideLength; item++) {
  var dot = document.createElement('span');
  dot.className = "dot"
  dot.id = item
  dot.setAttribute("onclick",`SlideTo(${item})`);

  if (item == 1) { 
    dot.classList.add("active")
  }
  sliderPagination.appendChild(dot)
}