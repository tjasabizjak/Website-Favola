function initMap() {
  const favolaLocation = { lat: 46.07830640327715, lng: 14.511708053053662 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: favolaLocation,
    fullscreenControl: false,
    mapTypeControl: false,
    mapId: "c57cdf12856cfd24",
  });

  const marker = new google.maps.Marker({
    position: favolaLocation,
    map: map,
  });
}




window.addEventListener("click", onClick);

const onClick = (event) => {
  console.log(event);

  const neki = document.querySelector(".navbar-mobile");

  neki.textContent = "KRNEKI HUDO";

  if (event.currentTarget.innerHeight > 200) {
    neki.style.color = "red";
  } else {
    neki.style.color = "green";
  }
  
  neki.textContent = event.currentTarget.innerHeight;

  console.log(neki);
};
