import React, { useEffect, useState } from 'react'
import { selectAdmin } from '../../../features/admin/adminSlice.js'
// import Lottie from 'lottie-react';
import vector from "../../../assets/vector.webp"
import { useSelector } from 'react-redux'
import TableHead from '../../UI-kits/tables/TableHead.jsx'
import { bannedUsersActionTableHeader } from '../../../utils/config.js'
import TableRow from './TableRow.jsx'

const BannedUsersActionTable = ({tableConfig, adminSelector}) => {
    const [data, setData] = useState([]);
    const {admin :{bannedUsers}} = useSelector(selectAdmin);
    const tableHeader = bannedUsersActionTableHeader; 
    console.log("bannedUsers", bannedUsers)
    useEffect(()=>{
    
        if(!!bannedUsers.length){
          // console.log("*".repeat(20));
          // console.log("users", users);
          setData(prev => {
            return bannedUsers.map((user)=> {
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
        
      }, [bannedUsers])
    // console.log("data", data)
   
    const renderedTableRows = data?.map((rowData, i)=>{
        // console.log("rowData: ", rowData);
        return <TableRow 
                  key={i} 
                  header={tableHeader} 
                  rowData={rowData} 
                  banActionButton={true} 
                  deleteActionButton={false} 
                />
    })
   
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

export default BannedUsersActionTable