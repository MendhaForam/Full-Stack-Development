let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

// Swiper
var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

// To pass alert after submiting the form
document.querySelector("#bt-submit").addEventListener('click',()=> {
    pname = /^[A-z]+$/;
    bt_name = document.querySelector('#bt-name')
    pemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    bt_email = document.querySelector('#bt-email')
    pnumber = /^\d{10}$/;
    bt_number = document.querySelector('#bt-number')

    bt_message = document.querySelector('#bt-message')

    if(pname.test(bt_name.value)){
        if(pemail.test(bt_email.value)){
            if(pnumber.test(bt_number.value)){
                alert("Name : "+bt_name.value + "\nEmail : "+bt_email.value + "\nNumber : "+bt_number.value +"\nMessage : "+bt_message.value)
            }
            else{
                alert("Invaid Number: ")
            }
        }
        else{
            alert("Invalid E-mail: ")
        }
    }
    else{
        alert("Invalid Name: ")
    }
})