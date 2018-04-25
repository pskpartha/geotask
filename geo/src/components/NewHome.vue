<template lang="html">
<div id="Home">
    <div class="row">
        <div class="col-md-12">
            <button v-on:click="showMap()" class="btn" type="button" name="button">Show map</button>
            <div id="mapid" style="width: 600px; height: 400px;"></div>
            <pre>{{bufferdata}}</pre>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <fieldset>
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" id="file"></div>
                            <div class="input-group-append">
                                <button v-on:click="readBrowseFile" type="button" class="btn btn-warning">Upload</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <!-- <div style="width:100%;height:20px;border:1px solid black;"> <div id="bar" style="background-color:#45F;width:0px;height:20px;"></div> </div> -->
                <div class="progress">
                    <div id="bar" class="progress-bar bg-warning" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <h3>File contents:</h3>
                <pre>
                              <code id="output">
                              </code>
                            </pre>
            </div>
            <div class="col-lg-6">
                <div class="button-visiable">
                    <button v-if="uploaddone === true" v-on:click="showoriginaldata" type="button" class="btn btn-primary">Process</button>

                    <button type="button" class="btn btn-secondary">Clear</button>
                </div>

                <hr>
                    <!-- <slot></slot> -->
                    <!-- polygons -->
                    <div v-for="(poly, index) in polygons" class="card-custom">
                        <div class="card-body-custom">
                            <span class="badge badge-custom badge-pill badge-success">Polygon :
                                {{index}}</span>
                            <button v-on:click="downloadPolygonFile(index)" class="badge badge-pill badge-dark btn">Download</button>
                            <!-- <pre> {{poly}} </pre> -->

                            <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{poly}}</textarea>
                            <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p> -->

                            <!-- <button v-on:click="downloadPolygonFile(index)" type="button" class="btn btn-danger">Download</button> -->
                        </div>
                    </div>

                    <!-- ponits -->
                    <div v-for="(point, index) in points" class="card-custom">

                        <div class="card-body-custom">

                            <!-- <pre> {{point}} </pre> -->
                            <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p> -->
                            <span class="badge badge-custom badge-pill badge-indigo">Point :
                                {{index}}</span>
                            <button v-on:click="downloadPointFile(index)" class="badge badge-pill badge-dark btn">Download</button>

                            <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{point}}</textarea>

                        </div>
                    </div>
                    <!-- lines -->
                    <div v-for="(line, index) in lines" class="card-custom">

                        <div class="card-body-custom">
                            <span class="badge badge-custom badge-pill badge-danger">Line :
                                {{index}}</span>
                            <button v-on:click="downloadLineFile(index)" class="badge badge-pill badge-dark btn">Download</button>

                            <!-- <pre> {{point}} </pre> -->
                            <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p> -->
                            <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{line}}</textarea>

                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>


// downloadFile

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

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

      //
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


    },
    readBrowseFile:function(){
      // console.log("working");
      var self = this;
      var file = document.getElementById('file').files[0];
       if(file)
       {
         self.getAsText(file);
       }
       this.uploaddone = true;
    },
    getAsText:function(readFile){
        var reader;
      	try
      	{
          reader = new FileReader();
      	}catch(e)
      	{
      		document.getElementById('output').innerHTML =
      			"Error: seems File API is not supported on your browser";
      	  return;
        }

        // Read file into memory as UTF-8
        reader.readAsText(readFile, "UTF-8");

        // Handle progress, success, and errors
        reader.onprogress = this.updateProgress;
        reader.onload = this.loaded;
        reader.onerror = this.rrorHandler;

    },


  updateProgress:function (evt)
{
  if (evt.lengthComputable)
	{
    // evt.loaded and evt.total are ProgressEvent properties
    var loaded = (evt.loaded / evt.total);
    if (loaded < 1)
		{
      // Increase the prog bar length
      // style.width = (loaded * 200) + "px";
			document.getElementById("bar").style.width = (loaded*100) + "%";
    }
  }
},

