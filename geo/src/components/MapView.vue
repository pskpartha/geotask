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
      points:'',
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
      container: "mapid",
      style: "mapbox://styles/mapbox/outdoors-v9",
      center: [25.0323486328125,
      58.68264859034907],
      zoom: 10
  });

  map.on("load", function() {
      map.addSource("national-park", {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "LineString",
                  "coordinates": [
                    [
                      25.0323486328125,
                      58.68264859034907
                    ],
                    [
                      25.1531982421875,
                      58.64265251657599
                    ],
                    [
                      25.279541015625,
                      58.68264859034907
                    ],
                    [
                      25.345458984375,
                      58.74255676871156
                    ],
                    [
                      25.46630859375,
                      58.69406761967911
                    ]
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "LineString",
                  "coordinates": [
                    [
                      25.686035156249996,
                      59.21531159041328
                    ],
                    [
                      25.94970703125,
                      59.2771080105117
                    ],
                    [
                      25.99365234375,
                      59.17029835064482
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
                        25.504760742187496,
                        59.054680988732315
                      ],
                      [
                        25.416870117187496,
                        58.947174821111965
                      ],
                      [
                        25.46630859375,
                        58.92449914384962
                      ],
                      [
                        25.7574462890625,
                        58.938673187948304
                      ],
                      [
                        25.504760742187496,
                        59.054680988732315
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
                        26.1199951171875,
                        59.015112509567786
                      ],
                      [
                        26.004638671875,
                        58.91315571775059
                      ],
                      [
                        26.0870361328125,
                        58.8734243789077
                      ],
                      [
                        26.1859130859375,
                        58.86774474539531
                      ],
                      [
                        26.3671875,
                        58.91315571775059
                      ],
                      [
                        26.3067626953125,
                        59.0009698708429
                      ],
                      [
                        26.1199951171875,
                        59.015112509567786
                      ]
                    ]
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    25.751953125,
                    58.83080439883584
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    24.8016357421875,
                    59.02924933736396
                  ]
                }
              }
            ]
          }
      });

      map.addLayer({
          "id": "park-boundary",
          "type": "fill",
          "source": "national-park",
          "paint": {
              "fill-color": "#888888",
              "fill-opacity": 0.4
          },
          "filter": ["==", "$type", "Polygon"]
      });

      map.addLayer({
          "id": "park-volcanoes",
          "type": "circle",
          "source": "national-park",
          "paint": {
              "circle-radius": 6,
              "circle-color": "#B42222"
          },
          "filter": ["==", "$type", "Point"],
      });
      map.addLayer({
          "id": "park-lines",
          "type": "line",
          "source": "national-park",
          "paint": {
            "line-color": "#888",
            "line-width": 8
          },
          "filter": ["==", "$type", "LineString"],
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
