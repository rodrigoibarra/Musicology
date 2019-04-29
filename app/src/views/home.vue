<template>
  <div class="home">
      <header>
          <h1 class="heroHeader">Hey, welcome to Apollo.</h1>
          <p class="heroText">A place where I track most of the shows or events I've attended.</p>
      </header>
      <section class="byTheNumbers">
          <h2 class="sectionTitle theData">The data</h2>
          <p>Here's some simple info, I might go deeper into the numbers but right now, this is all we get.</p>
        <div class="stats">
        <p class="error" v-if="error">{{ error }}</p>
            <div class="data">
                <h3 class="eventStat">{{countFestival}}</h3>
                <router-link to="/festivals" class="typeOfEvent">Festivals</router-link>
             </div>
            <div class="data">
               <h3 class="eventStat">{{countMusic}}</h3>
              <router-link to="/" class="typeOfEvent">Music Shows</router-link>
            </div>
            <div class="data">
             <h3 class="eventStat">{{countSports}}</h3>
              <router-link to="/" class="typeOfEvent">Sports events</router-link>
            </div>
            <div class="data">
              <h3 class="eventStat">{{countOthers}}</h3>
              <router-link to="/" class="typeOfEvent">Other stuff</router-link>
            </div>
        </div>
        <p>So basically I've been to {{countAll}} events, that's the TL,DR.</p>
        <p>There's probably more, but these are all the tickets I kept over the ages, there are some really old ones.</p>
      </section>
      <section class="whySection">
          <h2 class="sectionTitle">Why?</h2>

          <p>I had piles and piles of tickets, and since there's not enough tracking data in the wild about me, I decided to write an API and display them here, just for the lol's. </p>

      </section>
    </div>
</template>

<script>

import eventsService from '../eventsService';

export default {
  name: 'eventsService',
  data() {
    return {
      events:[],
      error:'',
    }
  },
  computed:{
    eventsIsFestival: function() {
    return this.events.filter(function(event) {
      return event.tosClass == "festival";
    })
  },
    countFestival: function() {
      return this.eventsIsFestival.length
    },
    eventsIsMusic: function() {
    return this.events.filter(function(event) {
      return event.tosClass == "musicShow";
    })
  },
    countMusic: function() {
      return this.eventsIsMusic.length
    },
        eventsIsSports: function() {
    return this.events.filter(function(event) {
      return event.tosClass == "sports";
    })
  },
    countSports: function() {
      return this.eventsIsSports.length
    },
        eventsIsOthers: function() {
    return this.events.filter(function(event) {
      return event.tosClass == "others";
    })
  },
    countOthers: function() {
      return this.eventsIsOthers.length
    },

    countAll: function() {
      return this.events.length
    },


},
      async created() {
      this.events = await eventsService.getEvents();
    },
    catch(err){
    this.error = err.message;
    }

}
</script>