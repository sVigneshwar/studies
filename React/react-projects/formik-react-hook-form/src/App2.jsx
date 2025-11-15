import React from 'react'
import {Formik, Form, Field, ErrorMessage, useFormikContext} from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'

export default function App2() {

    const schema = Yup.object({
        email: Yup.string().matches(/\S+@\S+\.\S+/, "Invalid email format").required("Email is required"),
        password: Yup.string().min(6,"minimum 6 fields").required("Password is required"),
        gender: Yup.object().required("Select Gender")
    })
    const LivePreview = () => {
        const { values } = useFormikContext();
        return <pre>{JSON.stringify(values, null, 2)}</pre>;
    };

  return (
    <div>
        
      <Formik initialValues={{email: "terst", password: "", gender: null}} validationSchema={schema} onSubmit={values => console.log(values)}>
        <>
            <LivePreview />

            <Form>
              <Field name="email" placeholder="email" />
              <ErrorMessage name="email" component="p" />
              <br />

              <Field name="password" placeholder="password" />
              <ErrorMessage name="password" component="p" />
              <br />

              <Field name="gender">
                {({ field, form, meta }) => (
                  <>
                    <Select
                      options={[
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" }
                      ]}
                      value={field.value}
                      onChange={(option) =>
                        form.setFieldValue(field.name, option)
                      }
                      onBlur={() =>
                        form.setFieldTouched(field.name, true)
                      }
                    />

                    {meta.touched && meta.error && <p>{meta.error}</p>}
                  </>
                )}
              </Field>

              <button type="submit">Submit</button>
            </Form>
          </>
      </Formik>
    </div>
  )
}
