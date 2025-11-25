import React from 'react'
import {useForm} from 'react-hook-form'

export default function RHF({onSubmit}) {

    const {register, handleSubmit, formState: {errors, isValid}, watch, reset} = useForm({
        mode:"all",
        defaultValues: {
            name: "",
            phone: ""
        }
    })

  return (
    <div>
        <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Name</label>
        <input {...register("name", {required: "Name is required"})} type='text' placeholder='name' />
        {errors.name && <p>{errors.name.message}</p>}
        <label htmlFor="">phone</label>
        <input {...register("phone", {required: "Phone is required"})} type='tel' placeholder='phone' />
        {errors.phone && <p>{errors.phone.message}</p>}
        <button>RHF Submit</button>
      </form>
    </div>
  )
}
