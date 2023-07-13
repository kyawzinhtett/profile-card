import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="itw.png" alt="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Kyaw Zin Htet</h1>
      <p>
        Full-stack web developer currently working as a backend developer. When
        not coding, I like to play guitar, read books, or watch movies.
      </p>
    </div>
  );
}

function SkillList({ skill, emoji, bgColor }) {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" bgColor="#DD4B25" />
      <Skill skill="JavaScript" emoji="💪" bgColor="#F7E018" />
      <Skill skill="React" emoji="👍" bgColor="#149ECA" />
      <Skill skill="Laravel" emoji="💪" bgColor="#E8503E" />
      <Skill skill="Git and Github" emoji="👍" bgColor="#808080" />
    </div>
  );
}

function Skill({ skill, emoji, bgColor }) {
  return (
    <div className="skill" style={{ backgroundColor: bgColor }}>
      {skill} {emoji}
    </div>
  );
}

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
