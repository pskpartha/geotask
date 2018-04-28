<template>
<div id="app">

    <div class="container-fluid">
      <div class="body-wrapper">
            <NewDashHome></NewDashHome>
      </div>

    </div>

</div>
</template>
<script>
import NewDashHome from './components/NewDashHome'
export default {
  name: 'App',
  components:{
    NewDashHome
  }
}
</script>
<style>
/* body {
  background-color: #ececec;
} */
</style>
