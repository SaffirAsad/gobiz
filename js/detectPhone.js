if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //console.log("This website is loaded on a phone.");
  document.querySelectorAll("select").forEach(select=>{
    select.style.width="46%";
    select.style.marginTop="10px";
  });
  document.querySelector("#selecter").style.margin="10px 0px 10px 0";
  document.querySelector("#filterButton").style.margin="10px 0px 10px 0";
  document.querySelector("#filterButton").style.width="100%";
  
  document.querySelector("body > div > section:nth-child(1) > nav > div > div").style.width = "50px"
  document.querySelector("body > div > section:nth-child(1) > nav > div > div > button > span > svg").style.marginLeft="12.5px"
  document.querySelector("body > div > section:nth-child(1) > nav > div > div > button > span > svg").style.width = "100%"
}
