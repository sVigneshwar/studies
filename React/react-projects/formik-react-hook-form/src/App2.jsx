// FormikForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import Select from "react-select";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";

const schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "Min 6 chars").required("Password required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone required"),
  comments: Yup.string().nullable(),
  gender: Yup.string().required("Select gender"),
  country: Yup.object().nullable().required("Choose a country"),
  hobbies: Yup.array().of(Yup.string()),
  agree: Yup.boolean().oneOf([true], "You must accept terms"),
  birthDate: Yup.date().nullable().required("Birth date required"),
  address: Yup.object({
    city: Yup.string().nullable(),
    zip: Yup.string().nullable()
  })
});

const LivePreview = () => {
  const { values } = useFormikContext();
  return <pre>{JSON.stringify(values, null, 2)}</pre>;
};

export default function FormikForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        phone: "",
        comments: "",
        gender: "",
        country: null,
        hobbies: [],
        agree: false,
        newsletter: "daily",
        birthDate: null,
        address: { city: "", zip: "" }
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log("Formik submit:", values);
      }}
    >
      {({ values, setFieldValue, setFieldTouched }) => (
        <Form>
          <label>Email</label>
          <Field name="email" placeholder="you@email.com" />
          <ErrorMessage name="email" component="p" />

          <br />
          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="p" />

          <br />
          <label>Phone</label>
          <Field name="phone" placeholder="9876543210" />
          <ErrorMessage name="phone" component="p" />

          <br />
          <label>Comments</label>
          <Field name="comments" as="textarea" />

          <br />
          <label>Newsletter</label>
          <label>
            <Field name="newsletter" type="radio" value="daily" /> Daily
          </label>
          <label>
            <Field name="newsletter" type="radio" value="weekly" /> Weekly
          </label>

          <br />
          <label>Gender (native select)</label>
          <Field name="gender" as="select">
            <option value="">-- select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage name="gender" component="p" />

          <br />
          <label>Country (react-select)</label>
          <Select
            options={[
              { label: "India", value: "IN" },
              { label: "United States", value: "US" }
            ]}
            value={values.country}
            onChange={(option) => setFieldValue("country", option)}
            onBlur={() => setFieldTouched("country", true)}
            isClearable
          />
          <ErrorMessage name="country" component="p" />

          <br />
          <label>Hobbies (checkbox group)</label>
          <label>
            <Field type="checkbox" name="hobbies" value="reading" /> Reading
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="coding" /> Coding
          </label>

          <br />
          <label>
            <Field type="checkbox" name="agree" />
            Agree
          </label>
          <ErrorMessage name="agree" component="p" />

          <br />
          <label>Birth date</label>
          <DatePicker
            selected={values.birthDate}
            onChange={(date) => setFieldValue("birthDate", date)}
            dateFormat="dd/MM/yyyy"
            onBlur={() => setFieldTouched("birthDate", true)}
          />
          <ErrorMessage name="birthDate" component="p" />

          <br />
          <label>City</label>
          <Field name="address.city" />
          <br />
          <label>ZIP</label>
          <Field name="address.zip" />
          <br />
          <button type="submit">Submit</button><br />
          <button type="reset">Reset</button>

          <h4>Live values</h4>
          <LivePreview />
        </Form>
      )}
    </Formik>
  );
}
