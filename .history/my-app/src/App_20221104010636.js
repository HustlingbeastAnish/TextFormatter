// // import logo from "./logo.svg";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import React, { useState } from "react";
// import Alert from "./components/Alert";
// import "./App.css";
// import AboutUs from "./components/AboutUs";

// function App() {
//   // return <Navbar title="AnishTuts" />;
//   const [mode, setmode] = useState("light");

//   const [alert, setalert] = useState(null);

//   const ShowAlert = (message, type) => {
//     setalert({
//       msg: message,
//       type: type,
//     });

//     setTimeout(() => {
//       setalert(null);
//     }, 1500);
//   };
//   // Creating the function for dark Mode
//   const ToggleMode = () => {
//     if (mode === "light") {
//       setmode("dark");
//       document.body.style.backgroundColor = "black";
//       document.body.style.color = "white";
//       ShowAlert("Dark Mode has been Enabled", "success");
//     } else {
//       setmode("light");
//       document.body.style.backgroundColor = "white";
//       document.body.style.color = "black";
//       ShowAlert("Dark Mode has been Disabled", "success");
//     }
//   };

//   return (
//     <>
//       <Navbar mode={mode} ToggleMode={ToggleMode} />
//       <Alert alert={alert} />
//       <TextForm mode={mode} ShowAlert={ShowAlert} />
//       <AboutUs />
//     </>
//   );
// }

// export default App;

import React from "react";

function App() {
  return (
    <div>
      <h2>Hello Sup!</h2>
    </div>
  );
}

export default App;
