import React from 'react'
import s from '../styles/CommentCard.module.css'

const CommentCard = ({userName, userComment}) => {
  return (
    <div className={s.container}>
      <h3 className={s.name}>{userName}</h3>
      <p className={s.comment}>{userComment}</p>
    </div>
  )
}

export default CommentCard
