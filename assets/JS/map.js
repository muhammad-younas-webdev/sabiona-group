// 1. Karte initialisieren
var map = L.map("map").setView([30, 10], 2);

// 2. Erstelle benutzerdefinierte HTML-Icons (Ring + innerer Punkt)
var redIcon = L.divIcon({
  className: "custom-target",
  html: '<div class="target-symbol symbol-red"><span class="target-dot"></span></div>',
  iconSize: [11, 11],
  iconAnchor: [5.5, 5.5], // ZENTRIERT
});

var blueIcon = L.divIcon({
  className: "custom-target",
  html: '<div class="target-symbol symbol-blue"><span class="target-dot"></span></div>',
  iconSize: [11, 11],
  iconAnchor: [5.5, 5.5], // ZENTRIERT
});

// 3. Standort-Daten [Breitengrad (Lat), Längengrad (Lon), Englischer Stadtname, IstBlau?]
var markerPositions = [
  [46.49425, 11.33531, "Bolzano", true], // MVHI (Blau)
  [48.0154, 11.58243, "Unterhaching", true], // MVHD (Blau)
  [50.645562, 10.687278, "Suhl", false],
  [50.46772, 11.65369, "Wurzbach", false],
  [48.2214, 12.4118, "Waldkraiburg", false],
  [51.7128, 7.834, "Hamm", false],
  [13.1283, 101.1495, "Rayong", false],
  [49.0085, 14.004, "Prachatice", false],
  [52.4164, 8.6007, "Rahden", false],
  [35.4042, -80.8615, "Huntersville", false],
  [45.5531, 9.3128, "Agrate Brianza", false],
  [19.558, -99.265, "Tlalnepantla", false],
  [51.9314, -0.5625, "Houghton Regis", false],
  [25.0153, 121.4732, "New Taipei City", false],
  [50.0681, 14.3752, "Prague", false],
  [13.6423, 100.4504, "Bangkok", false],
  [50.1234, 18.9912, "Tychy", false],
  [25.0139, 121.4625, "Banqiao", false],
  [3.1045, 101.5993, "Petaling Jaya", false],
];

// 4. Vektor-Länderkarte laden (Farbe #e4e4e4, Grenze weiß)
fetch(
  "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json",
)
  .then((res) => res.json())
  .then((data) => {
    L.geoJSON(data, {
      style: {
        color: "#ffffff", // Grenze in WEISS
        weight: 1, // Grenzstärke
        fillColor: "#e4e4e4", // Landfläche in #e4e4e4
        fillOpacity: 1,
      },
    }).addTo(map);

    // 5. Marker & Englische Städtenamen zeichnen
    var bounds = [];
    markerPositions.forEach(function (item) {
      var lat = item[0];
      var lon = item[1];
      var cityName = item[2];
      var isBlue = item[3];

      // Icon wählen (Blau vs Rot)
      var currentIcon = isBlue ? blueIcon : redIcon;

      // Marker setzen
      var marker = L.marker([lat, lon], { icon: currentIcon }).addTo(map);

      // Stadtname anzeigen
      marker.bindTooltip(cityName, {
        permanent: true,
        direction: "right",
        className: "city-label",
        offset: [6, 0],
      });

      bounds.push([lat, lon]);
    });

    // Auto-Zoom auf alle Punkte
    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  });
