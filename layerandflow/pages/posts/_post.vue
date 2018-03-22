<template>
  <section class="container">
    <h1>Post Page</h1>
    <h2>Id is: {{ $route.params.post }}</h2>
    <h3>Name is: {{name}}</h3>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData () {
    return axios.get('https://wordpress-api.belunar.com/wp-json/wp/v2/pages')
    .then((res) => {
      console.log('wumba');
      return {name: res.data[7].id}
    })
  }
}
</script>
