import React from 'react'
import Container from '../components/Container'
import FirstHeader from '../components/typography/FirstHeader'
import AddCompanyButton from '../components/companies/AddCompanyButton'
import CompaniesTables from '../components/companies/companies-tables/CompaniesTables'

const Companies = () => {
    
  return (
    <div className="col-start-2 py-5 col-span-full bg-slate-200">
        <Container extraClasses={"md:px-4 flex flex-col h-full space-y-8"}>
          <div className="flex justify-between items-center">
            <FirstHeader text={"Companies"} />
            <AddCompanyButton />
          </div>
           <CompaniesTables />
        </Container>
    </div>
  )
}

export default Companies