import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function RHFMasterForm() {
  const {register, handleSubmit, formState: {errors, isValid}, control, watch, reset} = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      phone: "",
      comments: "",
      gender: "",
      country: null,
      newsletter: "daily",
      hobbies: [],
      agree: false,
      birthday: null,
      avatar: null,
      address: {
        city: "",
        zip: ""
      }
    }
  })

  const onSubmit = data => {
    console.log(data);
  }

  const allValues = watch()
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">email:</label>
          <input placeholder='email' {...register("email", {required: "This field is required", pattern: {value: /\S+@\S+\.\S+/, message: "Invalid email format"}})} />
          {errors.email && <p>{errors.email.message}</p>}
          </div>
        <div>
          <label htmlFor="password">password:</label>
          <input type="password" placeholder='password' {...register("password", {required: "This field is required", minLength: {value: 6, message: "Minimum 6 characters"}})} />
          {errors.password && <p>{errors.password.message}</p>}
          </div>
        <div>
          <label htmlFor="phone">phone:</label>
          <input placeholder='phone' {...register("phone", {required: "This field is required", minLength: {value: 10, message: "Minimum 10 characters"}, maxLength: {value: 10, message: "Maximum 10 characters"}, pattern: {value: /^[0-9]+$/, message: "Enter only Digits"}})} />
          {errors.phone && <p>{errors.phone.message}</p>}
          </div>
        <div>
          <label htmlFor="comments">comments:</label>
          <textarea {...register("comments")} />
          </div>
        <div>
          <label htmlFor="gender">gender:</label>
          <select {...register("gender", {required: "This field is required"})}>
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          {errors.gender && <p>{errors.gender.message}</p>}
          </div>
        <div>
          <label htmlFor="country">country:</label>
          <Controller control={control} name="country" rules={{required: "This field is required"}} render={({field, fieldState: {error}}) => (
            <>
            <Select
              {...field}
              options={[
                { label: "India", value: "IN" },
                { label: "United States", value: "US" },
                { label: "United Kingdom", value: "UK" }]}
              isClearable
              onChange={val => field.onChange(val)}
            />
            {error && <p>{error.message}</p>}
            </>
          )} />
          </div>
        <div>
          <label htmlFor="newsletter">newsletter:</label>
          <label htmlFor="daily">
            <input type='radio' value="daily" {...register("newsletter")} />
            Daily
          </label>
          <label htmlFor="weekly">
            <input type='radio' value="weekly" {...register("newsletter")} />
            Weekly
          </label>
          </div>
        <div>
          <label htmlFor="hobbies">hobbies:</label>
          <label htmlFor="reading">
            <input type='checkbox' value="reading" {...register("hobbies")} />
            Reading
          </label>
          <label htmlFor="coding">
            <input type='checkbox' value="coding" {...register("hobbies")} />
            Coding
          </label>
          <label htmlFor="sports">
            <input type='checkbox' value="sports" {...register("hobbies")} />
            Sports
          </label>
          </div>
        <div>
          <input id="agree" type='checkbox'  {...register("agree", {required: "This field is required"})} />
          <label htmlFor="agree">Agree terms</label>
          {errors.agree && <p>{errors.agree.message}</p>}
          </div>
        <div>
          <label htmlFor="birthday">birthday:</label>
          <Controller 
          name="birthday"
          control={control} 
          rules={{required: "This field is requried"}} 
          render={({field, fieldState: {error}}) => (
            <>
            <DatePicker 
            dateFormat="dd/MM/yyyy" 
            placeholderText='Select a date' 
            onChange={val => field.onChange(val)} 
            selected={field.value} />
            {error && <p>{error.message}</p>}
            </>
          )} />
          </div>
        <div>
          <label htmlFor="avatar">avatar:</label>
            <input type="file" accept='image/*' {...register("avatar")} />
          </div>
        <div>
          <label htmlFor="city">city:</label>
          <input placeholder='city' {...register("city")} />
          </div>
        <div>
          <label htmlFor="zip">zip:</label>
          <input placeholder='zip' {...register("zip")} />
          </div>

          <button type="submit" disabled={!isValid}>submit</button>
          <button type="reset">reset</button>
      </form>

      <h1>All values</h1>
      <pre>{JSON.stringify(allValues, null, 2)}</pre>
    </div>
  )
}
