import React from 'react'
import Container from '../Container'
import FeatureCard from './FeatureCard'
import Lottie from 'lottie-react';
import autoFill from "../../assets/auto-complete.json"
import migration from "../../assets/migration.json"
import autoSelection from "../../assets/auto-selection.json"

const features = [
  {
    icon: autoFill,
    title: "Dynamic Auto Fill",
    content: "",
  },
  {
    icon: migration,
    title: "Copy & Past",
    content: "",
  },
  {
    icon: autoSelection,
    title: "Auto Select",
    content: "",
  },
  {
    icon: autoSelection,
    title: "Dashboard",
    content: "",
  },
  {
    icon: autoSelection,
    title: "Avalablitiy",
    content: "",
  },
  {
    icon: autoSelection,
    title: "Technical Support",
    content: "",
  },
];

const Features = () => {
  const renderedFeaturesCards = features.map(((feature, i) =>{
    return ( 
      <FeatureCard 
        key={i} 
        icon={<Lottie animationData={feature.icon} loop={true} />} 
        title={feature.title} 
      />
    )
  }));

  return (
    <section id="features" className="py-20">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 md:gap-5 lg:gap-8 xl:gap-16 -mt-36">
              {renderedFeaturesCards}
            </div>
        </Container>
    </section>
  )
}

export default Features