<template>
  <div class="about">
    <h1 class="h1two">Admin Interface💻</h1>
    <div class="table-responsive" style="margin-top: 1rem" v-if="homedecor">
      <h1 class="h1two">Home Decor Products🛋️</h1>
      <button class="addbtn"><AddProduct/></button>
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
        <tbody>
          <tr v-for="item in homedecor" :key="item.prodID">
            <th scope="row">{{ item.prodID }}</th>
            <td>{{ item.prodName }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.Category }}</td>
            <td><img :src="item.prodUrl" :alt="item.prodName" style="width: 5rem"></td>
            <td><button @click="editProduct(item)" class="btn btn-dark">Edit</button></td>
            <td><button @click="deleteProduct(item.prodID)" class="btn btn-dark">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <button><AddUser/></button>
    <div class="table-responsive" v-if="users">
      <h1 class="h1two">Users👤</h1>
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
            <th scope="col">userProfile</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in users" :key="item.userID">
            <th scope="row">{{ item.userID }}</th>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.userAge }}</td>
            <td>{{ item.Gender }}</td>
            <td>{{ item.userRole }}</td>
            <td>{{ item.emailAdd }}</td>
            <td><img :src="item.userProfile" :alt="item.firstName" style="width: 5rem"></td>
            <td><button @click="editUser(item.userID)" class="btn btn-dark">Edit</button></td>
            <td><button @click="deleteUser(item.userID)" class="btn btn-dark">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="else" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/SpinnerComponent.vue";
import AddProduct from '@/components/AddProduct.vue';
import AddUser from "@/components/AddUser.vue";

export default {
  components: {
    Spinner,
    AddProduct,
    AddUser
  },
  methods: {
    async editProduct(product) {
      
    },
    async deleteProduct(prodID) {
      this.$store.dispatch("deleteProduct", prodID);
    },
    async deleteUser(userID) {
      this.$store.dispatch("deleteUser", userID);
    },
  },
  computed: {
    homedecor() {
      return this.$store.state.homedecor;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchHomedecor");
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style>
.h1two {
  text-align: center;
}
</style>
