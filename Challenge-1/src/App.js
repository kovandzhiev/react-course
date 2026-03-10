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

function Avatar(props) {
  return (
    <div className="avatar">
      <img src="./plamen-dev.png" alt="Plamen dev" />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-satck web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skillList">
      <Skill name="HTML+CSS" backgroundColor="Blue" symbol="💪" />
      <Skill name="JavaScript" backgroundColor="Yellow" symbol="💪" />
      <Skill name="Web Design" backgroundColor="LightGreen" symbol="💪" />
      <Skill name="Git and GitHub" backgroundColor="Red" symbol="👍" />
      <Skill name="React" backgroundColor="Cyan" symbol="💪" />
      <Skill name="Svelte" backgroundColor="Red" symbol="👶" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.name} {props.symbol}
    </div>
  );
}
