import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [showBack, SetshowBack] = useState(false);
  const [showClear, SetshowClear] = useState(true);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday today</h3>
        <List people={people} />
        {showClear && (
          <button
            onClick={() => {
              setPeople([]);
              SetshowBack(true);
              SetshowClear(false);
            }}
          >
            Clear All
          </button>
        )}

        {showBack && (
          <button
            onClick={() => {
              setPeople(data);
              SetshowBack(false);
              SetshowClear(true);
            }}
          >
            Back All
          </button>
        )}
      </section>
      <div className="footer">
        <h4>
          Created by Khadija Rejjaoui. idea from{" "}
          <a
            href="https://uidesigndaily.com/posts/sketch-birthdays-list-card-widget-day-1042"
            target="_blank"
            rel="noreferrer"
          >
            uidesigndaily.com
          </a>
        </h4>
      </div>
    </main>
  );
}

export default App;
