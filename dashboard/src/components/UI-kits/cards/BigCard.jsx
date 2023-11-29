import React from 'react'
import ColumnPlot from '../charts/ColumnPlot'

const BigCard = () => {
    return (
        <div className="card w-full bg-white shadow-xl">
            <div className="card-body">
                <div className='flex flex-col justify-between gap-2 mb-5'>
                    <h2 className="card-title inline-flex text-dark text-2xl font-semibold font-mono">Trafic</h2>
                    <span className='text-lg text-light font-mono'>January 01, 2021 - December 31, 2021</span>
                </div>
                <ColumnPlot />
            </div>
        </div>
    )
}

export default BigCard