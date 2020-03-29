<template>
  <section class="musicShowList">
        <h1 class="sectionTitle">Some Festivals I've been to.</h1>
        <p class="error" v-if="error">{{ error }}</p>
        <div class="eventsGrid">
          <details class="eventItem" :class="event.tosClass"
        v-for="(event) in eventsIsType"
        v-bind:key="event.tosClass">
            <summary class="summaryTitle">{{event.eventName}} <time datetime:{{event.eventDate}}>{{event.eventDate}}</time></summary>
            <ul class="eventInfo">
                <li class="eventCity"><span>City:</span>{{event.eventCity}}</li>
                <li class="eventVenue"><span>Venue:</span> {{event.eventVenue}}</li>
                <li class="eventDate"><span>Date:</span><time datetime:'{{event.eventDate}}'>{{event.eventDate}}</time></li>
            </ul>
            <p class="eventBarcode">{{event.eventName}}{{event.eventDate}}</p>
        </details>
        </div>
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
computed:{
  eventsIsType: function() {
    return this.events.filter(function(event) {
      return event.tosClass == "festival";
    })
  }
},
      async created() {
      this.events = await eventsService.getEvents();
    },
    catch(err){
    this.error = err.message;
    }

}
</script>