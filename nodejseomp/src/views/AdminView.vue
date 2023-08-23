<template>
    <div class="about">
    
        <h1 class="h1two">Admin Interface💻</h1>
      
      <div class="table-responsive" style="margin-top: 1rem">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col">Image</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody v-for="item in homedecor" :key="item.prodID">
              <tr>
                <th scope="row">{{ item.prodID }}</th>
                <td>{{ item.prodName }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.Category }}</td>
                <td><img :src="item.prodUrl" :alt="item.prodName" style="width: 5rem"></td>
              </tr>

            </tbody>
          </table>
          <h1 class="h1two">Users👤</h1>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">firstName</th>
                  <th scope="col">lastName</th>
                  <th scope="col">userAge</th>
                  <th scope="col">Gender</th>
                  <th scope="col">userRole</th>
                  <th scope="col">emailAdd</th>
                  <th scope="col">userPass</th>
                  <th scope="col">userProfile</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody v-for="item in users" :key="item.userID">
                <tr>
                  <th scope="row">{{ item.userID }}</th>
                  <td>{{ item.firstName }}</td>
                  <td>{{ item.lastName }}</td>
                  <td>{{ item.userAge }}</td>
                  <td>{{ item.Gender }}</td>
                  <td>{{ item.userRole }}</td>
                  <td>{{ item.emailAdd }}</td>
                  <td>{{ item.userPass }}</td>
                  <td><img :src="item.userProfile" :alt="item.firstName" style="width: 5rem"></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
    </div>
    </div>
    </div>
  </template>

  <script>
  export default {
    computed:{
      homedecor(){
        return this.$store.state.homedecor
      },
      users() {
        return this.$store.state.users
      }
    },
    mounted(){
      this.$store.dispatch('fetchHomedecor')
      this.$store.dispatch('fetchUsers')
    }
  }
  </script>
  
  <style>
 .h1two{
  text-align: center;
 }
</style>
  