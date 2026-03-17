import Profile from "./Profile";
import About from "./About";
import "./App.css";

function App() {
  return (
    <div>
      <Profile 
        name="Anish Desai" 
        role="Frontend Developer" 
      />

      <About 
        description="I enjoy building modern and interactive web applications using React." 
      />
    </div>
  );
}

export default App;