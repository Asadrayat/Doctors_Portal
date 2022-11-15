import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center items-center h-[500px]' >
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("example")} type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  {...register("example")} type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <input {...register("exampleRequired", { required: true })} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Login;