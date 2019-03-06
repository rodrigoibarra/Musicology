<template>
  <div class="login">
    <h3>Been There...</h3>
    <button v-on:click="login" class="social-button">Enter</button>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      socialLogin(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) =>{
        this.$router.replace('addevents');
        }).catch((err) => {
          alert('oops.' + err.message)
        });
      }
    }
  }



</script>

