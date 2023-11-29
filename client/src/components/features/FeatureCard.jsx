import React from 'react'
// import Lottie from 'lottie-react'

const FeatureCard = ({icon, title, content}) => {
  // first:-mt-[12rem] md:-mt-[12rem] 
  return (
    <div className="card col-span-1 row-spa bg-white shadow-xl">
        <figure className="px-10 pt-10">
           <span style={{width: "100px", height: "100px"}}>
             {/* <Lottie animationData={autoFill} loop={true} /> */}
             {icon}
           </span>
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title text-dark font-lato">{title}</h2>
        <p>{content ?? "If a dog chews shoes whose shoes does he choose?"}</p>
        {/* <div className="card-actions">
            <button className="btn bg-primary text-white ">Subscrip now</button>
        </div> */}
        </div>
    </div>
  )
}

export default FeatureCard