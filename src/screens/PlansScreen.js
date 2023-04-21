import React from "react";
import "./PlansScreen.css";

const prodcuts = [
  { service: "premium", screen: "4k + HDR" },
  { service: "basic", screen: "720P" },
  { service: "standard", screen: "1080P" },
];
function PlansScreen() {
  return (
    <div className="plansScreen">
      {prodcuts.map((prodcut) => (
        <div className="plansScreen__plan">
          <div className="plansScreen__info">
            <h5>{prodcut.service}</h5>
            <h6>{prodcut.screen}</h6>
          </div>

          <button>Subscribe</button>
        </div>
      ))}
    </div>
  );
}

export default PlansScreen;
