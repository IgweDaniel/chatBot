import React from "react";
import { CovidStateStatus } from "./components/covidStateStatus";

export const steps = [
  {
    id: "1",
    message: "Hello I'm Exo,",
    trigger: "2",
  },
  {
    id: "2",
    message: "I give a status on covid 19 in any nigerian state",
    trigger: "3",
  },
  {
    id: "3",
    message: "Type a nigerian state to get it's covid 19 status",
    trigger: "4",
  },
  {
    id: "4",
    user: true,
    trigger: "5",
    validator: (value) => {
      if (value.trim() == "") {
        return "Please enter a value";
      } else if (!states.includes(value.toLowerCase())) {
        return "State is in valid";
      }

      return true;
    },
  },
  {
    id: "5",
    message: "ok getting info for {previousValue}",
    trigger: "6",
  },
  {
    id: "6",
    component: <CovidStateStatus />,
    asMessage: true,
    waitAction: true,
    trigger: "8",
  },

  {
    id: "8",
    message: "Thank You",
    trigger: "9",
    end: true,
  },
];

export const states = [
  "abuja",
  "abia",
  "adamawa",
  "akwa Ibom",
  "anambra",
  "bauchi",
  "bayelsa",
  "benue",
  "borno",
  "cross River",
  "delta",
  "ebonyi",
  "edo",
  "ekiti",
  "enugu",
  "gombe",
  "imo",
  "jigawa",
  "kaduna",
  "kano",
  "katsina",
  "kebbi",
  "kogi",
  "kwara",
  "lagos",
  "nassarawa",
  "niger",
  "ogun",
  "ondo",
  "osun",
  "oyo",
  "plateau",
  "rivers",
  "sokoto",
  "taraba",
  "zobe",
  "zamfara",
];
