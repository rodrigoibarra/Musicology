<template>
  <section class="musicShowList">
        <h1 class="sectionTitle">Events I've been to.</h1>

        <p class="error" v-if="error">{{ error }}</p>

        <details class="eventItem" :class="event.tosClass"
        v-for="event in events"
        v-bind:key="event._id"
        >
            <summary class="summaryTitle">{{event.eventName}}</summary>
            <ul class="eventInfo">
                <li class="eventCity"><span>City:</span>{{event.eventCity}}</li>
                <li class="eventVenue"><span>Venue:</span> {{event.eventVenue}}</li>
                <li class="eventDate"><span>Date:</span><time datetime="2015-09-26">{{event.eventDate}}</time></li>
            </ul>
            <p class="eventBarcode">{{event.eventName}}{{event.eventDate}}</p>
        </details>

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
</script>