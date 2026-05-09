import './App.css'
import Dock from './Dock';

const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

function App() {
  return (
    <>
      <div className='dot-background'>
        <div className="custom-font">
          Welcome to my little corner <br />
          on the internet :D
        </div>
        <div className="icon-container"> 
          {projects.map((project_key) => (
            <div className="project-icons" key={project_key}> 
            </div>  
          ))}
        </div>
      </div>
      <div className="description-font">
        Hey there! I'm Aadhi and I'm a CS student at UNSW who loves turning 'what ifs' to 'here it is'. <br />
        I've shipped AI finance tools, real-time crisis dashboards, and an 8-bit game <br /> in my spare time (and the best ones are yet to ship). 
        I pick up whatever it takes to <br />get the idea out of my head and into the world, for the world.
      </div>
      <Dock />
    </>
  );
}

export default App;