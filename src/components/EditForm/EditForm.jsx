import style from './EditForm.module.scss'
import { useState } from 'react'

const EditForm = ({ editedBook, isCreateMode, setCreateMode, setEditedBook, editBook, createBook }) => {

   const [nameInput, setNameInput] = useState(editedBook?.name)
   const [authorInput, setAuthorInput] = useState(editedBook?.author)

   const submitHandler = event => {
      event.preventDefault()
      editBook(nameInput, authorInput)
      setEditedBook()
      setNameInput()
      setAuthorInput()
   }

   const submitCreateHandler = event => {
      event.preventDefault()
      createBook(nameInput, authorInput)
      setCreateMode()
      setNameInput()
      setAuthorInput()
   }

   return (
      !isCreateMode ?
         <div
            id='main'
            onClick={(e) => {
               if (e.target.id === 'main') {
                  setEditedBook()
               }
            }}
            className={style.form_container}>
            <form onSubmit={(e) => submitHandler(e)} className={style.form}>
               <div className={style.form__title}>Редактирование книги</div>
               <div className={style.form__inputAuthor}>Автор:</div>
               <input
                  value={authorInput}
                  className={style.form__input}
                  required
                  onChange={(e) => setAuthorInput(e.currentTarget.value)}
               />
               <div className={style.form__inputName}>Название:</div>
               <input
                  value={nameInput}
                  className={style.form__input}
                  required
                  onChange={(e) => setNameInput(e.currentTarget.value)}
               />
               <button type='submit' className={style.form__sumbitButton}>Подтвердить</button>
            </form>
         </div>
         :
         <div
            className={style.form_container}
            id='main'
            onClick={(e) => {
               if (e.target.id === 'main') {
                  setCreateMode()
               }
            }}
         >
            <form
               onSubmit={(e) => submitCreateHandler(e)} className={style.form}>
               <div className={style.form__title}>Создание книги</div>
               <div className={style.form__inputAuthor}>Введите автора:</div>
               <input
                  value={authorInput}
                  className={style.form__input}
                  required
                  onChange={(e) => setAuthorInput(e.currentTarget.value)}
               />
               <div className={style.form__inputName}>Введите название:</div>
               <input
                  value={nameInput}
                  className={style.form__input}
                  required
                  onChange={(e) => setNameInput(e.currentTarget.value)}
               />
               <button type='submit' className={style.form__sumbitButton}>Подтвердить</button>
            </form>
         </div>
   )
}

export default EditForm
