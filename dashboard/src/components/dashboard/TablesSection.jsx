import React from 'react'
import Container from '../Container'
import DataTable from '../UI-kits/tables/DataTable'

const TablesSection = () => {
  return (
    <section className=''>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-white p-8 rounded-2xl">
            <DataTable />
            <DataTable />
        </div>
    </section>
  )
}

export default TablesSection