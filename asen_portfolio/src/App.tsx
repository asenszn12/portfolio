import './App.css'

const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

function App() {
  return (
    <>
  <div className="custom-font">
    Welcome to my little corner <br />
    on the internet :D
    </div>
    <div className="icon-container"> 
    {projects.map((project) => (
      <div className="project-icons" key={project}> 
      </div>  
    ))}
    </div>
    </>
  );
}

export default App
// 1. icons of projects and about me section 
// 2. overview of who i am 
// 3. hovering ... animation for reaching out, linkedin, github, x? 