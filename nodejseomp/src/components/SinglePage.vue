<template>
   <body>
    <div class="card" style="width: 18rem;">
        <img :src="$route.query.img" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ $route.query.name }}</h5>
          <p class="card-text">
        <span>{{ $route.query.category }}</span>
      </p>
      <p class="card-text">
        <span> R{{ $route.query.amount }}</span>
      </p>
      <div class="card-footer text-body-secondary">
        <router-link to="/products" class="btn btn-primary">Back</router-link>
        <br /><br />
        </div>
      </div>
    </div>
   </body>
</template>

<script>
    export default {

        
    }
</script>

<style scoped>

</style>