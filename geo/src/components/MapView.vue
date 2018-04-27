<template lang="html"><div id="mapview">
  <!-- <button v-on:click="showMap" type="button" name="button">ShowMap</button> -->
    <div id="mapid" style="height: 800px;"></div>
</div>

</template>
<script>


export default {
  name: 'Home',
  props: ['mapdata'],
  data () {
    return {
      uploaddone:false,
      msg: 'Welcome to Your Vue.js App',
      polygons:[],
      points:'',
      lines:[],
      jsondata:'',
      uploadData:'',
      bufferdata:'',
      parentdata:''
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
      zoom: 6
  });

var testmapdata = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[25.0323486328125,58.68264859034907],[25.1531982421875,58.64265251657599],[25.279541015625,58.68264859034907],[25.345458984375,58.74255676871156],[25.46630859375,58.69406761967911]]}},{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[25.686035156249996,59.21531159041328],[25.94970703125,59.2771080105117],[25.99365234375,59.17029835064482]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[25.504760742187496,59.054680988732315],[25.416870117187496,58.947174821111965],[25.46630859375,58.92449914384962],[25.7574462890625,58.938673187948304],[25.504760742187496,59.054680988732315]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[26.1199951171875,59.015112509567786],[26.004638671875,58.91315571775059],[26.0870361328125,58.8734243789077],[26.1859130859375,58.86774474539531],[26.3671875,58.91315571775059],[26.3067626953125,59.0009698708429],[26.1199951171875,59.015112509567786]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[25.751953125,58.83080439883584]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[24.8016357421875,59.02924933736396]}}]};


var newmapdata = this.parentdata;

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
var size = Object.size(newmapdata);
console.log(size);
if (size>0){
  map.on("load", function() {
      map.addSource("national-park", {
          "type": "geojson",
          "data":newmapdata
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
    }
    },

    showMap:function(){

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
},
watch:{
  mapdata:function(val){
    // return val;
    console.log('watch',val);
    this.parentdata = val;
    this.mapbox();
  },
  computed: {
  // mapdata() {
  //   // return this.item.foo;
  //   console.log('computed');
  //
  // }
},

}
}
</script>
<style lang="css">
</style>
