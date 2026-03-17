import Hello from "./Hello";

import Student from "./Student";

import Button from "./Button";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import { useState } from "react";

import Message from "./Message";

import ProfileCard from "./ProfileCard";

function App() {

  const [page, setPage] = useState("Home");

  const message = "Study React Daily";

  return (
    <div>

      <div>
        {/* Exercise 1: My First Component */}
        <Hello />
      </div>

      <div>
        {/* Exercise 2: Passing Props (Name Card) */}
        <Student name="Anish" className="AIML" />
      </div>
      
      <div>
        <h3>Exercise 3: Reusable Button</h3>
        {/* Exercise 3: Reusable Button */}
        <Button text="Login" />
        <Button text="Register" />
        <Button text="Logout" />
        <hr></hr>
      </div>

      <div>
        <h3>Exercise 4: Website Parts</h3>
        {/* Exercise 4: Website Parts */}
        <Header />
        <Content />
        <Footer />
        <hr></hr>
      </div>

      <div>
        <h3>Exercise 5: SPA Thinking (No Reload)</h3>
        {/* Exercise 5: SPA Thinking (No Reload) */}
        <button onClick={() => setPage("Home")}>Home</button>
        <button onClick={() => setPage("About")}>About</button>

        <h2>
          {page === "Home" ? "This is Home Page" : "This is About Page"}
        </h2>
        <hr></hr>
      </div>

      <div>
        <h3>Exercise 6: Parent → Child Message</h3>
        {/* Exercise 6: Parent → Child Message */}
        <Message text={message} />
        <hr></hr>
      </div>

      <div>
        <h3>Exercise 7: My Profile Card</h3>
        {/* Exercise 7: My Profile Card */}
        <ProfileCard 
          name="Anish" 
          age="19" 
          subject="WP Lab" 
        />
        <hr></hr>
      </div>
      
    </div>
  );
}

export default App;

