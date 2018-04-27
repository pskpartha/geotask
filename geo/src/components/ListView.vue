<template lang="html">
<div id="listview">
    <div class="psk-box">
        <button type="button" class="btn btn-warning btn-lg btn-block">PROCESS DATA</button>
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
                <div v-for="(point, index) in points" class="card-custom">

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
                <div v-for="(poly, index) in polygons" class="card-custom">
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
                <div v-for="(line, index) in lines" class="card-custom">

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
                <div v-for="(point, index) in points" class="card-custom">

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
                <div v-for="(poly, index) in polygons" class="card-custom">
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
                <div v-for="(line, index) in lines" class="card-custom">

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
  name: 'ListView',
  data () {
    return {
      spdata:'',
      points:'',
      polygons:'',
      lines:'',
      showAlert:false
    }
  },
  methods:{
    takeData:function(){
      if(localStorage.getItem('localspdata') === null){
        // this.$alert.danger({ message: 'Nothing Found' });
        this.showAlert=true;
      } else {
        // this.$alert.success({ message: 'Data is available' });
          this.spdata=JSON.parse(localStorage.getItem('localspdata')) ;
          this.points=this.spdata[0];
          this.polygons=this.spdata[1];
          this.lines = this.spdata[2];
          // console.log(this.spdata[0]);
           console.log('from list',this.spdata);
        // localStorage.removeItem('localspdata');
        // localStorage.setItem('localspdata', JSON.stringify(this.formatteddata));

      }

    }
    ,
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
          },
    showPoints:function(){
      // this.points=this.spdata[0];

    },
    showPolys:function(){
      // this.polygons=this.spdata[1];

    },
    showLines:function(){
      // this.lines = this.spdata[2];

    }
  },
  created:function(){
    this.takeData();

  }
}
</script>
<style lang="css">
</style>
