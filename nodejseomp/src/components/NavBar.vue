<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" id="navpic" href="#">HOMESPACE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <router-link class="head" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="head" to="/about">About Us</router-link>
          </li>
          <li>
            <router-link class="head" to="/admin">Admin</router-link>
          </li>
          <li>
            <router-link class="head" to="/products">Products</router-link>
          </li>
          <li>
            <router-link class="head" to="/contact">Contact</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
  }
</script>
<style scoped>
.navbar{
  background-color: #d4a373;
}
.head{
  color: white;
  margin-inline-end: 1rem;
  text-decoration: none;
  padding: 11px; 
}

#navpic{
  width:28rem;
}

.img{
  width: 17%;
}
.head:hover{
  color: rgb(0, 0, 0);
  background-color: #a97847;
  transition: background-color 0.3s ease;
  border-radius: 20px;
}

</style>
