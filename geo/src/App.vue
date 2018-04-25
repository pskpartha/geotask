<template>
<div id="app">

    <div class="container-fluid">
        <DashView></DashView>
    </div>

</div>
</template>
<script>
import DashView from './components/DashView'
export default {
  name: 'App',
  components:{
    DashView
  }
}
</script>
<style>
/* body {
  background-color: #ececec;
} */
</style>
