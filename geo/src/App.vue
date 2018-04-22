<template>
<div id="app">

    <div class="container">
        <NewHome></NewHome>

    </div>
</div>
</template>
<script>
import NewHome from './components/NewHome'
export default {
  name: 'App',
  components:{
    NewHome
  }
}
</script>
<style>
body {
  background-color: #ececec;
}
</style>
