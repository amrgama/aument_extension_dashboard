import React, { useEffect, useState } from 'react'
import { getUser, selectAdmin } from '../../../features/admin/adminSlice.js'
// import Lottie from 'lottie-react';
import vector from "../../../assets/vector.webp"

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import TableHead from '../../UI-kits/tables/TableHead.jsx'
import { bannedUsersActionTableHeader, deletedUsersActionTableHeader } from '../../../utils/config.js'
import TableRow from './TableRow.jsx'

const DeletedUsersActionTable = ({tableConfig, adminSelector}) => {
    
    const [data, setData] = useState([]);
    const {admin :{deletedUsers}} = useSelector(selectAdmin);
    const tableHeader = deletedUsersActionTableHeader; 
    console.log("deletedUsers", deletedUsers)
    useEffect(()=>{
    
        if(!!deletedUsers.length){
          // console.log("*".repeat(20));
          // console.log("users", users);
          setData(prev => {
            return deletedUsers.map((user)=> {
              return {
                user: {
                  id: user?.userId._id,
                  vector,
                  username: user.userId.username
                },
                company: user.userId.companyName,
                country: "Egypt",
              }
            });
          });
        }
        
      }, [deletedUsers])
    // console.log("data", data)
    const renderedTableRows = data?.map((rowData, i)=>{
        // console.log("rowData: ", rowData);
        return <TableRow 
                    key={i} 
                    header={tableHeader} 
                    rowData={rowData} 
                    banActionButton={false} 
                    deleteActionButton={true} 
                />
    })
    // console.log("bannedUsers", bannedUsers);
    // if(!bannedUsers.length) {
    //   console.log("length", bannedUsers.length)
    //   return;
    // }

    return (
    <div className="overflow-auto" style={{maxHeight: "480px"}}>
        <table className="table">
            {/* head */}
            <thead>
                <TableHead header={tableHeader} />
            </thead>
            <tbody>
                {renderedTableRows}
            </tbody>
        </table>
    </div>
  )
}

export default DeletedUsersActionTable