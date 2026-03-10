import "./styles.css";

export default function App() {
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
  return <img className="avatar" src="./plamen-dev.png" alt="Plamen dev" />;
}

function Intro() {
  return (
    <div>
      <h1>Plamen Kovandzhiev</h1>
      <p>
        Full-satck web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" color="Blue" emoji="💪" />
      <Skill skill="JavaScript" color="Yellow" emoji="💪" />
      <Skill skill="Web Design" color="LightGreen" emoji="💪" />
      <Skill skill="Git and GitHub" color="Red" emoji="👍" />
      <Skill skill="React" color="Cyan" emoji="💪" />
      <Skill skill="Svelte" color="Red" emoji="👶" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
