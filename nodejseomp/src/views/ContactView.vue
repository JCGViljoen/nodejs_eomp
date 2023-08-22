<template>
    <div>
      <form action="https://formspree.io/f/xyyaonqq" method="POST">
        <div class="container contactForm">
          <form class="form">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label text-black"
                >First Name:</label
              >
              <input
                type="First Name"
                name="First Name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div class="mb-1">
              <label for="exampleFormControlInput1" class="form-label text-black"
                >Last Name:</label
              >
              <input
                type="Last Name"
                name="Last Name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Surname
              "
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label text-black"
                >Email address:</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label
                for="exampleFormControlTextarea1"
                class="form-label text-black"
                >Please leave a message:</label
              >
            </div>
              <textarea
                name="message"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <div class="btns">
                <button class="formButton mt-3 gap-3 butn1" type="submit">Send</button>
                <button class="formButton mt-3 gap-3 butn2" type="reset">Clear</button>
              </div>
          </form>
        </div>
  
      </form>
    </div>
  </template>
  <script>
     
</script>

<style scoped>


.contactForm {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
}

form {
  width: 100%;
  border-radius: 2rem;
  border-color: black;
}



  
</style>