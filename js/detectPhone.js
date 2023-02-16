if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //console.log("This website is loaded on a phone.");
  document.querySelectorAll("select").forEach(select=>{
    select.style.width="48%";
    select.style.marginTop="10px";
  });
  document.querySelector("#filterButton").style.marginTop="10px";
  document.querySelector("#filterButton").style.width="80%";
  document.querySelector("#max-value").style.position= absolute;
  document.querySelector("#max-value").style.right= 0px;
}
