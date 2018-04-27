<template lang="html">
<div id="dashview">
    <div class="row">
        <div class="col-lg-6 col-md-6">
            <div class="psk-box">
                <!-- <MapView></MapView> -->
            </div>

        </div>
        <div class="col-lg-6 col-md-6">
            <div class="psk-box">
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
                    <div class="progress">
                        <div id="bar" class="progress-bar bg-warning" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                </div>
                <!-- list -->
                <div class="psk-box">

                  <div class="psk-box">
                      <button  v-on:click="processedFile" type="button" class="btn btn-warning btn-lg btn-block">PROCESS DATA</button>
                  </div>
                  <div  v-if="showAlert" class="psk-box">
                      <div class="alert alert-dismissible alert-danger">
                          <button type="button" class="close" data-dismiss="alert">&times;</button>
                          <p class="mb-0"> Data is not available to Process</p>
                      </div>
                  </div>
                  <div class="list-box">
                      <ul class="nav nav-tabs">
                          <li class="nav-item">
                              <a class="nav-link active show" data-toggle="tab" href="#alldatatab">All</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" data-toggle="tab" href="#pointstab">Points</a>
                          </li>

                          <li class="nav-item">
                              <a class="nav-link" data-toggle="tab" href="#polygonstab">Plygons</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" data-toggle="tab" href="#linestab">Lines</a>
                          </li>
                      </ul>
                      <div id="myTabContent" class="tab-content">
                          <div class="tab-pane fade active show" id="alldatatab">

                              <!-- points -->
                              <div v-for="(point, index) in ppoints" class="card-custom">

                                  <div class="card-body-custom">

                                      <!-- <pre> {{point}} </pre> -->
                                      <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                      content.</p> -->
                                      <span class="badge badge-custom badge-pill badge-indigo">Point :
                                          {{index+1}}</span>
                                      <button v-on:click="downloadPointFile(index)" class="badge badge-pill badge-dark btn">Download</button>

                                      <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{point}}</textarea>

                                  </div>
                              </div>
                              <!-- polygons -->
                              <div v-for="(poly, index) in ppolygons" class="card-custom">
                                  <div class="card-body-custom">
                                      <span class="badge badge-custom badge-pill badge-success">Polygon :
                                          {{index+1}}</span>
                                      <button v-on:click="downloadPolygonFile(index)" class="badge badge-pill badge-dark btn">Download</button>
                                      <!-- <pre> {{poly}} </pre> -->

                                      <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{poly}}</textarea>
                                      <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                      content.</p> -->

                                      <!-- <button v-on:click="downloadPolygonFile(index)" type="button" class="btn btn-danger">Download</button> -->
                                  </div>
                              </div>

                              <!-- lines -->
                              <div v-for="(line, index) in plines" class="card-custom">

                                  <div class="card-body-custom">
                                      <span class="badge badge-custom badge-pill badge-danger">Line :
                                          {{index+1}}</span>
                                      <button v-on:click="downloadLineFile(index)" class="badge badge-pill badge-dark btn">Download</button>

                                      <!-- <pre> {{point}} </pre> -->
                                      <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                      content.</p> -->
                                      <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{line}}</textarea>

                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade" id="pointstab">
                              <!-- points -->
                              <div v-for="(point, index) in ppoints" class="card-custom">

                                  <div class="card-body-custom">

                                      <!-- <pre> {{point}} </pre> -->
                                      <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                      content.</p> -->
                                      <span class="badge badge-custom badge-pill badge-indigo">Point :
                                          {{index+1}}</span>
                                      <button v-on:click="downloadPointFile(index)" class="badge badge-pill badge-dark btn">Download</button>

                                      <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{point}}</textarea>

                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade" id="polygonstab">
                              <!-- polygons -->
                              <div v-for="(poly, index) in ppolygons" class="card-custom">
                                  <div class="card-body-custom">
                                      <span class="badge badge-custom badge-pill badge-success">Polygon :
                                          {{index+1}}</span>
                                      <button v-on:click="downloadPolygonFile(index)" class="badge badge-pill badge-dark btn">Download</button>
                                      <!-- <pre> {{poly}} </pre> -->

                                      <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{poly}}</textarea>
                                      <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                      content.</p> -->

                                      <!-- <button v-on:click="downloadPolygonFile(index)" type="button" class="btn btn-danger">Download</button> -->
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade" id="linestab">
                              <!-- lines -->
                              <div v-for="(line, index) in plines" class="card-custom">

                                  <div class="card-body-custom">
                                      <span class="badge badge-custom badge-pill badge-danger">Line :
                                          {{index+1}}</span>
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

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MapView from './MapView'

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
  name: 'DashView',
  components:{
    MapView

  },  name: 'UploadView',
    data () {
      return {
        uploaddone:false,
        msg: 'Welcome to Your Vue.js App',
        polygons:[],
        points:[],
        lines:[],
        jsondata:'',
        uploadData:'',
        bufferdata:'',
        formatteddata:[],
        showAlert:false,
        pspdata:'',
        ppoints:'',
        ppolygons:'',
        plines:'',
      }
    },
    methods:{
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
      var self = this;
    // Obtain the read file data
    var fileString = evt.target.result;
    this.uploadData = fileString;
    // console.log(JSON.parse(fileString));

    var finaldata = JSON.parse(fileString);
    // console.log(finaldata);

    // var arrayobj = JSON.parse(this.uploadData);
    // console.log(arrayobj);
    let arraydata = finaldata.features;
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
       }if (data.geometry.type === "LineString"){
         let line = data;
        // console.log(data.geometry.type);
         self.lines.push(line);
  }
       else {
         console.log('found nothing');
       }

    });

      this.formatteddata.push(this.points);
      this.formatteddata.push(this.polygons);
      this.formatteddata.push(this.lines);
      // console.log(this.points);
      // console.log(this.formatteddata);


    // Test if bookmarks is null
    if(localStorage.getItem('localspdata') === null){
      localStorage.setItem('localspdata', JSON.stringify(this.formatteddata));
    } else {
      localStorage.removeItem('localspdata');
      localStorage.setItem('localspdata', JSON.stringify(this.formatteddata));
    }
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

      var self = this;

    },

processedFile: function(){

  if(localStorage.getItem('localspdata') === null){
    // this.$alert.danger({ message: 'Nothing Found' });
    this.showAlert=true;
  } else {
    // this.$alert.success({ message: 'Data is available' });
      this.pspdata=JSON.parse(localStorage.getItem('localspdata')) ;
      this.ppoints=this.pspdata[0];
      this.ppolygons=this.pspdata[1];
      this.plines = this.pspdata[2];
      // console.log(this.spdata[0]);
       console.log('from list',this.pspdata);
    // localStorage.removeItem('localspdata');
    // localStorage.setItem('localspdata', JSON.stringify(this.formatteddata));

  }
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
      }
}
</script>
<style lang="css">
</style>
