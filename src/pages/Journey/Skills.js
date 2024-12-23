import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import "./skills.css";

const timelineData = [
  { 
    year: "2000", 
    description: "Born in Chennai, Tamil Nadu.",
    details: ["Started life in a vibrant city.", "First steps towards a wonderful journey."]
  },
  { 
    year: "2006", 
    description: "Started Primary School.",
    details: ["Developed early interest in reading and writing.", "Won first school competition."]
  },
  { 
    year: "2010", 
    description: "Entered Middle School.",
    details: ["Excelled in Mathematics and Science subjects.", "Represented school in district-level quiz competition."]
  },
  { 
    year: "2015", 
    description: "Started High School.",
    details: ["Joined the school robotics club.", "Achieved top grades in Mathematics."]
  },
  { 
    year: "2018", 
    description: "Graduated from High School.",
    details: ["Graduated with honors.", "Active member of the debate club."]
  },
  { 
    year: "2020", 
    description: "Enrolled in University.",
    details: ["Pursued a degree in Computer Science.", "Participated in hackathons and tech events."]
  },
  { 
    year: "2022", 
    description: "Completed Bachelor’s Degree.",
    details: ["Specialized in Artificial Intelligence.", "Built a capstone project on smart automation."]
  },
  { 
    year: "2023", 
    description: "Started working on a UTM Software Capstone Project.",
    details: ["Collaborated with a team to develop cutting-edge solutions.", "Focused on innovation in AI and automation."]
  },
  { 
    year: "2024", 
    description: "Exploring New Opportunities.",
    details: ["Attended industry conferences and workshops.", "Focused on personal and professional growth."]
  }
];

const useScrollAnimation = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));

    
    return () => observer.disconnect();
  }, []);
};

const Timeline = () => {
  useScrollAnimation();

  return (
    <div className="timeline-container">
      <Navbar />
      <h1 className="timeline-title">Life Timeline</h1>
      <div className="timeline">
        {timelineData.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-description">{event.description}</div>
            <ul className="timeline-details">
              {event.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Timeline />
    </div>
  );
};

export default App;