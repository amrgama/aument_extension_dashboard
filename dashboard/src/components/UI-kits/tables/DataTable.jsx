import React from 'react'
import vector from "../../../assets/vector.webp"

const DataTable = () => {
  return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr className=' text-base '>
                    <th>User</th>
                    <th>Country</th>
                    <th>Usage</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={vector} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">Hart Hagerty</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>United States</div>
                    </td>
                    <td>50%</td>
                </tr>
                {/* row 2 */}
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={vector} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">Hart Hagerty</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>United States</div>
                    </td>
                    <td>50%</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={vector} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">Hart Hagerty</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>United States</div>
                    </td>
                    <td>50%</td>
                </tr>
                {/* row 4 */}
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={vector} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">Hart Hagerty</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>United States</div>
                    </td>
                    <td>50%</td>
                </tr>
                {/* row 5 */}
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={vector} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">Hart Hagerty</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>United States</div>
                    </td>
                    <td>50%</td>
                </tr>
            </tbody>            
        </table>
    </div>
  )
}

export default DataTable