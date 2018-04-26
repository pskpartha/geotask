<template lang="html">
<div id="dashview">
    <div class="row">
        <div class="col-lg-6 col-md-6">
            <div class="psk-box">
                <UploadView></UploadView>
            </div>
            <div class="psk-box">
                <!-- <MapView></MapView> -->
            </div>

        </div>
        <div class="col-lg-6 col-md-6">
            <div class="psk-box">
                <ListView></ListView>
            </div>

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
