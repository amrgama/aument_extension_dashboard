import React from 'react'
import Lottie from "lottie-react"
import spinner from "../../assets/spinner.json"
import { AnimatePresence, motion } from 'framer-motion'

const SubmitBtn = ({text, isLoading, isDisabled, onClick, extraClasses}) => {
    console.log("isLoading: ", isLoading)
    return(
        <div
            className={`rounded-x-full relative ${extraClasses}`}
        >
            <button
                type='submit' 
                onClick={onClick? onClick : (e)=> {console.log("default submit funtion")}}
                className={`btn ${isLoading? "bg-transparent": "bg-primary"} w-full capitalize font-lato font-bold text-white ${isDisabled? "btn-disabled": ""}`}
            >
                <AnimatePresence mode='sync' initial="false">
                    { 
                        !isLoading &&
                        <motion.span
                            initial= {{scale: 0, transformOrigin: "center"}}
                            animate= {{scale: 1, transformOrigin: "center"}}
                            exit={{scale:0, transformOrigin: "center"}}
                            transition={{duration: 0.3}}
                        >
                            {text}
                        </motion.span>
                    }
                    { 
                        isLoading &&
                        <motion.span
                            initial= {{scale: 0, transformOrigin: "center"}}
                            animate= {{scale: 1, transformOrigin: "center"}}
                            exit={{scale:0, transformOrigin: "center"}}
                            transition={{duration: 0.2, delay: 0.1}}
                            className='h-full flex flex-wrap'
                        >
                            <Lottie 
                                animationData={spinner} 
                                loop= {true}
                                className='w-full h-full'
                            />
                        </motion.span>
                    }
                </AnimatePresence>
            </button>
        </div>
    )
}

export default SubmitBtn