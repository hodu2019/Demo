function readURL(input, place_img) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            place_img.attr('src', event.target.result)
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(".add-img").change(function () {
    let place_img = $(this).parent().find('.img_plholder')
    readURL(this, place_img);
});


//  build index
$('.navbar-form .row-form.btn-row .col-50').click(function () {
    $('.navbar-form .row-form.btn-row .col-50').removeClass('bg-btn')
    $(this).addClass('bg-btn')
    let catchForm = $(this).data('trigger')
    let catchId = $(`#${catchForm}`)
    if (catchId.hasClass('hide-form')) {
        $('.nav-form').addClass('hide-form')
        catchId.removeClass('hide-form')
    }
})
userLogin = () => {
    // show
    document.getElementById('user-info').classList.remove('hide');
    document.getElementById('welcome-user').classList.remove('hide')
    // hide
    document.getElementById('user-form').classList.add('hide')
    document.querySelector('.catchJs-forUser > .nav-link').classList.add('hide')
    // change
    if (auth.currentUser.photoURL != null) {
        $('.img-avatar').attr('src', auth.currentUser.photoURL)
    }
    if (auth.currentUser.displayName != null) {
        $('#user').text(auth.currentUser.displayName)
    } else {
        $('#user').text(auth.currentUser.email)
    }
}
userLogout = () => {
    // show
    document.getElementById('user-form').classList.remove('hide')
    document.querySelector('.catchJs-forUser > .nav-link').classList.remove('hide')
    // hide
    document.getElementById('user-info').classList.add('hide');
    document.getElementById('welcome-user').classList.add('hide');
    // change
    $('.img-avatar').attr('src', 'https://firebasestorage.googleapis.com/v0/b/travel-21ee8.appspot.com/o/Media%2FavatarUnknown.png?alt=media&token=76a69096-c38a-487c-a21e-2d5adce9d2db')
}


// --------------------------hàm bật tắt giao diện login----------------------------
show = () => {

    document.querySelector('#concac .navbar-form ').classList.add('display12')
}
remove = () => {
    
    document.querySelector('#concac .navbar-form').classList.remove('display12')
}
// --------------------------hàm bật tắt giao diện login----------------------------


masonryIndex = (url, index) => {
    let html;
    html = `<div class="grid-item item-${index}"><img src="${url}"></div>`
    let div = document.querySelector('#masonry-section .grid')
    div.innerHTML += html
}
// masonryJs = () => {
//     $('.grid').masonry({
//         // options
//         itemSelector: '.grid-item',
//         columnWidth: '.grid-sizer',
//         gutter: 10,
//         fitWidth: true
//     });
// }


// --------------------------chạy số liệu fake----------------------
var dem = 0
$(window).scroll(function () {
    var hT = $('#scroll-to').offset().top,
        hH = $('#scroll-to').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    
    if (wS > (hT )) {
        console.log('scroll reached!');
        dem =dem +1
        if (dem<=1 ){
            
            (function ($) {
                $.fn.counter = function () {
                    const $this = $(this),
                        numberFrom = parseInt($this.attr('data-from')),
                        numberTo = parseInt($this.attr('data-to')),
                        delta = numberTo - numberFrom,
                        deltaPositive = delta > 0 ? 1 : 0,
                        time = parseInt($this.attr('data-time')),
                        changeTime = 10;

                    let currentNumber = numberFrom,
                        value = delta * changeTime / time;
                    var interval1;
                    const changeNumber = () => {
                        currentNumber += value;
                        //checks if currentNumber reached numberTo
                        (deltaPositive && currentNumber >= numberTo) || (!deltaPositive && currentNumber <= numberTo) ? currentNumber = numberTo : currentNumber;
                        this.text(parseInt(currentNumber));
                        currentNumber == numberTo ? clearInterval(interval1) : currentNumber;
                    }

                    interval1 = setInterval(changeNumber, changeTime);
                }
            }(jQuery));

            $(document).ready(function () {

                $('.count-up').counter();
                $('.count1').counter();
                $('.count2').counter();
                $('.count3').counter();

                new WOW().init();

                setTimeout(function () {
                    $('.count5').counter();
                }, 6000);
            });
        }
    }

});

// --------------------------chạy số liệu fake----------------------

var x = document.querySelectorAll('.page-item1')
for ( i = 0; i < x.length; i++) {
    console.log(i)
    x[i].addEventListener('click', function () {
        console.log('abc')  
             
        for (k = 0; k < x.length; k++) {
            console.log('abc')
            x[k].classList.remove('page-link1')
            x[k].classList.remove('active1')
            x[k].classList.remove('a1')
            x[k].classList.add('page-link')
        }    
        this.classList.add('active1')  
        this.classList.remove('page-link')
        this.classList.add('page-link1')
        this.classList.add('a1')
        console.log('xyz')  
        
    })
    console.log(i)
}
// ------------------hàm sửa height của các bài blog--------------------------
autoHeight = ()=>{
    for (i = 0; i < document.querySelectorAll('.card-columns > .card > .card-body').length; i++) {
        document.querySelectorAll('.card-columns > .card > .card-body')[i].style.height = 'auto'
       console.log('lồn')
    }
    for (i = 0; i < document.querySelectorAll('.card-columns > .card').length; i++) {
        document.querySelectorAll('.card-columns > .card')[i].classList.add('card1')
    }
}
autoHeight()
// ------------------hàm sửa height của các bài blog--------------------------


// ---------------------hàm scroll to-------------------
function removeactive(){
    let z = document.querySelectorAll('.collapse .navbar-collapse > .nav-link')
z.addEventListener('click',()=>{alert ('cc')})
}
$(document).ready(function(){
    $('.nav-link').click(function(e){
       e.preventDefault();     
        for (k = 0; k < $('.nav-link').length; k++) {
            console.log('abc')
            $('.nav-link')[k].classList.remove('active')
        }    
       this.classList.add('active')

       var headerHeight = $('header').outerHeight();
       console.log(headerHeight)
       var linkHref = $(this).attr('href')
       var navbarHeight = $('.navbar').outerHeight()
       console.log(linkHref)
       if (linkHref == '#Blogs'){
           $('html, body').animate({
               scrollTop: $('#Blogs').offset().top - navbarHeight - headerHeight
           }, 1000);
       }else{
           $('html, body').animate({
               scrollTop: $(linkHref).offset().top - navbarHeight
           }, 1000);
       }       
       
    })
})
// --------------------- hàm scroll to-------------------



// if (linkHref = '#Blogs') {
//     scrollTop: $(linkHref).offset().top - navbarHeight - headerHeight
// }
// scrollTop: $(linkHref).offset().top - navbarHeight 