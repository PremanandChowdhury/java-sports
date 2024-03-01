// @ts-nocheck
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Otp = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8">
      <h1 className="text-4xl font-700">OTP Verification</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="otp" className="text-sm font-700 font-Lato">Enter OTP</label>
        <input
          className="p-2 border-none rounded-xl"
          type="text"
          placeholder="OTP"
          id="otp"
          name="otp"
          ref={register({ required: "OTP is required" })} // Apply validation rule
        />
        {errors.otp && <span className="text-red-500">{errors.otp.message}</span>} {/* Display error message */}
      </div>
      <button type="submit" className="p-3 text-white bg-black font-700 rounded-3xl font-Lato mx-14">Verify</button>
      <span className="text-sm text-center">Didn't receive? <Link to="/otp-verification" className="text-red-500 underline">Send again</Link></span>
    </form>
  );
};

export default Otp;
