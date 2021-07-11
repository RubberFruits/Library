import style from './Book.module.scss'

const Book = ({ bookInfo, setBook, clickedBook, deleteBook, setEditedBook }) => {

   const onSetBook = (event) => {
      const settedBook = {
         name: bookInfo.name,
         author: bookInfo.fullAuthor,
         pages: bookInfo.pages,
         year: bookInfo.year
      }
      setBook(null)
      setBook(settedBook)
   }


   const isClickedBook = clickedBook?.name === bookInfo.name

   return (
      <div className={`${style.book_container} ${isClickedBook ? style.clickedBookContainer : ''}`}>
         <div
            className={`${style.book} ${isClickedBook ? style.clickedBook : ''}`}
            style={{ backgroundColor: `${bookInfo.color}` }}
            onClick={(event) => onSetBook(event)}
         >
            <div
               className={`${style.author} ${isClickedBook ? style.clickedBook__author : ''}`}
            >{isClickedBook ? bookInfo.fullAuthor : bookInfo.author}</div>
            <div
               className={`${style.name} ${isClickedBook ? style.clickedBook__name : ''}`}
            >{bookInfo.name}</div >
         </div>
         <div
            className={style.deleteBook}
            onClick={() => deleteBook(bookInfo.name)}
         />
         <div
            className={style.editBook}
            onClick={() => setEditedBook(bookInfo)}
         />
      </div >
   )
}

export default Book
