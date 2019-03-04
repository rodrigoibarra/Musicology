const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
require('dotenv').config({ path: 'variables.env'});






// get events

router.get('/', async (req, res) => {
    const Events = await loadEventsCollection();
    res.send(await Events.find({}).toArray());

} )

// add events

router.get('/', async (req, res) => {
    const Events = await loadEventsCollection();
    await Events.insertOne({
            "typeOfShow": req.body.typeOfShow ,
            "tosClass": req.body.tosClass ,
            "eventName": req.body.eventName,
            "eventCity": req.body.eventCity,
            "eventVenue": req.body.eventVenue,
            "eventDate": req.body.eventDate
        });
        res.status(201).send();
});

// delete events

// update events

async function loadEventsCollection() {
    const client = await mongodb.MongoClient.connect(process.env.DATABASE, {
        useNewUrlParser: true
    });

    return client.db('musicology').collection('Events');
}


module.exports = router;