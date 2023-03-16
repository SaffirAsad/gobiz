document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');
    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');
    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
    const BtnFav = document.querySelectorAll('.navbar-Fav');
    const menuFav = document.querySelectorAll('.navbarFav-menu');
    if (BtnFav.length && menuFav.length) {
        for (var i = 0; i < BtnFav.length; i++) {
            BtnFav[i].addEventListener('click', function() {
                for (var j = 0; j < menuFav.length; j++) {
                    menuFav[j].classList.toggle('hidden');
                }
            });
        }
    }
    const closeFav = document.querySelectorAll('.navbar-close');
    const backdropFav = document.querySelectorAll('.navbar-backdropFav');
    if (closeFav.length) {
        for (var i = 0; i < closeFav.length; i++) {
            closeFav[i].addEventListener('click', function() {
                for (var j = 0; j < menuFav.length; j++) {
                    menuFav[j].classList.toggle('hidden');
                }
            });
        }
    }
    if (backdropFav.length) {
        for (var i = 0; i < backdropFav.length; i++) {
            backdropFav[i].addEventListener('click', function() {
                for (var j = 0; j < menuFav.length; j++) {
                    menuFav[j].classList.toggle('hidden');
                }
            });
        }
    }
});
