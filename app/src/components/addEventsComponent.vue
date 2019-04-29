<template>
    <section id="addEvent">
        <h1>Add an Event...</h1>
      <label for="eventName">Event Name</label>
      <input type="text" name="eventName" id="eventName" v-model="eventName">
      <button v-on:click="addEvent">Add event</button>
    </section>
</template>

<script>
import eventsService from '../eventsService';

export default {
  name: 'eventsComponent',
  data() {
    return {
      events:[],
      error:'',
    }
  },
      async created() {
      this.events = await eventsService.getEvents();
    },
    catch(err){
    this.error = err.message;
    }

}

            // typeOfShow,
            // tosClass,
            // eventName,
            // eventCity,
            // eventVenue,
            // eventDate
</script>


