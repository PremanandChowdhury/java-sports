// @ts-nocheck
import { useState } from 'react';
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const [passwordMatch, setPasswordMatch] = useState(true);

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  const validatePasswordMatch = () => {
    const newPassword = watch('newPassword');
    const confirmPassword = watch('confirmPassword');
    setPasswordMatch(newPassword === confirmPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8">
      <h1 className="text-4xl font-700">Reset Password</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="newPassword" className="text-sm font-700 font-Lato">New Password</label>
        <input
          className="p-2 border-none rounded-xl"
          type="password"
          placeholder="Enter new password"
          id="newPassword"
          name="newPassword"
          ref={register({ 
            required: "New password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long"
            }
          })}
        />
        {errors.newPassword && <span className="text-red-500">{errors.newPassword.message}</span>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword" className="text-sm font-700 font-Lato">Confirm Password</label>
        <input
          className="p-2 border-none rounded-xl"
          type="password"
          placeholder="Confirm new password"
          id="confirmPassword"
          name="confirmPassword"
          ref={register({ 
            required: "Please confirm your new password",
            validate: value => value === watch('newPassword') || "Passwords do not match"
          })}
          onChange={validatePasswordMatch}
        />
        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
        {!passwordMatch && <span className="text-red-500">Passwords do not match</span>}
      </div>
      <button type="submit" className="p-3 text-white bg-black font-700 rounded-3xl font-Lato mx-14">Submit</button>
    </form>
  );
};

export default ChangePassword;
