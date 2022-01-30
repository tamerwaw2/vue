<template>
<ul v-if="test.pro3">
  <li>The  Pro: {{test.pro1}}</li>
  <li>The  Pro2: {{test.pro2}}</li>
  <li>The  Pro2: {{test.pro3}}</li>
</ul>
</template>

<script>
export default {
  name: "test",
  data(){
    return {
      test1: false,
      test: {
        pro1: 13,
        pro2: 'yy',
        pro3: true,
        pro4: 'hi',
      }
    }
  },
}
</script>

<style scoped>
h2{
  color: black;
}
</style>