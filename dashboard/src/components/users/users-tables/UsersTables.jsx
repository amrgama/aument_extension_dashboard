import React, { useEffect } from 'react'
import UsersActionTable from './UsersActionTable'
import BannedUsersActionTable from './BannedUsersActionTable'
import AddUserFormContainer from './AddUserFormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, selectAdmin } from '../../../features/admin/adminSlice'
import SmallCard from '../../UI-kits/cards/SmallCard'
import DeletedUsersActionTable from './deletedUsersActionTable'
import EmptyTable from '../../UI-kits/tables/EmptyTable'
import { bannedUsersActionTableHeader, deletedUsersActionTableHeader, usersActionTableHeader } from '../../../utils/config'
import SecondHeader from '../../typography/SecondHeader'
import SkeletonTable from '../../companies/skeleton/SkeletonTable'
import Lottie from 'lottie-react'
import notFoundDataAnimation from "../../../assets/notFoundData.json"
import { toast } from 'react-toastify'

// import ActionTable from '../../UI-kits/tables/action-table/ActionTable'
// import DeleteButton from '../DeleteButton'
// import BanButton from '../BanButton'

const UsersTables = () => {
  // const {admin :{bannedUsers, deletedUsers}, isLoading, isSuccess} = useSelector(selectAdmin);
  const dispatch = useDispatch();
  const {admin :{users, bannedUsers, deletedUsers}, isLoading, isSuccess, isError, message} = useSelector(selectAdmin);
  // console.log("bannedUsers", bannedUsers)
  // const total_users = {
  //   title: "total users",
  //   count: 100,
  //   extraClasses: "col-start-1 col-span-2 xl:col-start-7 xl:col-span-1 row-start-4 xl:row-start-auto row-span-1 !w-full !bg-primary"
  // }
  // const banned_users = {
  //   title: "banned users",
  //   count: 100,
  //   extraClasses: "col-start-3 col-span-2 xl:col-start-7 xl:col-span-1 row-start-4 xl:row-start-auto row-span-1 !w-full !bg-yellow-300"
  // }
  // const deleted_users = {
  //   title: "deleted users",
  //   count: 100,
  //   extraClasses: "col-start-5 col-span-2 xl:col-start-7 xl:col-span-1 row-start-4 xl:row-start-auto row-span-1 !w-full !bg-red-300"
  // }

  useEffect(()=>{
    
    if(!isLoading && !isSuccess && !isError){
      dispatch(getUser("amr"));
    }
    if(!isLoading && isSuccess){
      console.log("users: ", users);
    }
    if(isError && !!message){
      toast.error(message);
    }
  }, [users, isLoading, isSuccess, isError]);
  // if(!isLoading && isSuccess){
  //   console.log("users: ", users);
  // }
  return (
    <div className='flex-1 grid gap-8'>
      {
        (!!!users.length && !isLoading && isSuccess)?
          <div className='h-full flex flex-col'>
            <span className="block text-center text-3xl text-slate-400">There are not users yet.</span>
            <Lottie animationData={notFoundDataAnimation} loop={true} style={{maxHeight: "525px"}} />
          </div>
        :
          <>
            <div className="grid gap-5"  style={{gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gridTemplateRows: "repeat(auto-fit, minmax(100px, 120px))"}}>
              <div className='row-start-1 row-span-4 col-start-1 col-span-full xl:col-span-6 bg-white py-4 px-7 rounded-2xl shadow-lg'>
                <SecondHeader text={"Users"} />
                {
                  (isLoading && !isSuccess && !isError) &&
                  <SkeletonTable tableConfig={{head: usersActionTableHeader}} />
                }
                {
                  (!!users.length && !isLoading && isSuccess) &&
                  <UsersActionTable tableConfig={{head: usersActionTableHeader, data: [...users]}} />
                }
              </div>
            </div>
            <div className="grid grid-cols-6 gap-8 h-fit"  style={{gridTemplateRows: "repeat(auto-fit, minmax(100px, 120px))"}}>
              <div className='row-start-auto row-span-3 col-start-1 col-span-full xl:col-span-3 xl:row-start-2 bg-white p-8 rounded-2xl shadow-lg'>
                <SecondHeader text={"Banned Users"} />
                {
                  (isLoading && !isSuccess && !isError) &&
                  <SkeletonTable tableConfig={{head: bannedUsersActionTableHeader}} />
                }
                {
                  (!!bannedUsers.length && !isLoading && isSuccess)?
                    <BannedUsersActionTable />
                  :
                    <EmptyTable tableConfig={{head: bannedUsersActionTableHeader}}/>
                }        
              </div>
              
              <div className='row-start-auto row-span-3 col-start-1 xl:col-start-4 col-span-full xl:col-span-3 xl:row-start-2 bg-white p-8 rounded-2xl shadow-lg'>
                <SecondHeader text={"Deleted Users"} />
                {
                  (isLoading && !isSuccess && !isError) &&
                  <SkeletonTable tableConfig={{head: deletedUsersActionTableHeader}} />
                }
                {
                  (!!deletedUsers.length && !isLoading && isSuccess)?
                    <DeletedUsersActionTable />
                  :
                    <EmptyTable tableConfig={{head: deletedUsersActionTableHeader}}/>
                }
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default UsersTables