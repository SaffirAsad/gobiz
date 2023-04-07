// loading...
window,scrollTo(0,0);
window.addEventListener("load", function () {
  const loading = document.querySelector("#loading");
  loading.style.display = "none";
});
// 
document.getElementById("year").innerHTML=new Date().getFullYear();
function successAlert(msg) {
    "use strict";
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1500
    })
}
function successFavAlert(msg) {
    "use strict";
    Swal.fire({
        toast: true,
        position: 'top-left',
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1500
    })
}

