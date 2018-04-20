<template>
<div>

   <div class="row">
     <div class="col-md-8">
       <div class="jumbotron">
          <h1 class="display-3">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4">
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
</div>
     </div>
     <div class="col-lg-4">
       <div class="list-group">
     <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
       <div class="d-flex w-100 justify-content-between">
         <h5 class="mb-1">List group item heading</h5>
         <small>3 days ago</small>
       </div>
       <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
       <small>Donec id elit non mi porta.</small>
     </a>
     <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
       <div class="d-flex w-100 justify-content-between">
         <h5 class="mb-1">List group item heading</h5>
         <small class="text-muted">3 days ago</small>
       </div>
       <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
       <small class="text-muted">Donec id elit non mi porta.</small>
     </a>
   </div>
     </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
