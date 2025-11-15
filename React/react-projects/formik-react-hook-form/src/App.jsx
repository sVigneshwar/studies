import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import Select from "react-select"

export default function App() {
  const {register, handleSubmit, formState:{errors, isSubmitting, isValid}, control, watch} = useForm({
    defaultValues: {
      "email": "test",
       "gender": { label: "Female", value: "female" }
    },
    mode: "all"
  })

  const all = watch()

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", {required: "This field is required", pattern: {value: /\S+@\S+\.\S+/, message: "Invalid format"}})} placeholder='email' />
        {errors.email && <p>{errors.email.message}</p>} <br />
        <input {...register("name", {required: "This field is required"})} placeholder='name' />
        {errors.name && <p>{errors.name.message}</p>} <br />
        <input type='number' {...register("age",{min: {value: 18, message: "Minimum is 18"}, valueAsNumber: true})} placeholder='age' />
        {errors.age && <p>{errors.age.message}</p>} <br />
        <input {...register("phone",{required: "This field is required", minLength: {value: 10, message: "Min is 10 letters"}, maxLength:{value: 10, message: "max is 10"}})} placeholder='phone' />
        {errors.phone && <p>{errors.phone.message}</p>} <br />

        <Controller name='gender' rules={{required: "Select gender"}} control={control} render={({field, fieldState: {error}}) => (
          <>
            <Select {...field} options={[{label: "Male", value: "male"}, {label: "Female", value: "female"}]} />
            {error && <p>{error.message}</p>}<br />
          </>
        )} />

        <button type='submit' disabled={!isValid}>{isSubmitting ? "Submitting....." : "Submit"}</button>
      </form>


      <h2>form datas</h2>
      <pre>{JSON.stringify(all, null, 2)}</pre>
    </div>
  )
}
// email
// name
// age
// phone