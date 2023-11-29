import React, { useEffect, useState } from 'react'
import { getUser, selectAdmin } from '../../../features/admin/adminSlice.js'
// import Lottie from 'lottie-react';
import vector from "../../../assets/vector.webp"

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import TableHead from '../../UI-kits/tables/TableHead.jsx'
import { usersActionTableHeader } from '../../../utils/config.js'
import TableRow from './TableRow.jsx'

const UsersActionTable = ({tableConfig}) => {
    const [data, setData] = useState([]);
    // const dispatch = useDispatch();
    // const {admin :{users}, isLoading, isSuccess, isError, message} = useSelector(selectAdmin);
    // console.log("tableConfig in UsersActionTable", tableConfig);
    // const tableHeader = usersActionTableHeader; 
    
    // useEffect(()=>{
    
        // if(!isLoading && !isSuccess && !isError){
        //   dispatch(getUser("amr"));
        // }
    
        // if(isError && !!message){
        //   toast.error(message);
        // }

        // console.log("isSuccess: "+ isSuccess, "   users: "+ users);
        // if(isSuccess && !!users.length){
          useEffect(()=>{

            setData(prev => {
              return tableConfig.data.map((user)=> {
                return {
                  user: {
                    id: user._id,
                    vector,
                    username: user.username
                  },
                  company: user.companyName,
                  country: "Egypt",
                  usage: "50%",
                }
              });
            });
          },[]);
        // }
        
      // }, [users, isLoading, isSuccess, isError, message])
    // console.log("data", data)
  
    const renderedTableRows = data?.map((rowData, i)=>{
      console.log("rowData: ", rowData);
      return <TableRow key={i} header={tableConfig.head} rowData={rowData} />
    })

    return (
    <div className="overflow-auto" style={{maxHeight: "404px"}}>
        <table className="table">
            {/* head */}
            <thead>
                <TableHead header={tableConfig.head} />
            </thead>
            <tbody>
                {renderedTableRows}
            </tbody>
        </table>
    </div>
  )
}

export default UsersActionTable