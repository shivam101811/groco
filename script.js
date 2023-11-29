// search button 
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =() =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    menuForm.classList.remove('active');
}

// cart button 
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =() =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    menuForm.classList.remove('active');
}

// login button 
let loginForm= document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =() =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    menuForm.classList.remove('active');
}

// menu button 
let menuForm= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() =>{
    menuForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = ()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    menuForm.classList.remove('active');

}

// slider for product 

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 10,
    autoplay:{
        delay: 4000,
        disableOnIneraction :false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

  // slider for review 

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 10,
    autoplay:{
        delay: 4000,
        disableOnIneraction :false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });