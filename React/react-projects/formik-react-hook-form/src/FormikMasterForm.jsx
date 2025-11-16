import React from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import {Formik, Form, Field, ErrorMessage, useFormikContext, validateYupSchema} from 'formik'
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";

export default function FormikMasterForm() {
  const LivePreview = () => {
    const {values} = useFormikContext();
    return <pre>{JSON.stringify({...values, avatar: undefined}, null, 2)}</pre>
  }

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("This field is required"),
    password: Yup.string().min(6, "Minimum 6 char required").required("This field is required"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Enter 10 digits").required("This field is required"),
    comments: Yup.string(),
    gender: Yup.string().required("This field is required"),
    country: Yup.object().nullable().required("This field is required"),
    newsletter: Yup.string().required("This field is required"),
    hobbies: Yup.array().of(Yup.string()),
    agree: Yup.boolean().oneOf([true], "Should agree terms"),
    birthday: Yup.date().nullable().required("This field is required"),
    avatar: Yup.mixed().nullable(),
    address: Yup.object({city: Yup.string().nullable(),zip: Yup.string().nullable()})
  })

  return (
    <div>
      <Formik 
      initialValues={{
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
        address: {city: "",zip: ""}}
      }
      validationSchema={schema}
      validateOnMount={true}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={data => console.log(data)}>
        {({values, setFieldValue, setFieldTouched, handleChange }) => (
          <Form>
            
            <div>
              <label htmlFor="email">email: </label>
              <Field name="email" placeholder="email" type="email" onChange={(e) => {handleChange(e);setFieldTouched('email', true)}} />
              <ErrorMessage name="email" component="p" />
            </div>
            <div>
              <label htmlFor="password">password: </label>
              <Field name="password" placeholder="password" type="password" />
              <ErrorMessage name="password" component="p" />
            </div>
            <div>
              <label htmlFor="phone">phone: </label>
              <Field name="phone" placeholder="phone" />
              <ErrorMessage name="phone" component="p" />
            </div>
            <div>
              <label htmlFor="comments">comments: </label>
              <Field name="comments" placeholder="comments" as="textarea" />
              <ErrorMessage name="comments" component="p" />
            </div>
            <div>
              <label htmlFor="gender">gender: </label>
              <Field name="gender" as="select">
                <option value="">--Select--</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="others">others</option>
              </Field>
              <ErrorMessage name="gender" component="p" />
            </div>
            <div>
              <label htmlFor="country">country: </label>
              <Select 
                options={[
                  { label: "India", value: "IN" },
                  { label: "United States", value: "US" }
                ]}
                isClearable
                onChange={value => setFieldValue("country", value, true)}
                onBlur={() => setFieldTouched("country", true)}
                value={values.country}
               />
              <ErrorMessage name="country" component="p" />
            </div>
            <div>
              <label htmlFor="newsletter">newsletter: </label>
              <label htmlFor="newsletter">
                <Field type="radio" name="newsletter" value="daily" />
                Daily 
              </label>
              <label htmlFor="newsletter">
                <Field type="radio" name="newsletter" value="weekly" />
                Weekly
              </label>
              <ErrorMessage name="newsletter" component="p" />
            </div>
            <div>
              <label htmlFor="hobbies">hobbies: </label>
              <label htmlFor="hobbies">
                <Field type="checkbox" name="hobbies" value="reading" />
                Reading
              </label>
              <label htmlFor="hobbies">
                <Field type="checkbox" name="hobbies" value="coding" />
                Coding
              </label>
              <ErrorMessage name="hobbies" component="p" />
            </div>
            <div>
              <label>
                <Field type="checkbox" name="agree" />
                Agree terms
              </label>
              <ErrorMessage name="agree" component="p" />
            </div>
            <div>
              <label htmlFor="birthday">birthday: </label>
              <DatePicker
                selected={values.birthday}
                placeholder="Select a data"
                dateFormat="dd/MM/yyyy"
                onChange={value => setFieldValue("birthday", value, true)}
                onBlur={() => setFieldTouched("birthday", true)}
              />
              <ErrorMessage name="birthday" component="p" />
            </div>
            <div>
              <label htmlFor="avatar">avatar: </label>
              <input
                name="avatar"
                type="file"
                accept="image/*"
                onChange={(e) => setFieldValue("avatar", e.currentTarget.files[0], true)}
                onBlur={() => setFieldTouched("avatar", true)}
              />
              <ErrorMessage name="avatar" component="p" />
            </div>
            <div>
              <label htmlFor="city">city: </label>
              <Field name="address.city" placeholder="city" />
              <ErrorMessage name="address.city" component="p" />
            </div>
            <div>
              <label htmlFor="zip">zip: </label>
              <Field name="address.zip" placeholder="zip" />
              <ErrorMessage name="address.zip" component="p" />
            </div>

            <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>

          <h4>Live values</h4>
          <LivePreview />
        </Form>    
        )}
        
      </Formik>
    </div>
  )
}
