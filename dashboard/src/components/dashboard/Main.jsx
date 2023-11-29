import React from 'react'
import NormalCard from '../UI-kits/cards/NormalCard'
import SmallCard from '../UI-kits/cards/SmallCard'
import {ImUsers} from "react-icons/im";
import BigCard from '../UI-kits/cards/BigCard';

const users = {
    title: "users",
    count: 100,
    percent: "17%",
    icon: <ImUsers />
}
const Main = () => {

  return (
    <div className='grid gap-5' style={{gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`}}>
        <div className='flex flex-col justify-between gap-5'>
            <NormalCard />
            <div className='w-full flex justify-between items-center gap-3'>
                <SmallCard {...users} />
                <SmallCard {...users} />
            </div>
        </div>
        <BigCard />
    </div>
  )
}

export default Main