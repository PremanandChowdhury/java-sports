// @ts-nocheck
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const OtpVerification = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8">
            <h1 className="text-4xl font-700">OTP Verification</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="otp" className="text-sm font-700 font-Lato">OTP</label>
                <input
                    className="p-2 border-none rounded-xl"
                    type="text"
                    placeholder="Enter your OTP"
                    id="otp"
                    name="otp"
                    ref={register({ 
                        required: "OTP is required",
                        pattern: {
                            value: /^\d{6}$/, // regex pattern for a 6-digit OTP
                            message: "Please enter a valid 6-digit OTP"
                        }
                    })}
                />
                {errors.otp && <span className="text-red-500">{errors.otp.message}</span>}
            </div>
            <button type="submit" className="p-3 text-white bg-black font-700 rounded-3xl font-Lato mx-14">Verify</button>
        </form>
    );
};

export default OtpVerification;
