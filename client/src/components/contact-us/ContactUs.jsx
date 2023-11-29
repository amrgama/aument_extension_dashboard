import React from 'react'
import Container from '../Container'

const ContactUs = () => {
  return (
    <section className=" py-20 ">
        <Container>
            <div className="flex flex-col items-center ">
                <form className='w-1/2 space-y-3 px-10 py-14 bg-white shadow-md rounded-3xl '>
                    <h3 className="text-3xl font-daysOne text-dark text-center leading-loose mb-5">Feel free to mail us</h3>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Full name" className="input input-bordered bg-white w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">What is your email?</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered bg-white w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your message</span>
                        </label>
                        <textarea className="textarea textarea-bordered bg-white h-36 " placeholder="message"></textarea>
                    </div>
                </form>
            </div>
        </Container>
    </section>
  )
}

export default ContactUs