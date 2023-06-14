import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
	<div className="card">
		<Avatar />
		<div className="description">
			<Description />
		</div>
		<div className="skill-list">
			<Skill name="HTML + CSS" color="lightblue" />
			<Skill name="Javascript" color="lightcoral" />
			<Skill name="Node" color="lightgreen" />
			<Skill name="Git + Github" color="pink" />
		</div>
	</div>
);

const Avatar = () =>
  <img className='avatar' src="avatar.png" alt="Raptor" srcset="" />

const Description = () => 
  <div>
    <h1>hallwayRaptor</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat! Consequuntur velit molestias corrupti eligendi dolore repellendus, repellat deleniti totam.</p>
  </div>

const Skill = (props) => (
  <div className="skill" style={{backgroundColor: props.color}}><span>{props.name}</span></div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
