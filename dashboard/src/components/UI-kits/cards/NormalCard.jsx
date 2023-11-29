import React from 'react'
import GradientsAreaPlot from '../charts/GradientsAreaPlot'

const NormalCard = () => {
  return (
    <div className="card w-full bg-white shadow-xl">
        <div className="card-body">
            <div className='flex justify-between gap-2'>
                <h2 className="card-title inline-flex me-">Total Profite</h2>
                <span className='text-xl text-secondary font-semibold font-mono'>$1000</span>
            </div>
            <div className='text-light text-xl font-semibold font-mono mb-5'>
                2023
            </div>
            <div style={{height: "240px"}}>
                <GradientsAreaPlot />
            </div>
        </div>
    </div>
  )
}

export default NormalCard