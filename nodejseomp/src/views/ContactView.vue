<template>
    <div class="con">
      <div class="contact">
        <h1 class="contactUS">Contact Us</h1>
        <div class="mb-3 bb">
          <label for="exampleFormControlInput1" class="form-label">First Name</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Last Name">
        </div>
        <div class="mb-3 bb">
          <label for="exampleFormControlInput1" class="form-label">Last Name</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your First Name">
        </div>
        <div class="mb-3 bb">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3 bb">
          <label for="exampleFormControlTextarea1" class="form-label">Your Message:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
    </div>
  </template>
  <script>
     
</script>

<style scoped>

.mb-3{
  color: black;
}

.bb{
  border: 0.5rem solid #469370;
}

.contact {
  width: 50%;
  margin-top: 2rem;
}

.contactUS{
  text-align: center;
}
.con {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>