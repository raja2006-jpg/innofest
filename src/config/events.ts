// import rampWalk_img from  '../assets/event_thumbnails/rampWalk_.jpeg'
// import seminar_img from  '../assets/event_thumbnails/seminar.jpeg'
// import shortFilm_img from  '../assets/event_thumbnails/short_.jpg'
// import photography_img from  '../assets/event_thumbnails/photography.jpg'
// import techTalk_img from  '../assets/event_thumbnails/techTalk_.jpeg'
// import chess_img from  '../assets/event_thumbnails/chess_.jpeg'
// import ciccada_img from  '../assets/event_thumbnails/cicada3301.jpg'
// import cooking_img from  '../assets/event_thumbnails/cooking.jpeg'
// import tech_img from  '../assets/event_thumbnails/CLUB ACTIVITY.png' 
// import paperPresentation_img from  '../assets/event_thumbnails/paper_.jpg' 
// import drawing_img from  '../assets/event_thumbnails/draw_.jpg' 
// import debugging_img from "@/assets/carousel/DEBUGGING.png";
// import LogoCreation_img from  '../assets/event_thumbnails/logoCreation.jpeg'
import connection_img from  '../assets/event_thumbnails/connect_.jpg' 
import debugging_img from  '../assets/event_thumbnails/DEBUGGING.png' 
import treasureHunt_img from  '../assets/event_thumbnails/treasure_.jpg' 

import codingContest_img from  '../assets/event_thumbnails/coding_.jpeg' 
import quiz_img from  '../assets/event_thumbnails/quiz_.png' 

import singing_img from  '../assets/event_thumbnails/sing_.jpg' 
import dance_img from  '../assets/event_thumbnails/dance_.jpg'  
import Egames_img from  '../assets/event_thumbnails/Egames.jpg'

import ipl_img from  '../assets/carousel/nonTech/9.jpg'
import meme_img from  '../assets/carousel/nonTech/10.png'
import poster_img from  '../assets/carousel/tech/poster.jpg'
import charades_img from  '../assets/carousel/tech/charades.jpg'
import mind_img from  '../assets/carousel/tech/mind.jpg'
import prompt_img from  '../assets/carousel/tech/prompt.png'
import ideathon_img from  '../assets/carousel/tech/ideathon.png'
import tamilodu_img from  '../assets/carousel/nonTech/tamilodu.png'



export type Event = {
  id: number
  name: string
  type: 'technical' | 'non-technical'
  description: string
  rules: string[]
  image: string
  formURL: string
}
const techRegURL:string= "#";
const nonTechRegURL:string= "#";

