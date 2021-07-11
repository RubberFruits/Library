import Book from './Book/Book'
import style from './BookShelfes.module.scss'
import { useState } from 'react'
import EditForm from '../EditForm/EditForm'

const BookShelfes = ({ setBook, clickedBook, editedBook, setEditedBook }) => {

   const [sort, setSort] = useState(null)
   const sorting = field => {
      return (a, b) => a[field] > b[field] ? 1 : -1;
   }

   const data = [
      { author: 'Шекспир', fullAuthor: 'Уильям Шекспир', name: 'Гамлет', pages: 640, year: 1603, color: '#717171' },
      { author: 'Вальтер', fullAuthor: 'Вальтер Скотт', name: 'Гай Мэннеринг', pages: 421, year: 1815, color: '#fd0166' },
      { author: 'Пелевин', fullAuthor: 'Виктор Олегович Пелевин', name: 'Чапаев и Пустота', pages: 212, year: 1996, color: '#6100ed' },
      { author: 'Вальтер', fullAuthor: 'Вальтер Скотт', name: 'Айвенго', pages: 1040, year: 1819, color: '#fd0166' },
      { author: 'Толстой', fullAuthor: 'Лев Толстой', name: 'Война и мир', pages: 1540, year: 1867, color: '#13c9bd' },
      { author: 'Достоевский', fullAuthor: 'Фёдор Достоевский', name: 'Преступление и наказание ', pages: 366, year: 1866, color: '#333' }
   ]

   const [books, setAllBooks] = useState(data)

   const deleteBook = name => {
      if (window.confirm(`Вы уверены, что хотите удалить книгу ${name}?`)) {
         setAllBooks(books.filter(book => book.name !== name))
      }
      return
   }

   const editBook = (name, author) => {
      const newArray = books
      const retextBook = newArray.find(item => item.name === editedBook.name)
      retextBook.author = author
      retextBook.name = name
      setAllBooks(newArray)
   }

   const createBook = (name, author) => {
      const newArray = books
      newArray.push({
         name,
         author,
         color: 'blue'
      })
      setAllBooks(newArray)
   }

   const [createMode, setCreateMode] = useState(false)

   return (
      <>
         {editedBook ? <EditForm editedBook={editedBook} isCreateMode={false} setEditedBook={setEditedBook} editBook={editBook} /> : ''}
         {createMode ? <EditForm isCreateMode={true} setCreateMode={setCreateMode} createBook={createBook} /> : ''}
         <div className={style.container}>
            <div className={style.container__title}>Ваши книги</div>
            <div className={style.container__sort} >
               Сортировка:
               <div className={style.container__sortItems}>
                  <div
                     className={`${style.container__sortAuthor} ${sort === 'author' ? style.selectedSort : ''}`}
                     onClick={() => setSort('author')}
                  >
                     По автору
                  </div>
                  <div
                     className={`${style.container__sortName} ${sort === 'name' ? style.selectedSort : ''}`}
                     onClick={() => setSort('name')}
                  >
                     По названию
                  </div>
                  <div
                     className={style.container__stopSort}
                     onClick={() => setSort('')}
                  >
                     Сброс
                  </div>
               </div>
               <div
                  onClick={() => setCreateMode(true)}
                  className={style.addBook}>Добавить книгу | +</div>
            </div>
            <div className={style.shelfes}>
               {
                  sort === '' ?
                     data.map(book => (
                        <Book
                           clickedBook={clickedBook}
                           key={book.name}
                           bookInfo={book}
                           setBook={setBook}
                           deleteBook={deleteBook}
                           setEditedBook={setEditedBook}
                        />
                     ))
                     :
                     books.sort(sorting(sort)).map(book => (
                        <Book
                           clickedBook={clickedBook}
                           key={book.name}
                           bookInfo={book}
                           setBook={setBook}
                           deleteBook={deleteBook}
                           setEditedBook={setEditedBook}
                        />
                     ))
               }
            </div>
         </div>
      </>
   )
}

export default BookShelfes
