import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { useState } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
    
  }

  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      {/* Header at the top */}
      <div className="flex-none">
        <Header />
      </div>

      {/* Body */}
      <div className="flex-grow">
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key= {index}
              id = {index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>

      {/* Footer at the bottom */}
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}

export default App;
