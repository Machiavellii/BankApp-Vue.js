<template>
   <div class="card mb-3">
  <div class="card-header text-center">Bank Application</div>
  <div class="card-body">
      <div class="description ">Version : 1.0.1</div>
      <div class="description ">This is a bank app built with the Vue.js framework</div>
      <div class="description ">Product by <a href="https://github.com/Machiavellii" target="_blank">Machiavellii</a></div>
      
  </div>
</div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style>
.card{
  color:#Fff;
  max-width: 30rem; 
  height:30rem;
  margin: 0 auto;
}
  .card-header{
    font-size: 25px;
    background-color: #5d4848;
  }
  .card-body{
    background-color: #a38686;
  }
  .description{
    padding: 25px 15px;
    border-bottom: 1px solid #Fff;
    font-size: 17px;
  }
  .description a{
    color:#333;
  }

</style>