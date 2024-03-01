import React from 'react'
import styles from '../styles/RoomCard.module.css'

const RoomCard = ({room}) => {
  return (
    <div className={styles.roomCard}>
        <img src={`https://villazosia.pockethost.io/api/files/9bumucatft976cw/${room.id}/${room.photo}`} className={styles.img} alt={room.id} />
        <div className={styles.roomContainer}>
            <h2 className={styles.roomTitle}>{room.title}</h2>
            <div className={styles.nPeople}>{room.n_people}</div>
            <a href={`/pokoje/${room.slug}`} className={styles.btn}>Więcej</a>
        </div>
    </div>
  )
}

export default RoomCard
