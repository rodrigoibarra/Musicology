<template>
    <div class="addEvents">
        <form @submit="addEvent(name, image)">
      <h2>Add a new event</h2>
      <select v-model="typeOfShow" name="typeOfShow" required>
        <option disabled value="">Please select one</option>
        <option>Music Show</option>
        <option>Festival</option>
        <option>Sports</option>
        <option>Others</option>

      </select>
      <select v-model="tosClass" placeholder="tosClass" class="input" required>
        <option disabled value="">Please select one</option>
        <option>musicShow</option>
        <option>festival</option>
        <option>sports</option>
        <option>others</option>
      </select>
      <input v-model="eventName" placeholder="eventName" class="input" required>
      <input v-model="eventCity" placeholder="eventCity" class="input" required>
      <input v-model="eventVenue" placeholder="eventVenue" class="input" required>
      <input v-model="eventDate" type="date" name="eventDate">
      <button type="submit" class="button">Add New Comic</button>
    </form>
    </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'
export default {
       methods: {
    addEvent (typeOfShow, tosClass, eventName, eventCity, eventVenue, eventDate  ) {
      db.collection('Events').add({ typeOfShow, tosClass, eventName, eventCity, eventVenue, eventDate })
      // Clear values
      this.name = ''
      this.image = ''
    },
    deleteComic (id) {
      db.collection('Events').doc(id).delete()
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
}
</script>
