import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
	{
		skill: "HTML + CSS",
		level: "advanced",
		color: "#D699B6",
	},
	{
		skill: "Javascript",
		level: "intermediate",
		color: "#E69875",
	},
	{
		skill: "Node",
		level: "intermediate",
		color: "#DBBC7F",
	},
	{
		skill: "React",
		level: "beginner",
		color: "#E67E80",
	},
	{
		skill: "Git + Github",
		level: "intermediate",
		color: "#83C092",
	},
];

const App = () => (
	<div className="card">
		<Avatar />
		<div className="description">
			<Description />
		</div>
		<div className="skill-list">
			{skills.map((skill) => (
				<Skill skill={skill.skill} color={skill.color} level={skill.level} />
			))}
		</div>
	</div>
);

const Skill = ({ skill, color, level }) => {
	const levelObj = {
		advanced: "🌳",
		intermediate: "🌿",
		beginner: "🌱",
	};

	return (
		<div className="skill" style={{ backgroundColor: color }}>
			<span>{skill}</span>
			<span>{`${levelObj[level]}`}</span>
		</div>
	);
};

const Avatar = () => (
	<img className="avatar" src="avatar.png" alt="Raptor" srcset="" />
);

const Description = () => (
	<div>
		<h1>hallwayRaptor</h1>
		<p>
			Full-stack web developer. When not coding I like to produce synthwave
			music, play fighting games, and exercise.
		</p>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
