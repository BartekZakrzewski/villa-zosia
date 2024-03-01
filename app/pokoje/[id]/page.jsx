"use client"

import React, { useEffect, useState } from 'react'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '../../../styles/globals.css'
import styles from '../../../styles/Room.module.css'

const Room = ({ params }) => {
    const [room, setRoom] = useState([]);
    
    async function getRoom(pageSlug) {
        const res = await fetch(`https://villazosia.pockethost.io/api/collections/rooms/records?filter=(slug='${pageSlug}')`)
        const data = await res.json()
        console.log(data)
        setRoom(data.items);
    }

    useEffect(() => {
        getRoom(params.id)
    }, [])

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>{room[0]?.title}</h1>
                <div className={styles.art}>
                    <img src={`https://villazosia.pockethost.io/api/files/9bumucatft976cw/${room[0]?.id}/${room[0]?.photo}`} className={styles.img} />
                    <p className={styles.paragraph}>
                        {room[0]?.description}
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Room
