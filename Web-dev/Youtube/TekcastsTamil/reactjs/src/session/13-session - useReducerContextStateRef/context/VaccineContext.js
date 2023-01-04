import React from "react";

const VaccineContext = React.createContext({
  registrants: [
    {
      name: "Nishanth",
      date: "12 Jul 2014",
      vaccine: "Sputnik",
    },
    {
      name: "Yalini",
      date: "21 Jul 2014",
      vaccine: "Sputnik",
    },
    {
      name: "Sandhya",
      date: "24 Jul 2014",
      vaccine: "Sputnik",
    },
  ],
});
export default VaccineContext;
