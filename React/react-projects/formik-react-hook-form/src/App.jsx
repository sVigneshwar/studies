import React from 'react'
import {useForm} from 'react-hook-form'

export default function App() {
  const {register, handleSubmit, formState:{errors, isValid}, reset} = useForm({
    defaultValues: {
      phone: "1234567890"
    },
    mode: "all"
  })

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", {required: "This field is Required", pattern: {value: /\S+@\S+\.\S+/, message: "Invalid format"}})} placeholder='Email' />
        {errors.email && <p>{errors.email.message}</p>}<br />
        <input {...register("fullName", {required: "This field is Required"})} placeholder='Full Name' />
        {errors.fullName && <p>{errors.fullName.message}</p>}<br />
        <input type="number" {...register("age", {valueAsNumber: true, min: {value: 19, message: "Min should be 18"}})} placeholder='Age' />
        {errors.age && <p>{errors.age.message}</p>}<br />
        <input {...register("phone", {minLength: {value: 10, message: "Min length 10"}, maxLength: {value: 10, message: "Max length 10"}})} placeholder='Phone' />
        {errors.phone && <p>{errors.phone.message}</p>}<br />
        <button type='submit' disabled={!isValid}>Submit</button>
        <button type='button' onClick={() => reset()} >Reset</button>
      </form>
    </>
  )
}
