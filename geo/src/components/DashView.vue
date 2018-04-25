<template lang="html">
<div id="dashview">
    <div class="row">
        <div class="col-lg-6 col-md-6">
            <UploadView></UploadView>
            <MapView></MapView>
        </div>
        <div class="col-lg-6 col-md-6">
            <ListView></ListView>
        </div>
    </div>
</div>
</template>
<script>
import UploadView from './UploadView'
import MapView from './MapView'
import ListView from './ListView'
export default {
  name: 'DashView',
  components:{
    UploadView,MapView,ListView

  }
}
</script>
<style lang="css">
</style>
