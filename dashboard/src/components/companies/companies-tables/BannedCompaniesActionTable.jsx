import React, { useEffect, useState } from 'react'
import { selectAdmin } from '../../../features/admin/adminSlice.js'
// import Lottie from 'lottie-react';
import vector from "../../../assets/vector.webp"
import { useSelector } from 'react-redux'
import TableHead from '../../UI-kits/tables/TableHead.jsx'
import { bannedUsersActionTableHeader } from '../../../utils/config.js'
import TableRow from './TableRow.jsx'
import { selectCompanies } from '../../../features/companies/companiesSlice.js'

const BannedCompaniesActionTable = ({tableConfig}) => {

  const {companies :{banned: bannedCompanies}} = useSelector(selectCompanies);
  
  const renderedTableRows = tableConfig.data?.map((rowData, i)=>{
      // console.log("rowData: ", rowData);
      return <TableRow 
                key={i} 
                header={tableConfig.head} 
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
                <TableHead header={tableConfig.head} />
            </thead>
            <tbody>
                {renderedTableRows}
            </tbody>
        </table>
    </div>
  )
}

export default BannedCompaniesActionTable