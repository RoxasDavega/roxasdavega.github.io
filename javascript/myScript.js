var timer = [null,null,null];
var delay = [6100,4500,5100];
var slideIndex = [1,1,1];
var slideId = ["photo-profile", "photo-sports","photo-games"];

function myFunction(){
    startSlide(0);
    startSlide(1);
    startSlide(2);
}

function plusSlides(n, no) {
    clearTimeout(timer[no]);
    timer[no] = null;
    console.log(timer[no])
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n==undefined){
        n = ++slideIndex[no];
    }
    if (n > x.length){
      slideIndex[no] = 1;
    }
    if (n < 1){
      slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
    startSlide(no);
}

function startSlide(num){
    timer[num] = setTimeout(function(){
        showSlides(null,num);
    }, delay[num]);
}