export const event: Event[] = [
  
  // {
  //   id: 3,
  //   name: "Drawing",
  //   type: "non-technical",
  //   description: "Let your creativity flow as you compete to create beautiful artwork.",
  //   rules: [
  //     "Topic will be provided on spot.",
  //     "Participants must bring their own drawing supplies.",
  //     "Time limit of 1 hours.",
  //     "No external references or digital devices allowed."
  //   ],
  //   image: drawing_img,
  //   formURL: nonTechRegURL
  // },
  // {
  //   id: 4,
  //   name: "Fireless Cooking",
  //   type: "non-technical",
  //   description: "A fun culinary competition where participants create dishes without using fire.",
  //   rules: [
  //     "Only pre-cooked ingredients are allowed.",
  //     "Time limit of 1 hour.",
  //     "Participants must bring their own ingredients."
  //   ],
  //   image: cooking_img,
  //   formURL: nonTechRegURL
  // },
  // {
  //   id: 5,
  //   name: "Short Film Contest",
  //   type: "non-technical",
  //   description: "Show your storytelling skills through short films.",
  //   rules: [
  //     "Maximum duration of 10 minutes.",
  //     "Only original content allowed.",
  //     "No explicit content."
  //   ],
  //   image: shortFilm_img,
  //   formURL: nonTechRegURL
  // },
  // {
  //   id: 6,
  //   name: "Quick Gambit (Chess)",
  //   type: "non-technical",
  //   description: "A fast-paced chess competition with shorter time limits.",
  //   rules: [
  //     "Time limit of 10 minutes per player.",
  //     "Standard chess rules apply.",
  //     "Participants must bring their own chess sets."
  //   ],
  //   image: chess_img,
  //   formURL: nonTechRegURL
  // },
  // {
  //   id: 7,
  //   name: "Ramp Walk",
  //   type: "non-technical",
  //   description: "A fashion show where participants showcase their outfits on the ramp.",
  //   rules: [
  //     "Both female & male participants are allowed.",
  //     "Time limit of 3 minutes per participant.",
  //     "Costume themes must be followed.",
  //     "No offensive or inappropriate attire.",
  //     "Participants should not be allowed to use flashpots, or any other special effects."
  //   ],
  //   image: rampWalk_img,
  //   formURL: nonTechRegURL
  // },
  // // {
  // //   id: 8,
  // //   name: "Movie Mania",
  // //   type: "non-technical",
  // //   description: "A movie trivia and quiz competition for film buffs.",
  // //   rules: [
  // //     "Teams of 2-4 members.",
  // //     "No external devices or internet allowed.",
  // //     "Questions will cover various movie genres."
  // //   ],
  // //   image: movieMania_img
  // // },
  // {
  //   id: 18,
  //   name: "Photography",
  //   type: "non-technical",
  //   description: "An Inspiring photography event, where creativity meets community!",
  //   rules: [
  //     "Participants should post 2 photos in instagram and tag our insta ID (innofest24)",
  //     "First photo should be the captured photo, second photo should be the actual captured photo with geo tag",
  //     "Plagiarism is strictly prohibited",
  //     "Original editing required."
  //   ],
  //   image: photography_img,
  //   formURL: nonTechRegURL
  // },
  // // {
  // //   id: 9,
  // //   name: "Rangoli, Mehendi, Vegetable Carving",
  // //   type: "non-technical",
  // //   description: "A creative competition to design Rangolis, apply Mehndi, or carve vegetables.",
  // //   rules: [
  // //     "Time limit of 1 hour.",
  // //     "Participants must bring their own materials.",
  // //     "Original designs only."
  // //   ],
  // //   image: club_img
  // // },
  // // {
  // //   id: 10,
  // //   name: "Wealth from Waste",
  // //   type: "non-technical",
  // //   description: "Create innovative items using waste materials.",
  // //   rules: [
  // //     "Only waste materials can be used.",
  // //     "Time limit of 2 hours.",
  // //     "Originality and creativity will be judged."
  // //   ],
  // //   image: club_img
  // // },
  
 
  // // {
  // //   id: 13,
  // //   name: "Club Activities",
  // //   type: "technical",
  // //   description: "A series of fun and engaging technical club-based activities.",
  // //   rules: [
  // //     "Team participation (up to 4 members).",
  // //     "Complete all given tasks within the time limit.",
  // //     "Use of technology is allowed where necessary."
  // //   ],
  // //   image: clubActivity_img
  // // },
  

  // {
  //   id: 16,
  //   name: "Paper Presentation",
  //   type: "technical",
  //   description: "Present your research or innovation in a formal setting.",
  //   rules: [
  //     "Individual or team participation.",
  //     "Time limit of 10 minutes per presentation.",
  //     "Original research papers only."
  //   ],
  //   image: paperPresentation_img,
  //   formURL: techRegURL
  // },
  
  // {
  //   id: 19,
  //   name: "Seminar on Networking",
  //   type: "technical",
  //   description: "Join us for an engaging seminar that dives deep into the essential principles of networking and routing.",
  //   rules: [

  //   ],
  //   image: seminar_img,
  //   formURL: techRegURL
  // },

                  //innofest 2026 non-tech//
 {
    id: 1,
    name: "Dance",
    type: "non-technical",
    description: "Show off your dance moves in this vibrant competition with solo, duo, and group categories.",
    rules: [
      "Time limit of 5 minutes per performance.",
      "Participants must bring their own music.",
      "Costumes and props are allowed."
    ],
    image: dance_img,
    formURL: nonTechRegURL
  },
  {
    id: 2,
    name: "Singing",
    type: "non-technical",
    description: "A soulful competition where participants can showcase their vocal talents.",
    rules: [
      "Solo or band performances are allowed.",
      "Maximum time limit of 5 minutes.",
      "Musical Instruments can be used.",
      "Karoake allowed for solo performance.",
      "No background music for group/Band performances.",

    ],
    image: singing_img,
    formURL: nonTechRegURL
    
  },
     
  {                      
    id: 3,
    name: "E Games",
    type: "non-technical",
    description: "A Game tournament for Online Battle Royal Games - PUBG & Free Fire",
    rules: [
      "This is a Tournament Game for Free Fire & PUBG",
      "Only college students allowed",
      "Every Custom Lobby will be host by the tournament Officials"
    ],
    image: Egames_img,
    formURL: nonTechRegURL
  },
  {                                    
    id: 4,
    name: "Tamilodu Vilayadu",
    type: "non-technical",
    description: "none",
    rules: [
      "This is a Tournament Game for Free Fire & PUBG",
      "Only college students allowed",                               
      "Every Custom Lobby will be host by the tournament Officials"
    ],
    image: tamilodu_img,
    formURL: nonTechRegURL
  },
  {                                    
    id: 5,
    name: "IPL Auction",
    type: "non-technical",
    description: "none",
    rules: [
      "This is a Tournament Game for Free Fire & PUBG",
      "Only college students allowed",                               
      "Every Custom Lobby will be host by the tournament Officials"
    ],
    image: ipl_img,
    formURL: nonTechRegURL
  },
   {
    id: 6,
    name: "Treasure Hunt",
    type: "non-technical",
    description: "A puzzle-solving event to find hidden technical clues and treasures.",
    rules: [
      "Teams of 4-6 members.",
      "Time limit of 2 hours.",
      "All clues must be found to win."
    ],
    image: treasureHunt_img,
    formURL: techRegURL
  },
   {                                    
    id: 7,
    name: "Meme Creation",
    type: "non-technical",
    description: "none",
    rules: [
      "This is a Tournament Game for Free Fire & PUBG",
      "Only college students allowed",                               
      "Every Custom Lobby will be host by the tournament Officials"
    ],
    image: meme_img,
    formURL: nonTechRegURL
  },
  {
    id: 8,
    name: "Connection",
    type: "non-technical",
    description: "A challenge to identify connections between various technical concepts.",
    rules: [
      "Individual or team participation (maximum 3).",
      "Atleast one Laptop for a team.",
      "Three rounds will be conducted",
      "No external help allowed."
    ],
    image: connection_img,
    formURL: nonTechRegURL
  },
  
     //innofest26 tech events//
     {
    id: 9,
    name: "Debugging",
    type: "technical",
    description: "A competition where participants are tasked with finding and fixing bugs in code.",
    rules: [
      "Individual participation.",
      "Time limit of 1.5 hours.",
      "Languages: C, C++, Java, or Python."
    ],
    image: debugging_img,
    formURL: techRegURL
  },
    {
    id: 10,
    name: "Code Xplore",
    type: "technical",
    description: "A challenging coding competition to test problem-solving skills.",
    rules: [
      "Individual participation.",
      "Time limit of 3 hours.",
      "Languages: C, C++, Java, or Python."
    ],
    image: codingContest_img,
    formURL: techRegURL
  },
    {
    id: 11,
    name: "Poster Designing",
    type: "technical",
    description: "Join us for a creative workshop to design your own unique poster!",
    rules: [
      "Maximum 3 members for a team",
      "Laptop is mandatory for each team",
      "Time limit of 1 Hour"
    ],
    image: poster_img,
    formURL: nonTechRegURL
  },
  {
    id: 12,
    name: "Tech Quiz",
    type: "technical",
    description: "A quiz competition covering a wide range of technical topics.",
    rules: [
      "Teams of 2-3 members.",
      "No electronic devices allowed.",
      "Time limit of 1 hour."
    ],
    image: quiz_img,
    formURL: techRegURL
  },
   {
    id: 13,
    name: "Tech charades",
    type: "technical",
    description: "The most baffling and enigmatic mystery on the Internet.",
    rules: [
      "Maximum 3 members for a team",
      "Laptop is mandatory for each team",
      "Time limit of 1 Hour",
      "Only 3 clues will be provided"
    ],
    image: charades_img,
    formURL: techRegURL
  },
   {
    id: 14,
    name: "Mind 2 Code",
    type: "technical",
    description: "The most baffling and enigmatic mystery on the Internet.",
    rules: [
      "Maximum 3 members for a team",
      "Laptop is mandatory for each team",
      "Time limit of 1 Hour",
      "Only 3 clues will be provided"
    ],
    image: mind_img,
    formURL: techRegURL
  },
   {
    id: 15,
    name: "Prompt Creation",
    type: "technical",
    description: "The most baffling and enigmatic mystery on the Internet.",
    rules: [
      "Maximum 3 members for a team",
      "Laptop is mandatory for each team",
      "Time limit of 1 Hour",
      "Only 3 clues will be provided"
    ],
    image: prompt_img,
    formURL: techRegURL
  },
   {
    id: 16,
    name: "Ideathon",
    type: "technical",
    description: "The most baffling and enigmatic mystery on the Internet.",
    rules: [
      "Maximum 3 members for a team",
      "Laptop is mandatory for each team",
      "Time limit of 1 Hour",
      "Only 3 clues will be provided"
    ],
    image: ideathon_img,
    formURL: techRegURL
  },

  
 
  
]

