<template>
    <div class="about">
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
    </div>
    </div>
  </template>

  <script>
  export default {
    computed:{
      homedecor(){
        return this.$store.state.homedecor
      }
    },
    mounted(){
      this.$store.dispatch('fetchHomedecor')
    }
  }
  </script>
  
  