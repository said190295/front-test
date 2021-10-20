import React from "react";
import Message from "./message/Message";
import Contact from "./contact/Contact";
import "./adminHome.css";

export default function Home() {
  return (
      <div className="homeWidget2">
        <Contact/>
      <Message />
    </div>
      );
}
