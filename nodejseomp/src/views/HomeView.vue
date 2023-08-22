<template>
  <div class="body">
    <div class="text">
      <p>
        <span style="">
        <h1 class="h2">WELCOME TO HOMESPACE</h1>
      </span>
      </p>
     
    </div>
    
  </div>
  
  
</template>
<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Righteous&display=swap');
*{
font-family: 'Merriweather', serif;
font-family: 'Righteous', cursive;
}

.body{
  position: absolute;
  background-image: url("https://i.postimg.cc/9FZPgGFf/bedroom-planner.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40rem;
  width: 100%;
}

.h2{

  font-size:5rem;
   text-align: center;

}
.h1{
  text-align: center;
}
.text{
  position: relative;
  margin-top: 15rem;
}
body {
  height: 100%;
  font-family: 'tradegothiclt-bold', sans-serif;
}

h1 {
  font-size: 5em;
  color: white;
  text-transform: uppercase;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
}

p {
  position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #9f7c59, white, #82674c );
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
</style>
