<template>
<li>
  <h2> {{friendName}}</h2>
  <button @click="toggleDetails">Show Details</button>
  <ul v-if="detailsVisable">
    <li>
      <h4>Age - {{friendAge}}</h4>
      <h4>ID: {{friendId}}</h4>
      <h4>Email: {{emailAddress}}</h4>
    </li>
  </ul>
</li>
</template>

<script>
export default {
  name: "FriendCom",
  props: [
    'friendName' , 'friendId', 'friendAge' , 'emailAddress'
  ],
  data(){
    return{
      detailsVisable: false,
      friend: {
        id: 1,
        name: 'ahmed',
        age: 35,
        emailAddress: 'edf@gfg.com'
      }
    }
  },
  methods:{
    toggleDetails(){
      this.detailsVisable = !this.detailsVisable;
    }
  }
}
</script>

<style scoped>

</style>