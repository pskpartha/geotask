<template>
<div>

    <div class="row">
        <div class="col-md-8">
            <div class="jumbotron">
                <button v-on:click="showoriginaldata" type="button" class="btn btn-info">Upload</button>

                <button type="button" class="btn btn-warning">Clear</button>
                <hr>
                <textarea col="20" v-autosize="jsondata">{{jsondata}}</textarea>
            </div>
        </div>
        <div class="col-lg-4">
            <!-- <div class="list-group"> <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active"> <div class="d-flex w-100
            justify-content-between"> <h5 class="mb-1">List group item heading</h5> <small>3 days ago</small> </div> <p class="mb-1">Donec id elit non mi porta gravida at
            eget metus. Maecenas sed diam eget risus varius blandit.</p> <small>Donec id elit non mi porta.</small> </a> <a href="#" class="list-group-item
            list-group-item-action flex-column align-items-start"> <div class="d-flex w-100 justify-content-between"> <h5 class="mb-1">List group item heading</h5> <small
            class="text-muted">3 days ago</small> </div> <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small class="text-muted">Donec id elit non mi porta.</small> </a> </div> -->
        </div>
    </div>
</div>
</template>
<script>
// $(document).ready(function() {
//
//       var el = {
//           btnAction: $('#action'),
//           btnClear: $('#clear'),
//           input: $('#input'),
//           result: $('#result')
//       };
//
//       // var demo = {
//       //     name:'John Doe',
//       //     age: 20,
//       //     children:[{name:'Jack', age:5}, {name:'Ann', age:8}],
//       //     wife:{name:'Jane Doe', age:28 }
//       // };
//       //
//       // el.input.val(JSON.stringify(demo,null,4));
//
//       // el.btnAction.on('click', function(){
//       //     var json = el.input.val();
//       //     var o;
//       //     try{ o = JSON.parse(json); }
//       //     catch(e){
//       //         alert('not valid JSON');
//       //         return;
//       //     }
//       //
//       //     var node = new PrettyJSON.view.Node({
//       //         el:el.result,
//       //         data:o
//       //     });
//       // });
//
//       el.btnClear.on('click', function(){
//           el.input.val('');
//           el.result.html('');
//       });
//   });
// $('txtarea').autoResize();
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
