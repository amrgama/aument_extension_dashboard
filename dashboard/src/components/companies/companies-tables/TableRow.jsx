import React, { useEffect, companyef, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import { selectCompanies } from '../../../features/companies/companiesSlice';
import DeleteCompanyWrapper from './DeleteCompanyWrapper';
import BanCompanyWrapper from './BanCompanyWrapper';
import UnbanCompanyWrapper from './UnbanCompanyWrapper';
import UndeleteCompanyWrapper from './UndeleteCompanyWrapper';

const TableRow = ({header, rowData, banActionButton=true, deleteActionButton=true}) => {
    const rowRef = useRef();
    const {companies: {deleted: deletedCompanies, banned: bannedCompanies}} = useSelector(selectCompanies);
    const [isDeleted, setIsDeleted] = useState(deletedCompanies.indexOf(rowData.company.id) > 0);
    const [isBanned, setIsBanned] = useState(bannedCompanies.indexOf(rowData.company.id) > 0);
    const [renderUnbanButton, setRenderUnbanButton] = useState(false);

    useEffect(()=>{
        bannedCompanies?.forEach((bannedCompany)=>{
            // console.log(bannedCompany.companyId._id === rowData.company.id, bannedCompany.period, banneddscompany.period === "byMe");
            if(bannedCompany.companyId._id === rowData.company.id && bannedCompany.period !== "byMe") setIsBanned(true);
            if(bannedCompany.companyId._id === rowData.company.id && bannedCompany.period === "byMe" && !isDeleted) {
                setIsBanned(true);
                setRenderUnbanButton(true);
            }
        })
    }, [bannedCompanies])

    const renderedTablecells = header.map((head, j)=>{
       
        if(head === "company") {
            return (
                <td key={j}>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={rowData[head].vector} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{rowData[head].companyName}</div>
                        </div>
                    </div>
                </td>
            )
        }
        else if(head === "action"){
            
            return (
                <td key={j} className='space-x-5 xl:space-x-3'>
                    {
                        (deleteActionButton && !isDeleted) &&
                        <DeleteCompanyWrapper 
                            companyId={rowData.company.id}
                        />
                    }
                    {
                        (deleteActionButton && isDeleted) &&
                        <UndeleteCompanyWrapper 
                            companyId={rowData.company.id}
                            setIsDeleted={setIsDeleted}
                        />
                    }
                    {
                        banActionButton && !renderUnbanButton &&
                        <BanCompanyWrapper 
                            companyId={rowData.company.id}
                            isBanned={isBanned}
                            isDeleted={isDeleted}
                            setIsBanned={setIsBanned}
                        />
                    }
                    {
                        banActionButton && renderUnbanButton &&
                        <UnbanCompanyWrapper
                            companyId={rowData.company.id}
                        />
                    }
                </td>
            )
        }
        else{
            return <td key={j}>{rowData[head]}</td>
        }
    })

    useEffect(()=>{
        console.log("deletedCompanies: ", deletedCompanies, "isDeleted: ", isDeleted);
        deletedCompanies.forEach(deletedcompany =>{
            console.log("deletedRow", deletedcompany);
            if(deletedcompany.companyId._id === rowData.company.id) setIsDeleted(true);
        })
    }, [deletedCompanies, isDeleted])
  
    return (
        <tr ref={rowRef} className={`text-dark ${(isBanned)? "bg-yellow-100/30": ""} ${(isDeleted)? "bg-red-100/30": ""}`}>{renderedTablecells}</tr>
    )
}

export default TableRow