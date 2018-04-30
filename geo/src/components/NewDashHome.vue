<template lang="html">
<div id="dashview">
    <div class="row">
        <div class="col-lg-6 col-md-6">
            <div class="psk-box">
                <MapView :mapdata="mapdata"></MapView>
            </div>
        </div>
        <div class="col-lg-6 col-md-6">
            <!-- <div class="psk-box"> <fieldset> <div class="form-group"> <div class="input-group mb-3"> <div class="custom-file"> <input type="file" id="file"></div> <div
            class="input-group-append"> <button v-on:click="readBrowseFile" type="button" class="btn btn-warning">Upload</button> </div> </div> </div> </fieldset> <div
            class="progress"> <div id="bar" class="progress-bar bg-warning" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div> </div> </div> -->
            <!-- list -->
            <div v-if="showBrowse" class="psk-box">
                <!-- <textarea rows="10" v-model="text"></textarea> <br> -->
                <text-reader @load="text = $event"></text-reader>
            </div>

            <div class="psk-box">
                <button v-if="showProcess" v-on:click="processedFile" type="button" class="btn btn-success btn-lg btn-block">PROCESS DATA</button>
                <button v-if="showClear" v-on:click="clearLocalData" type="button" class="btn btn-warning btn-lg btn-block">CLEAR PRESENT DATA</button>
            </div>
            <div v-if="showList" class="list-box">
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
                        <div v-for="(point, index) in formatteddata[0]" class="card-custom">

                            <div class="card-body-custom">

                                <!-- <pre> {{point}} </pre> -->
                                <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p> -->
                                <span class="badge badge-custom badge-indigo float-right">Point :
                                    {{index+1}}</span>
                                <button v-on:click="downloadPointFile(index)" class="badge badge-pill badge-dark btn">Download</button>
                                <button v-on:click="viewOnMapPoint(index)" class="badge badge-pill badge-success btn">View on Map</button>

                                <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{point}}</textarea>

                            </div>
                        </div>
                        <!-- polygons -->
                        <div v-for="(poly, index) in formatteddata[1]" class="card-custom">
                            <div class="card-body-custom">
                                <span class="badge badge-custom badge-info float-right">Polygon :
                                    {{index+1}}</span>
                                <button v-on:click="downloadPolygonFile(index)" class="badge badge-pill badge-dark btn">Download</button>
                                <button v-on:click="viewOnMapPoly(index)" class="badge badge-pill badge-success btn">View on Map</button>
                                <!-- <pre> {{poly}} </pre> -->

                                <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{poly}}</textarea>
                                <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p> -->

                                <!-- <button v-on:click="downloadPolygonFile(index)" type="button" class="btn btn-danger">Download</button> -->
                            </div>
                        </div>

                        <!-- lines -->
                        <div v-for="(line, index) in formatteddata[2]" class="card-custom">

                            <div class="card-body-custom">
                                <span class="badge badge-custom badge-danger float-right">Line :
                                    {{index+1}}</span>
                                <button v-on:click="downloadLineFile(index)" class="badge badge-pill badge-dark btn">Download</button>
                                <button v-on:click="viewOnMapLine(index)" class="badge badge-pill badge-success btn">View on Map</button>
                                <!-- <pre> {{point}} </pre> -->
                                <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p> -->
                                <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{line}}</textarea>

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pointstab">
                        <!-- points -->
                        <div v-for="(point, index) in formatteddata[0]" class="card-custom">

                            <div class="card-body-custom">

                                <!-- <pre> {{point}} </pre> -->
                                <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                content.</p> -->
                                <span class="badge badge-custom badge-indigo float-right">Point :
                                    {{index+1}}</span>
                                <button v-on:click="downloadPointFile(index)" class="badge badge-pill badge-dark btn">Download</button>
                                <button v-on:click="viewOnMapPoint(index)" class="badge badge-pill badge-success btn">View on Map</button>

                                <textarea class="form-control" rows="3" style="z-index: auto; position: relative; line-height: 22.5px; font-size: 12px; transition: none;">{{point}}</textarea>

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="polygonstab">
                        <!-- polygons -->
                        <div v-for="(poly, index) in formatteddata[1]" class="card-custom">
                            <div class="card-body-custom">
                                <span class="badge badge-custom badge-info float-right">Polygon :
                                    {{index+1}}</span>
                                <button v-on:click="downloadPolygonFile(index)" class="badge badge-pill badge-dark btn">Download</button>
                                <button v-on:click="viewOnMapPoly(index)" class="badge badge-pill badge-success btn">View on Map</button>
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
                        <div v-for="(line, index) in formatteddata[2]" class="card-custom">

                            <div class="card-body-custom">
                                <span class="badge badge-custom badge-danger float-right">Line :
                                    {{index+1}}</span>
                                <button v-on:click="downloadLineFile(index)" class="badge badge-pill badge-dark btn">Download</button>
                                <button v-on:click="viewOnMapLine(index)" class="badge badge-pill badge-success btn">View on Map</button>
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
</template>
<script>
import TextReader from "./TextReader";
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
    MapView,TextReader

  },
    data () {
      return {
        text:'',
        spdata:'',
        formatedjson:'',
        formatteddata:[],
        points:[],
        polygons:[],
        lines:[],
        mapdata:'',
        showBrowse:true,
        showProcess:true,
        showClear:false,
        showList:false

      }
    },
    methods:{
      processedFile(){
      // console.log(filedata);
      this.formatteddata= [];
      this.points = [];
      this.polygons = [];
      this.lines = [];
      var filedata = JSON.parse(this.text);
      this.spdata = filedata.features;
      this.mapdata = this.spdata;
      this.formatData();
    },
    formatData(){
      var self = this;

      console.log('top',this.formatteddata.length);
      this.formatedjson =this.spdata;
      this.formatedjson.forEach(function(data) {
        // console.log(data.geometry.type);
        if (data.geometry.type === "Point") {
            let point = data;
            var cor = point.geometry.coordinates;
            var pointcor = turf.point(cor);
            // console.log('point',cor);
            // var point = turf.point([-90.548630, 14.616599]);
            var buffered = turf.buffer(pointcor, 10, {units: 'miles'});
           // console.log(data.geometry.type);
           // console.log(buffered);
            self.points.push(buffered);
         }else if (data.geometry.type === "Polygon"){
           let polygon = data;
          // console.log(data.geometry.type);
           self.polygons.push(polygon);
         }if (data.geometry.type === "LineString"){
           let line = data;
           var cor = line.geometry.coordinates;
           var linecor = turf.lineString(cor);
            var buffered = turf.buffer(linecor, 5, {units: 'miles'});
          // console.log(data.geometry.coordinates);
           self.lines.push(buffered);
    }
         else {
           // console.log('found nothing');
         }

      });

        this.formatteddata.push(this.points);
        this.formatteddata.push(this.polygons);
        this.formatteddata.push(this.lines);

      console.log(this.formatteddata.length);

        this.showClear = true;
        this.showList = true;
    },
    viewOnMapPoint(index){
      let pointdata =  this.points[index];
      let arraydata = [];
      arraydata.push(pointdata);
      this.mapdata = arraydata;

    },viewOnMapPoly(index){
      let polydata =  this.polygons[index];
      let arraydata = [];
      arraydata.push(polydata);
      this.mapdata = arraydata;

    },viewOnMapLine(index){
      let linedata =  this.lines[index];
      let arraydata = [];
      arraydata.push(linedata);
      this.mapdata = arraydata;

    },
    clearLocalData(){
      this.formatteddata= [];
      this.points = [];
      this.mapdata=[];
      this.showClear = false;
      this.showList = false;

    },
    downloadPointFile(index){
          // console.log(index);
        let pointdata =  this.points[index];
        let formatedpoint = JSON.stringify(pointdata, null, 2);
            download("ponit.geojson",formatedpoint);
        },
        downloadPolygonFile(index){
            // console.log(index);
          let polydata =  this.polygons[index];
          let formatedpoint = JSON.stringify(polydata, null, 2);
              download("polydata.geojson",formatedpoint);
          },
      downloadLineFile(index){
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
