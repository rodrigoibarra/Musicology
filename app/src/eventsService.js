import axios from 'axios';

const url = 'http://localhost:5000/api/events/';

class eventsService {
    // get events

    static getEvents(){
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(events => ({
                        ...events
                    }))
                );
            } catch(err){
                reject(err);

            }
        });
    }

    // add events

    static addEvent (typeOfShow,
            tosClass,
            eventName,
            eventCity,
            eventVenue,
            eventDate){
        return axios.post(url, {
            typeOfShow,
            tosClass,
            eventName,
            eventCity,
            eventVenue,
            eventDate
        });
    }

    // delete events
}

export default eventsService;