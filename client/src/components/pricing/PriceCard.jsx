import React from 'react'

const PriceCard = ({plan, allFeatures}) => {
    const renderedFeatures = allFeatures.map((feature, i)=>{
        if(plan.features.includes(feature)){
            return (
                <li key={i} className="flex text-primary font-medium p-2 border border-1 even:border-y-0 border-slate-500">
                    {feature}
                    <svg className='inline-block ms-auto fill-info' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 26 26">
                        <path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z"></path>
                    </svg>
                </li>
            );
        }

        return (
            <li key={i} className="flex text-primary font-medium p-2 border border-1 even:border-y-0 border-slate-500">
                {feature}
                <svg className='inline-block ms-auto fill-red-400 ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 26 26">
                    <path d="M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z"></path>
                </svg>
            </li>
        );
    });
  return (
    <div className="card even:glass w-80 even:bg-[#3e606f8c] border border-1 border-dark shadow-sm p-4">
        <figure className='w-24 h-24 mx-auto'>{plan.icon}</figure>
        <div className="card-body p-3">
            <h2 className="card-title mx-auto text-dark font-bold capitalize ">{plan.title}</h2>
            <span className='w-full p-4 font-extrabold font-lato text-dark text-center bg-green-100/50 rounded-lg'>${plan.price.monthly} Monthly</span>
            <ul className="features text-center mb-3">
                {renderedFeatures}
            </ul>
            <div className="card-actions mt-auto">
                {
                    plan.features.length !== allFeatures.length &&
                    <button className="btn bg-secondary hover:bg-transparent w-full font-extrabold font-lato capitalize text-lg text-white hover:text-secondary border-secondary hover:border-secondary">Subscripe now</button>
                }
                {
                    plan.features.length === allFeatures.length &&
                    <button className="btn bg-primary hover:bg-transparent w-full font-extrabold font-lato capitalize text-lg text-white hover:text-primary border-primary hover:border-primary">Subscripe now</button>
                }
            </div>
        </div>
    </div>
  )
}

export default PriceCard