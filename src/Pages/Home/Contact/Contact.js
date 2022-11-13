import React from 'react';
import bg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Component/Primary/PrimaryButton';
const Contact = () => {
    return (
        <section className='py-16 my-20 ' style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <p className='text-center font-bold text-l text-primary'>Contact Us</p>
            <p className='text-3xl text-base-100 text-center font-semibold'>Stay connected with us</p>
            <div className='flex justify-center  '>
                <form className='flex flex-col '>
                    <div className="form-control my-4">
                        <label className="input-group">
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-96" />
                        </label>
                    </div>
                    <div className="form-control my-4">
                        <label className="input-group">
                            <input type="text" placeholder="Subject" className="input input-bordered w-96" />
                        </label>
                    </div>
                    <div className="form-control my-4">
                        <label className="input-group">

                            <input type="text" placeholder="message" className="input input-bordered h-44 w-96" />
                        </label>
                    </div>
                    <div className="form-control my-4">
                        <PrimaryButton><button type='submit'>Submit</button></PrimaryButton>
                    </div>
                </form>

            </div>
        </section>

    );
};

export default Contact;