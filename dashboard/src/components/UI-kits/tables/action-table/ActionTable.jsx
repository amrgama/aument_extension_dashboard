import React, { useContext } from 'react'
import vector from "../../../assets/vector.webp"
import ModalButton from '../../modals/action-modal/ActionModalButton'
import DeleteButton from '../../../users/DeleteButton'
import BanButton from '../../../users/BanButton'


const ActionTable = ({tableConfig, actions}) => {

    const renderdTableHeader = tableConfig.header.map((item, i)=>{
        return <th key={i}>{item}</th>
    })

    const renderedTableRows = tableConfig.data.map((row, i)=>{
        
        const renderedTablecells = Object.entries(cell).map(([prop, value], j)=>{

            if(i === 0) {
                return (
                    <td key={j}>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={value.vector} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{value.name}</div>
                            </div>
                        </div>
                    </td>
                )
            }

            if(j === (tableConfig.body.length - 1)){
                return (
                    <td className='space-x-5'>
                        {/* <DeleteButton actionConfig={{"method": actions.delete, "param": tableConfig.data[i].user.id}} />
                        <BanButton actionConfig={{"method": actions.ban, "param": tableConfig.data[i].user.id}} /> */}
                    </td>
                )
            }

            return <td key={j}>{value}</td>
        })

        return <tr key={i}>{renderedTablecells}</tr>
    });
  return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr className=' text-base '>
                    {renderdTableHeader}
                </tr>
            </thead>
            <tbody>{renderedTableRows}</tbody>
        </table>
    </div>
  )
}

export default ActionTable