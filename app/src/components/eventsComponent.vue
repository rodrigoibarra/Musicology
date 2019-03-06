<template>
  <section class="musicShowList">
        <h1 class="sectionTitle">Events I've been to.</h1>

        <p class="error" v-if="error">{{ error }}</p>

        <details class="eventItem" :class="event.tosClass"
        v-for="(event, idx) in events"
        :key="idx"
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
import { db } from '../main'
export default {
  name: 'eventsComponent',
  data() {
    return {
      events:[],
      error:'',
    }
  },
   firestore () {
    return {
      events: db.collection('events').orderBy('eventDate')
    }
  },
    catch(err){
    this.error = err.message;
    }
}
</script>