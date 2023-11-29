import React from 'react'
import Container from '../Container'
import PriceCard from './PriceCard'
import person from "../../assets/icons8-person-64.png"
import team from "../../assets/icons8-people-100.png"

const pricePlan = {
    personal: {
        title:"personal",
        icon: <img src={person} className='w-full w-full object-cover object-center' />,
        price: {
            monthly: 20,
            yearly: 200,
        },
        features: [
            "Dynamic auto fill",
            "Copy & past",
            "Auto selection"
        ]
    },
    company: {
        title:"company or team",
        icon: <img src={team} className='w-full w-full object-cover object-center' />,
        price: {
            monthly: 10,
            yearly: 100,
        },
        features: [
            "Dynamic auto fill",
            "Copy & past",
            "Auto selection",
            "Pick your theme",
            "Dashboard"
        ]
    },
    allFeatures: [
        "Dynamic auto fill",
        "Copy & past",
        "Auto selection",
        "Pick your theme",
        "Dashboard"
    ]
}

const style= {
    background: "#3e606f",
    background: "-webkit-linear-gradient(0deg, #3e606f 0%, #12fff7 100%)",
    background: "linear-gradient(0deg, #3e606f 0%, #12fff7 100%)"
}
const Pricing = () => {
  return (
    <section className="py-20 bg-green-50/50">
        <Container>
            <div className="flex flex-col mx-auto text-center mb-10">
                <h3 className="text-3xl font-daysOne text-dark text-center leading-loose mb-5">Pricing</h3>
                <p className="text-dark text-lg ">
                    Simple pricing, massive results.<br/>
                    Save hours of time every day for <strong className='text-red-400 font-bold'>$1 a day.</strong>
                </p>
            </div>
            <div className="flex justify-center gap-5">
                <PriceCard plan={pricePlan.personal} allFeatures= {pricePlan.allFeatures} />
                <PriceCard plan={pricePlan.company} allFeatures= {pricePlan.allFeatures} />
            </div>
        </Container>
    </section>
  )
}

export default Pricing