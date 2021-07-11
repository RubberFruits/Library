import style from './FullInfo.module.scss'
const FullInfo = ({ clickedBook }) => {
   return (
      <div className={`${style.container} ${style.modalContainer}`}>
         <div className={style.container__title}>Информация о книге</div>
         <div className={style.container__info}>
            {
               clickedBook === null ? <div className={style.container__infoDescription}>Кликните по книге, чтобы увидеть описание</div>
                  : (
                     <div className={style.container__infoFullInfo}>
                        <p className={style.container__infoFullIngo_item}><u>Автор:</u><br />{clickedBook.author}</p>
                        <p className={style.container__infoFullIngo_item}><u>Название книги:</u><br />{clickedBook.name}</p>
                        <p className={style.container__infoFullIngo_item}><u>Год издания:</u><br />{clickedBook.year}</p>
                        <p className={style.container__infoFullIngo_item}><u>Количество страниц:</u><br />{clickedBook.pages}</p>
                     </div>
                  )
            }
         </div>
      </div>
   )
}

export default FullInfo
