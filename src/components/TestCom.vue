<template>
<ul v-if="test.prop3">
  <li>The First Prop: {{test.prop1}}</li>
  <li>The Second Prop2: {{test.prop2}}</li>
</ul>
</template>

<script>
export default {
  name: "test",
  data(){
    return {
      test1: false,
      test: {
        prop1: 13,
        prop2: 'yy',
        prop3: true,
      }
    }
  },
}
</script>

<style scoped>

</style>