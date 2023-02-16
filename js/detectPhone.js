if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //console.log("This website is loaded on a phone.");
  document.querySelectorAll("select").forEach(select=>{select.style.width="90%";});
}
