<template lang="html"><div id="mapview">
  <!-- <button v-on:click="showMap" type="button" name="button">ShowMap</button> -->
    <div id="mapid" style="height: 400px;"></div>
</div>

</template>
<script>


export default {
  name: 'Home',
  data () {
    return {
      uploaddone:false,
      msg: 'Welcome to Your Vue.js App',
      polygons:[],
      points:[],
      lines:[],
      jsondata:'',
      uploadData:'',
      bufferdata:''
    }
  },
  methods:{
    mapbox:function(){
      mapboxgl.accessToken = 'pk.eyJ1IjoicHNrcGFydGhhIiwiYSI6ImNqZ2UxbmVlMTIxOWsycW5wNHI4OTM0ZTgifQ.3i9niqwBEtRJ6E_WMXiVVw';
      var map = new mapboxgl.Map({
          container: 'mapid',
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [-68.13734351262877, 45.137451890638886],
          zoom: 5
      });

var testdata= {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          24.748367071151733,
          59.44697309178145
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -95.1416015625,
              39.774769485295465
            ],
            [
              -95.625,
              38.272688535980976
            ],
            [
              -95.3173828125,
              36.27970720524017
            ],
            [
              -89.033203125,
              35.639441068973944
            ],
            [
              -86.044921875,
              37.61423141542417
            ],
            [
              -89.20898437499999,
              39.36827914916014
            ],
            [
              -92.2412109375,
              40.212440718286466
            ],
            [
              -95.1416015625,
              39.774769485295465
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.52734374999999,
              43.229195113965005
            ],
            [
              -90.966796875,
              41.934976500546604
            ],
            [
              -89.56054687499999,
              41.60722821271717
            ],
            [
              -90.3076171875,
              43.100982876188546
            ],
            [
              -90.52734374999999,
              43.229195113965005
            ]
          ]
        ]
      }
    }
  ]
};
var nodata = '';

      map.on('load', function () {



          try
          {
            map.addLayer({
                'id': 'maine',
                'type': 'fill',
                'source': {
                    'type': 'geojson',
                    'data': nodata,
                },
                'layout': {},
                'paint': {
                    'fill-color': '#088',
                    'fill-opacity': 0.8
                }
            });

          }catch(e)
          {

            return;
          }

          map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.03238901390978, 38.913188059745586]
                    },
                    "properties": {
                        "title": "Mapbox DC",
                        "icon": "monument"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.414, 37.776]
                    },
                    "properties": {
                        "title": "Mapbox SF",
                        "icon": "harbor"
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });

      });

    },

    showMap:function(){


      var mymap = L.map('mapid').setView([24.747025966644284,
      59.44695127637809], 13);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
      }).addTo(mymap);

      L.marker([ 24.747025966644284,
      59.44695127637809]).addTo(mymap)
        .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
        L.marker([  24.748367071151733,
      59.44697309178145]).addTo(mymap)
          .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();


      // L.circle([51.508, -0.11], 500, {
      //   color: 'red',
      //   fillColor: '#f03',
      //   fillOpacity: 0.5
      // }).addTo(mymap).bindPopup("I am a circle.");
      //
      // L.polygon([
      //   [51.509, -0.08],
      //   [51.503, -0.06],
      //   [51.51, -0.047]
      // ]).addTo(mymap).bindPopup("I am a polygon.");



      L.polygon([
        [
         24.743732213973995,
         59.44648769573002
       ],
       [
         24.744107723236084,
         59.44635680122023
       ],
       [
         24.744064807891842,
         59.44656405062682
       ],
       [
         24.743732213973995,
         59.44648769573002
       ]
      ]).addTo(mymap).bindPopup("I am a polygon.");

console.log('i am from map ');
      var popup = L.popup();

      function onMapClick(e) {
        popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(mymap);
      }

      mymap.on('click', onMapClick);


    }
  },created:function(){
    console.log('working created');
      // this.showMap();
  },
  mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
    // this.showMap();
    this.mapbox();
  })
}
}
</script>
<style lang="css">
</style>
