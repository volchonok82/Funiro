if (typeof google === 'object' && typeof google.maps === 'object') {
  initMap();
}

function initMap() {
  let position = {
    lat: 40.74275840992788,
    lng: -73.92612712900741
  };

  let opt = {
    center: position,
    zoom: 15,
  };

  let info = new google.maps.InfoWindow({
    content: "<h3>My palace</h3><p>Simple description</p>"
  });

  let map = new google.maps.Map(document.getElementById("map"), opt);

  let marker = new google.maps.Marker({
    map: map,
    position: position, // позиция любая где нам нуже маркер
    title: "45-35 39th St",
    icon: "../img/ico/location.svg", // можно поставить любой маркер
  });

  // маркеров может быть сколько угодно
  let markerTwo = new google.maps.Marker({
    map: map,
    position: {
      lat: 40.743329446926936,
      lng: -73.93000023851035
    }, // позиция любая где нам нуже маркер
    title: "second",
    // icon: "../img/ico/location.svg", // можно поставить любой маркер
  });

  // добавление описания для маркера при клике на него
  marker.addListener('click', function () {
    info.open(map, marker);
  });

}