"use client"

import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase'
import RoomCard from '../../components/roomCard'
import Header from '../../components/header'
import Footer from '../../components/footer'
import '../../styles/globals.css'
import styles from '../../styles/Pokoje.module.css'



const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    async function getRooms() {
        const db = new PocketBase('https://villazosia.pockethost.io')
        const data = await db.collection('rooms').getList(1, 30)
        setRooms(data.items)
    }
    
    useEffect(() => {
        getRooms()
    }, [])

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                {rooms?.map(room => {
                return <RoomCard key={room.id} room={room} />
                })}
            </main>
            
            <Footer />
        </div>
    )
}

export default Rooms
