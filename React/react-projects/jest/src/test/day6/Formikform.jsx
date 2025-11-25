import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';

export default function Formikform({onSubmit}) {
    const schema = Yup.object({
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required")
    })
  return (
    <div>
      <Formik 
      initialValues={{email:'', password: ''}}
      validationSchema={schema}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={onSubmit}
      >
        <Form>
            <label htmlFor="">Email</label>
            <Field name="email" type="email" placeholder="email" />
            <ErrorMessage name="email" component="p" />
            <label htmlFor="">Password</label>
            <Field name="password" type="password" placeholder="password" />
            <ErrorMessage name='password' component="p" />
            <button type='submit'>Formik Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
