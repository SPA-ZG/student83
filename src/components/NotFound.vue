<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops! The page you were looking for could not be found.</p>
    <router-link to="/" class="home-link">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
  color: #333;
}

.not-found h1 {
  font-size: 80px;
  margin-bottom: 40px;
}

.home-link {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
}
</style>
