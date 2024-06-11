import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, editNote, deleteNote, setNoteToEdit, noteToEdit }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setNoteToEdit={setNoteToEdit}
          deleteNote={deleteNote}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} noteToEdit={noteToEdit} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Example Note',
      desc: 'Below is an example of a note that you can create. You can write short or long notes. For long notes, the "Read More" feature will be activated.',
    },
  ]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
    setCurrentPage('home');
  };

  const editNote = (id, title, desc) => {
    setNoteList(
      noteList.map(note =>
        note.id === id ? { ...note, title, desc } : note
      )
    );
    setCurrentPage('home');
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter(note => note.id !== id));
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      setNoteToEdit={setNoteToEdit}
      noteToEdit={noteToEdit}
    />
  );
};

export default App;
