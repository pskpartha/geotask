<template lang="html">
<div id="Home">
    <div class="row">
        <div class="col-md-4">
            <div class="jumbotron"></div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="jumbotron">
                <button v-on:click="showoriginaldata" type="button" class="btn btn-info">Upload</button>

                <button type="button" class="btn btn-warning">Clear</button>
                <hr>
                    <!-- <textarea col="20" v-autosize="jsondata">{{jsondata}}</textarea> -->
                    <!-- <pre> {{jsondata}} </pre> -->
                    <input type="button" id="dwn-btn" value="Download dinamically generated text file"/>
                </div>
            </div>
            <div class="col-lg-8">
                <!-- <slot></slot> -->
                <!-- polygons -->
                <div v-for="(poly, index) in polygons" class="card text-white bg-success mb-3" style="max-width: 20rem;">
                    <div class="card-body">
                        <h4 class="card-title">{{index}}</h4>
                        <pre> {{poly}} </pre>
                        <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p> -->
                        <!-- <button @click.native="downloadFile()" type="button" class="btn btn-danger">Download</button> -->
                    </div>
                </div>

                <!-- ponits -->
                <div v-for="(point, index) in points" class="card text-white bg-info mb-3" style="max-width: 20rem;">

                    <div class="card-body">
                        <h4 class="card-title">{{index}}</h4>
                        <pre> {{point}} </pre>
                        <!-- <h4 class="card-title">Success card title</h4> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

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
      msg: 'Welcome to Your Vue.js App',
      polygons:[],
      points:[],
      jsondata:'',
      spdata: {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
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
          24.747025966644284,
          59.44695127637809
        ]
      }
    },
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
    }
  ]
}
    }
  },
  methods:{
    showoriginaldata:function(){
    this.jsondata = JSON.stringify(this.spdata,null,2);
    var self = this;
    // console.log(this.spdata.features[0].geometry.type);
    // console.log(this.spdata.features);
    let arraydata = this.spdata.features;
    // let point = '';
    // this.points.push(point);
    arraydata.forEach(function(data) {
      console.log(data.geometry.type);
      if (data.geometry.type === "Point") {
          let point = data;
         // console.log(data.geometry.type);
          self.points.push(point);
       }else if (data.geometry.type === "Polygon"){
         let polygon = data;
        // console.log(data.geometry.type);
         self.polygons.push(polygon);
       }else {
         console.log('found nothing');
       }

    });

    //
    // var obj = {a: 123, b: "4 5 6"};
    // var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(arraydata));

    // $('<a href="data:' + data + '" download="data.json">download JSON</a>').appendTo('#container');
    // Start file download.


  },
  downloadFile:function(index){
        console.log(working);
        // document.getElementById("dwn-btn").addEventListener("click", function(){
        //     // Generate download of hello.txt file with some content
        //     // var text = document.getElementById("text-val").value;
        //       var text = self.jsondata;
        //     var filename = "hello.geojson";
        //
        //     download(filename, text);
        // }, false);
      }
  },

  created: function(){



  }
}
</script>
<style scoped>
.jumbotron {
    padding: 2rem 2rem;
}
textarea {
    min-width: 400px;
}
</style>
