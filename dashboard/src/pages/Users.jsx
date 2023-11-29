import React from 'react'
import Container from '../components/Container'
import FirstHeader from '../components/typography/FirstHeader'
import {BiUserPlus} from "react-icons/bi"
import AddUserButton from '../components/users/AddUserButton'
import UsersTables from '../components/users/users-tables/UsersTables'

const Users = () => {
  return (
    <div className="col-start-2 py-5 col-span-full bg-slate-200">
        <Container extraClasses={"md:px-4 flex flex-col h-full space-y-8"}>
            <div className="flex justify-between items-center">
              <FirstHeader text={"Users"} />
              <AddUserButton />
            </div>
            <UsersTables />
        </Container>
    </div>
  )
}

export default Users