<template lang="html">
<div id="uploadview">
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
    </div>
</template>
<script>
export default {
  name: 'UploadView',
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

    },


  created: function(){


},
mounted () {
    // When the Component is ready fetch the JSON from the Server Backend
    // this.showMap();
}
}
</script>
<style lang="css">
</style>
