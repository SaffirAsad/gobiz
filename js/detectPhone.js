if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //console.log("This website is loaded on a phone.");
  document.querySelectorAll("select").forEach(select=>{
    select.style.width="45%";
    select.style.marginTop="10px";
  });
  document.querySelector("#filterButton").style.margin="10px 0px 10px 0";
  document.querySelector("#filterButton").style.width="80%";
  document.querySelector("#max-value").style.position= "absolute";
  document.querySelector("#max-value").style.right= "0px";
}
