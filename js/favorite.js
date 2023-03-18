const favorite = (id) => {
    Favid=id+"_favorite"
    const heartIcon = document.getElementById(Favid);
    if (heartIcon.classList.contains("fa-regular")) {
      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");
      heartIcon.style.color = "red";
      localStorage.setItem(id, "solid"); 
      addToFavCart(id);
    } else {
      heartIcon.classList.remove("fa-solid");
      heartIcon.classList.add("fa-regular");
      heartIcon.style.color = "black";
      localStorage.setItem(id, "regular");
      // remove product from favorite cart
      removeItemFromFavCart(id);
      updateFavBadge();
      successFavAlert("Item Removed from Favorite Cart");
    }
  }
  
  const heartIcons = document.getElementsByClassName("fa-heart");
  for (let i = 0; i < heartIcons.length; i++) {
    const heartIcon = heartIcons[i];
    const id = heartIcon.id;
    const statusHeart = localStorage.getItem(id);
    if (statusHeart === "solid") {
      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");
      heartIcon.style.color = "red";
    }
  }
  
  const checkFavorite = _ => {
    const heartIcons = document.getElementsByClassName("fa-heart");
    for (let i = 0; i < heartIcons.length; i++) {
      const heartIcon = heartIcons[i];
      const id = heartIcon.id.split("_fav")[0];
      const status = localStorage.getItem(id);
      console.log("id,status",id,status);
      if (status === "solid") {
        heartIcon.classList.remove("fa-regular");
        heartIcon.classList.add("fa-solid");
        heartIcon.style.color = "red";
      }
    }
  }
  
  window.onload = checkFavorite();

