<template lang="html">
<div id="listview">
    <div class="psk-box">
        <button type="button" class="btn btn-warning btn-lg btn-block">PROCESS DATA</button>
    </div>
    <div class="list-box">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active show" data-toggle="tab" href="#alldata">All</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#profile">Points</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#home">Lines</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#home">Plygones</a>
            </li>
        </ul>
        <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade" id="alldata">

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
            <div class="tab-pane fade active show" id="profile">
                <div class="alert alert-dismissible alert-light">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Heads up!</strong>
                    This
                    <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
                </div>
            </div>
            <div class="tab-pane fade" id="dropdown1">
                <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag
                    gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify
                    squid 8-bit cred pitchfork.</p>
            </div>
            <div class="tab-pane fade" id="dropdown2">
                <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby
                    sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold
                    out farm-to-table VHS viral locavore cosby sweater.</p>
            </div>
        </div>
    </div>

</div>
</template>
<script>
export default {
  name: 'ListView',
  data () {
    return {
      spdata:'',
      points:'',
      polygones:'',
      lines:''
    }
  },
  methods:{
    takeData:function(){
      if(localStorage.getItem('localspdata') === null){
        // this.$alert.danger({ message: 'Nothing Found' });

      } else {
        // this.$alert.success({ message: 'Data is available' });
          this.spdata=JSON.parse(localStorage.getItem('localspdata')) ;
          // console.log(this.spdata[0]);
           console.log('from list',this.spdata);
        // localStorage.removeItem('localspdata');
        // localStorage.setItem('localspdata', JSON.stringify(this.formatteddata));
      }

    },
    showPoints:function(){
      this.points=this.spdata[0];

    },
    showPolys:function(){
      this.polygons=this.spdata[1];

    },
    showLines:function(){
      this.lines = this.spdata[2];

    }
  },
  created:function(){
    this.takeData();

  }
}
</script>
<style lang="css">
</style>
