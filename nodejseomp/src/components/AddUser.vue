<template>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addForm" class="d-flex flex-column gap-5">
            <input type="text" v-model="userdata.userID" placeholder="id" name="" id="">
            <input type="text" v-model="userdata.firstName" placeholder="name" name="" id="">
            <input type="text" v-model="userdata.lastName" placeholder="surname" name="" id="">
            <input type="text" v-model="userdata.userAge" placeholder="age" name="" id="">
            <input type="text" v-model="userdata.Gender" placeholder="gender" name="" id="" >
            <input type="text" v-model="userdata.userRole" placeholder="role" name="" id="">
            <input type="text" v-model="userdata.emailAdd" placeholder="email" name="" id="">
            <input type="text" v-model="userdata.userPass" placeholder="password" name="" id="">
            <input type="text" v-model="userdata.userProfile" placeholder="image" name="" id="">
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
        userdata:{
        userID: "",
        firstName: "",
        lastName: "",
        userAge: "",
        Gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: ""
      }
    }
  },
  methods:{
          addForm(){
            this.$store.dispatch('addUser', this.userdata)
          }
        }
    }
</script>

<style scoped>
.btn{
    background-color: black;
    color: white;
    border-radius: 1px;
}
</style>