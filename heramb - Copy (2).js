<script>
  // Define your event data as a JSON object
  var eventData = {
    "eventName": "Your Event or Wedding",
    "eventDescription": "Join us for a celebration of love and happiness as we come together to mark this special occasion.",
    "eventDate": "Saturday, October 15, 20XX",
    "eventTime": "4:00 PM - 10:00 PM",
    "eventVenue": "Elegant Venue Name",
    "eventAddress": "123 Main Street, Cityville, State 12345",
    "rsvpDeadline": "September 30, 20XX",
    "contactEmail": "contact@example.com"
  };

  // Function to populate the HTML with event data
  function populateEventData() {
    document.querySelector("header h1").textContent = eventData.eventName;
    document.querySelector("header p").textContent = "Save the Date";
    document.querySelector("#about p").textContent = eventData.eventDescription;
    document.querySelector("#details p:nth-child(1)").textContent = "Date: " + eventData.eventDate;
    document.querySelector("#details p:nth-child(2)").textContent = "Time: " + eventData.eventTime;
    document.querySelector("#details p:nth-child(3)").textContent = "Venue: " + eventData.eventVenue;
    document.querySelector("#rsvp p:nth-child(1)").textContent = "Please RSVP by " + eventData.rsvpDeadline;
    document.querySelector("#contact p").textContent = "If you have any questions or need further information, please contact us at " + eventData.contactEmail;
  }

  // Call the function to populate the HTML with the event data
  populateEventData();
</script>
