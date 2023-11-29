import React from 'react'
import Container from '../components/Container'
import Main from '../components/dashboard/Main'
import TablesSection from '../components/dashboard/TablesSection'

const Dashboard = () => {
  return (
    <div className="col-start-2 py-12 col-span-full bg-slate-200">
        <Container extraClasses={"md:px-4 space-y-12"}>
          <Main />
          <TablesSection />
        </Container>
    </div>
  )
}

export default Dashboard