import BookShelfes from './components/BookShelfes/BookShelfes'
import FullInfo from './components/FullInfo/FullInfo'
import style from './App.module.scss'
import { useState } from 'react'

function App() {

  const [book, setBook] = useState(null)

  const [editedBook, setEditedBook] = useState()

  return (
    <div className={style.container}>
      <BookShelfes setBook={setBook} clickedBook={book} editedBook={editedBook} setEditedBook={setEditedBook} />
      <FullInfo clickedBook={book} />
    </div>
  );
}

export default App;
