// Log to verify that the sketch is loaded
console.log("Timeline sketch loaded");

// Define timeline events data
const timelineData = [
  {
    title: "Playing on Home Street",
    description: "Growing up in a warm, homely environment, playing on the familiar streets.",
    icon: "fa-child",
    phase: "early"
  },
  {
    title: "Primary School",
    description: "Early school days filled with learning and playful exploration.",
    icon: "fa-school",
    phase: "early"
  },
  {
    title: "First Holiday Abroad",
    description: "A glimpse into the wider world and a journey of discovery.",
    icon: "fa-plane",
    phase: "early"
  },
  {
    title: "Secondary School",
    description: "Navigating the complexities of adolescence with new challenges and emotions.",
    icon: "fa-book",
    phase: "mid"
  },
  {
    title: "First Job: Print Shop & Pub",
    description: "Gaining early work experience and learning about responsibility.",
    icon: "fa-briefcase",
    phase: "mid"
  },
  {
    title: "Art College Foundation",
    description: "Exploring creativity and laying the groundwork for future artistic endeavors.",
    icon: "fa-paint-brush",
    phase: "mid"
  },
  {
    title: "Physical Evolution",
    description: "Noticing changes in physical stature and personal growth.",
    icon: "fa-arrows-alt-v",
    phase: "mid"
  },
  {
    title: "University at Central Saint Martins",
    description: "Immersing in London’s dynamic art scene and maturing into adulthood.",
    icon: "fa-university",
    phase: "late"
  },
  {
    title: "Uncertain Future",
    description: "The journey continues into an unpredictable future with both promise and challenges.",
    icon: "fa-question",
    phase: "late"
  }
];

// Wait for the DOM to load before building the timeline
document.addEventListener("DOMContentLoaded", () => {
  const timelineContainer = document.getElementById("timeline");
  if (!timelineContainer) {
    console.error("Timeline container not found!");
    return;
  }
  
  // Create and append timeline events from the data
  timelineData.forEach(event => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("timeline-event");
    eventDiv.setAttribute("data-phase", event.phase);
    
    // Create the icon element
    const iconEl = document.createElement("i");
    iconEl.classList.add("fas", event.icon, "event-icon");
    eventDiv.appendChild(iconEl);
    
    // Create the title element
    const titleEl = document.createElement("h3");
    titleEl.textContent = event.title;
    eventDiv.appendChild(titleEl);
    
    // Create the description element
    const descEl = document.createElement("p");
    descEl.textContent = event.description;
    eventDiv.appendChild(descEl);
    
    // Append the event element to the timeline container
    timelineContainer.appendChild(eventDiv);
  });
  
  // Set up Intersection Observer for fade-in animations
  const observerOptions = { threshold: 0.3 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe each timeline event
  const events = document.querySelectorAll(".timeline-event");
  events.forEach(eventEl => observer.observe(eventEl));
  
  console.log("Timeline events created and observer set up.");
});