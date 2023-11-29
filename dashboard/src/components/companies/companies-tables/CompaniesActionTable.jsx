import React, { useEffect, useState } from 'react'
import vector from "../../../assets/vector.webp"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import TableHead from '../../UI-kits/tables/TableHead.jsx'
import { companiesActionTableHeader } from '../../../utils/config.js'
import { getAllCompanies, selectCompanies } from '../../../features/companies/companiesSlice.js'
import DeleteCompanyWrapper from './DeleteCompanyWrapper.jsx'
import TableRow from './TableRow.jsx'

const CompaniesActionTable = ({tableConfig}) => {
    
  const renderedTableRows = tableConfig.data?.map((rowData, i)=>{
    // console.log("rowData: ", rowData);

    return <TableRow 
              key={rowData.company.id} 
              header={tableConfig.head} 
              rowData={rowData}
            />
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

export default CompaniesActionTable