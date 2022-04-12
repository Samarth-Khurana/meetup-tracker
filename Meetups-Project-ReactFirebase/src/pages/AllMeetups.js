import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function AllMeetupsPage() {

  const[isLoading,setisLoading]=useState(true);

  const [loadedMeetups,setLoadedMeetups] = useState([]);

  useEffect(() => {
    setisLoading(true);

    fetch('https://meet-app-3f8e2-default-rtdb.firebaseio.com/meetups.json'
  ).then((response) => {
    return response.json();
  }).then((data) => {

    const meetups = [];

    for (const key in data ) { 
      const meetup = {
        id : key,
        ...data[key]
      };

      meetups.push(meetup);
    }
        setisLoading(false);
        setLoadedMeetups(meetups);
  });
  },[]); 

  

  if (isLoading) {

    return(
      <section>
        <p>Loading...</p>
      </section>
    )
    
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;