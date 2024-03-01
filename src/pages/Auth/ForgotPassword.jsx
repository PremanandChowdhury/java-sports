// @ts-nocheck
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8">
      <h1 className="text-4xl font-700">Forgot Password</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-700 font-Lato">Email</label>
        <input
          className="p-2 border-none rounded-xl"
          type="text"
          placeholder="Enter your registered email"
          id="email"
          name="email"
          ref={register({ 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Regex pattern for email validation
              message: "Please enter a valid email address"
            }
          })}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <button type="submit" className="p-3 text-white bg-black font-700 rounded-3xl font-Lato mx-14">Send</button>
      <span className="text-sm text-center">Didn't receive? <Link to="/forgot-password" className="text-red-500 underline">Send again</Link></span>
    </form>
  );
};

export default ForgotPassword;
