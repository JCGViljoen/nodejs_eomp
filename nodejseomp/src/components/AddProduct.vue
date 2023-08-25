<template>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">Add</button>

<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel1">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addForm" class="d-flex flex-column gap-5">
            <input type="text" v-model="productdata.prodID" placeholder="id" name="" id="" required>
            <input type="text" v-model="productdata.prodName" placeholder="name" name="" id="" required>
            <input type="text" v-model="productdata.quantity" placeholder="quantity" name="" id="" required>
            <input type="text" v-model="productdata.amount" placeholder="amount" name="" id="" required>
            <input type="text" v-model="productdata.Category" placeholder="category" name="" id="" required>
            <input type="text" v-model="productdata.prodUrl" placeholder="image" name="" id="">
            <button type="submit" class="btn">Add</button>
           </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        data(){
    return{
        productdata:{
        prodID: "",
        prodName: "",
        quantity: "",
        amount: "",
        Category: "",
        prodUrl: ""
      }
    }
  },
  methods:{
          addForm(){
            this.$store.dispatch('addProduct', this.productdata)
          }
        }
    }
</script>

<style scoped>
.btn{
    background-color: black;
    border-radius: 1px;
    color: white;
}
</style>