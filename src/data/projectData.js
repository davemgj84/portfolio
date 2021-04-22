import tweeter from "../assets/tweeter.jpg";
import tweeterLow from "../assets/tweeterLow.jpg";
import wikiMaps from "../assets/wikiMaps.jpg";
import wikiMapsLow from "../assets/wikiMapsLow.jpg";
import scheduler from "../assets/scheduler.jpg";
import schedulerLow from "../assets/schedulerLow.jpg";
import sapphire from "../assets/sapphire.jpg";
import sapphireLow from "../assets/sapphireLow.jpg";
import haiku from "../assets/haiku.jpg";
import haikuLow from "../assets/haikuLow.jpg";
import theFilmAwards from "../assets/theFilmAwards.png";
import theFilmAwardsLow from "../assets/theFilmAwardsLow.jpg";
import weather from "../assets/weather.jpg";
import weatherLow from "../assets/weatherLow.jpg";
import iss from "../assets/iss.jpg";
import issLow from "../assets/issLow.jpg";

const projectData = [
  {
    id: 1,
    title: "Tweeter",
    desc: "Tweeter is a simple, single-page Twitter clone.",
    icon: "fas fa-retweet",
    link: "https://github.com/davemgj84/tweeter",
    tech: "HTML, CSS, JS, jQuery, Node, Express & MongoDB",
    image: tweeter,
    placeholder: tweeterLow,
  },
  {
    id: 2,
    title: "Wiki-Maps",
    desc:
      "An interactive map where users can create personal maps of favourite locations, using the Google Maps API.",
    icon: "fas fa-map-marker-alt",
    link: "https://github.com/davemgj84/wiki-maps",
    tech: "Node, Express, EJS, PG & Sass",
    image: wikiMaps,
    placeholder: wikiMapsLow,
  },
  {
    id: 3,
    title: "Scheduler",
    desc:
      "Scheduler is single-page app that allows students to book appointments with interviewers.",
    icon: "far fa-calendar-alt",
    link: "https://github.com/davemgj84/scheduler",
    tech: "React, Sass & Axios",
    image: scheduler,
    placeholder: schedulerLow,
  },
  {
    id: 4,
    title: "Sapphire",
    desc: "An interactive story based choose your own adventure game.",
    icon: "fas fa-gamepad",
    link: "https://github.com/davemgj84/sapphire",
    tech: "React, React-Spring, Phaser, Axios, Express, Node & PSQL",
    image: sapphire,
    placeholder: sapphireLow,
  },
  {
    id: 5,
    title: "Haiku",
    desc:
      "A small but fun Front-End application, that will allows the user to click a button and read a Haiku. Every click will bring up a new Haiku.",
    icon: "fas fa-pen-fancy",
    link: "https://github.com/davemgj84/haiku",
    tech: "React & Sass",
    image: haiku,
    placeholder: haikuLow,
  },
  {
    id: 6,
    title: "Film Awards",
    desc:
      "An app that allows users to search the Open Movie Database (OMDb API), for their favourite films and nominate up to 5 films for an award.",
    icon: "fas fa-film",
    link: "https://github.com/davemgj84/theFilmAwards",
    tech: "React, Sass & Axios",
    image: theFilmAwards,
    placeholder: theFilmAwardsLow,
  },
  {
    id: 7,
    title: "Weather",
    desc:
      "A simple Front-End Weather Application. Using the OpenWeather API, it provides real time weather data to the user.",
    icon: "fas fa-cloud-sun",
    link: "https://github.com/davemgj84/weather",
    tech: "React, Sass & Axios",
    image: weather,
    placeholder: weatherLow,
  },
  {
    id: 8,
    title: "ISS Spotter",
    desc:
      "An app for space enthusiasts who are interested in spotting the International Space Station (ISS).",
    icon: "fas fa-satellite",
    link: "https://github.com/davemgj84/iss-spotter",
    tech: "React, Sass, Node, Express, Axios & Cors",
    image: iss,
    placeholder: issLow,
  },
];

export default projectData;