loaded:function (evt)
{
  // Obtain the read file data
  var fileString = evt.target.result;
    this.uploadData = fileString;
     // console.log(this.uploadData );
   document.getElementById('output').innerHTML = fileString;
	 document.getElementById("bar").style.width = 100 + "%";
},

 errorHandler:function(evt)
{
  if(evt.target.error.code == evt.target.error.NOT_READABLE_ERR)
	{
    // The file could not be read
		document.getElementById('output').innerHTML = "Error reading file..."
  }
},

    showoriginaldata:function(){
      this.uploaddone = false;
    // this.jsondata = JSON.stringify(this.spdata,null,2);
    // this.jsondata = this.uploadData;
    // console.log(this.uploadData);
    var self = this;
    // console.log(this.spdata.features[0].geometry.type);
    // console.log(this.spdata.features);
    var arrayobj = JSON.parse(this.uploadData);
    let arraydata = arrayobj.features;
    arraydata.forEach(function(data) {
      // console.log(data.geometry.type);
      if (data.geometry.type === "Point") {
          let point = data;
         // console.log(data.geometry.type);
          self.points.push(point);
       }else if (data.geometry.type === "Polygon"){
         let polygon = data;
        // console.log(data.geometry.type);
         self.polygons.push(polygon);
       }if (data.geometry.type === "Line"){
         let line = data;
        // console.log(data.geometry.type);
         self.lines.push(line);
}
       else {
         console.log('found nothing');
       }

    });
  },
  downloadPointFile:function(index){
        // console.log(index);
      let pointdata =  this.points[index];
      let formatedpoint = JSON.stringify(pointdata, null, 2);
          download("ponit.geojson",formatedpoint);
      },
      downloadPolygonFile:function(index){
          // console.log(index);
        let polydata =  this.polygons[index];
        let formatedpoint = JSON.stringify(polydata, null, 2);
            download("polydata.geojson",formatedpoint);
        },
    downloadLineFile:function(index){
          // console.log(index);
        let linedata =  this.lines[index];
        let formatedpoint = JSON.stringify(linedata, null, 2);
            download("linedata.geojson",formatedpoint);
        }
    },

    clearMethod:function(){
        this.uploaddone = true;
    },


  created: function(){


          var point = turf.lineString([ [
                  46.40625,
                  64.56731900988225
                ],
                [
                  48.49365234375,
                  64.59561280029605
                ],
                [
                  48.80126953125,
                  64.11060221954631
                ]]);
          var buffered = turf.buffer(point, 500, {units: 'miles'});

          var poly1 = turf.polygon([[
    [-82.574787, 35.594087],
    [-82.574787, 35.615581],
    [-82.545261, 35.615581],
    [-82.545261, 35.594087],
    [-82.574787, 35.594087]
]], {"fill": "#0f0"});
var poly2 = turf.polygon([[
    [-82.560024, 35.585153],
    [-82.560024, 35.602602],
    [-82.52964, 35.602602],
    [-82.52964, 35.585153],
    [-82.560024, 35.585153]
]], {"fill": "#00f"});

var union = turf.union(poly1, poly2);
          this.bufferdata = union;
          console.log(buffered);

},
mounted () {
    // When the Component is ready fetch the JSON from the Server Backend
    // this.showMap();
}
}
</script>
<style scoped>
#mapid { height: 180px; }
.jumbotron {
    padding: 2rem 2rem;
}
textarea {
    min-width: 400px;
}
.card-custom {
  background: #f7f7f9;
  margin: 0 0 10px 0;
  padding: 5px;
}
.card-point-border {
  border: 1px solid #6610f2;
}
.card-point-poly {
  border: 1px solid #fd7e14;
}

.card-point-border {
  border: 1px solid #43ac6a;
}
.badge-custom{
  margin: 5px 0;
  color:#ffffff;
}
 .badge-indigo {

   background: #6610f2;
 }
</style>
