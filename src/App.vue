<template>
<div id="app">
  <div class="justify-content-center align-items-center">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow">
      <a class="navbar-brand" href="#">Bransys Vehicle</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText01" aria-controls="navbarText01" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="vehicles">Vehicle List</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="mt-5 m-4 row d-flex justify-content-center align-items-center">
      <router-view />
  </div>
</div>
</template>

<script>
import vehicles from './components/json/vehicles.json'

export default {
  name: 'App',
  data () {
      return {
          vehicles: vehicles
      }
  },
}
</script>

<style>
#app {
  font-family: sans-serif;
  height: 100vh;
  background: #53B985;
}

.nav-link:hover {
  font-weight: bold;
}
</style>
