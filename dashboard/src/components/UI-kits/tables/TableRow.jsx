import React, { useEffect, useRef, useState } from 'react'
import DeleteUserWrapper from '../../users/users-tables/DeleteUserWrapper'
import BanUserWrapper from '../../users/users-tables/BanUserWrapper'
import { useSelector } from 'react-redux';
import { selectAdmin } from '../../../features/admin/adminSlice';
import UnbanUserWrapper from '../../users/users-tables/UnbanUserWrapper';

const TableRow = ({header, rowData, banActionButton=true, deleteActionButton=true}) => {
    const rowRef = useRef();
    const {admin: {deletedUsers, bannedUsers}} = useSelector(selectAdmin);
    const [isDeleted, setIsDeleted] = useState(false);
    const [disable, setDisable] = useState(false);
    const [renderUnbanButton, setRenderUnbanButton] = useState(false);

    useEffect(()=>{
        bannedUsers?.forEach((bannedUser)=>{
            // console.log(bannedUser.userId._id === rowData.user.id, bannedUser.period, banneddsUser.period === "byMe");
            if(bannedUser.userId._id === rowData.user.id && bannedUser.period !== "byMe") setDisable(true);
            if(bannedUser.userId._id === rowData.user.id && bannedUser.period === "byMe") setRenderUnbanButton(true);
        })
    }, [])

    const renderedTablecells = header.map((head, j)=>{
        // console.log(`${head}: ${(head === "action")? rowData[head].isBanned : rowData[head]}`)
        // console.log(`j= ${j}, totalNum= ${(iterableRow.length - 1)}`)
        if(head === "user") {
            return (
                <td key={j}>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={rowData[head].vector} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{rowData[head].username}</div>
                        </div>
                    </div>
                </td>
            )
        }
        else if(head === "action"){
            
            return (
                <td key={j} className='space-x-5 xl:space-x-3'>
                    {
                        deleteActionButton &&
                        <DeleteUserWrapper 
                            userId={rowData.user.id}
                        />
                    }
                    {
                        banActionButton && !renderUnbanButton &&
                        <BanUserWrapper 
                            userId={rowData.user.id}
                            disable={disable}
                            setDisable={setDisable}
                        />
                    }
                    {
                        banActionButton && renderUnbanButton &&
                        <UnbanUserWrapper 
                            userId={rowData.user.id}
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
        deletedUsers.forEach(deletedUser =>{
            console.log("deletedRow", deletedUser);
            if(deletedUser.userId === rowData.user.id) setIsDeleted(true);
        })
    }, deletedUsers, isDeleted)
  
    if(isDeleted) return;

    return (
        <tr ref={rowRef} className='text-dark'>{renderedTablecells}</tr>
    )
}

export default TableRow