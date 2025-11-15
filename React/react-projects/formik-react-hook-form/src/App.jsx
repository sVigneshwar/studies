// RHFForm.jsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RHFForm() {
  const {register,handleSubmit,control,watch,reset,formState: { errors, isSubmitting, isValid, touchedFields }} = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      phone: "",
      comments: "",
      gender: "",
      country: null,            // react-select (object)
      hobbies: [],              // checkbox group
      agree: false,             // single checkbox
      newsletter: "daily",      // radio (string)
      birthDate: null,          // Date object
      avatar: null,             // file
      address: { city: "", zip: "" } // nested object example
    }
  });

  const onSubmit = (data) => {
    // Note: file input (avatar) is a FileList; convert if needed before sending
    console.log("RHF submit:", data);
  };

  // live watch example
  const allValues = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      {/* Email */}
      <label>Email</label>
      <input
        {...register("email", {
          required: "Email required",
          pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
        })}
        placeholder="you@email.com"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <br />
      {/* Password */}
      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password required",
          minLength: { value: 6, message: "Min 6 chars" }
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <br />
      {/* Phone (string - NOT valueAsNumber) */}
      <label>Phone</label>
      <input
        {...register("phone", {
          required: "Phone required",
          minLength: { value: 10, message: "Must be 10 digits" },
          maxLength: { value: 10, message: "Must be 10 digits" },
          pattern: { value: /^[0-9]+$/, message: "Digits only" }
        })}
        placeholder="9876543210"
        inputMode="numeric"
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <br />
      {/* Comments / textarea */}
      <label>Comments</label>
      <textarea {...register("comments")} placeholder="Any notes..." />

      <br />
      {/* Radio */}
      <br />
      <label>Newsletter frequency</label>
      <label>
        <input {...register("newsletter")} type="radio" value="daily" />
        Daily
      </label>
      <label>
        <input {...register("newsletter")} type="radio" value="weekly" />
        Weekly
      </label>

      <br />
      {/* Select (native) */}
      <label>Gender</label>
      <select {...register("gender", { required: "Select gender" })}>
        <option value="">-- select --</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && <p>{errors.gender.message}</p>}

      <br />
      {/* react-select (controlled) */}
      <label>Country (react-select)</label>
      <Controller
        name="country"
        control={control}
        rules={{ required: "Choose a country" }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select
              {...field}
              // field.value is either null or the selected option object
              options={[
                { label: "India", value: "IN" },
                { label: "United States", value: "US" },
                { label: "United Kingdom", value: "UK" }
              ]}
              isClearable
              onChange={(val) => field.onChange(val)}
            />
            {error && <p>{error.message}</p>}
          </>
        )}
      />

      <br />
      {/* Checkbox group -> hobbies */}
      <br />
      <label>Hobbies</label>
      <label>
        <input type="checkbox" value="reading" {...register("hobbies")} />
        Reading
      </label>
      <label>
        <input type="checkbox" value="coding" {...register("hobbies")} />
        Coding  
      </label>
      <label>
        <input type="checkbox" value="sports" {...register("hobbies")} />
        Sports
      </label>

      <br />
      {/* Single required checkbox */}
      <label>
        <input {...register("agree", { required: "You must accept terms" })} type="checkbox" />
        I agree to terms
      </label>
      {errors.agree && <p>{errors.agree.message}</p>}

      <br />
      {/* DatePicker (react-datepicker via Controller) */}
      <label>Birth date</label>
      <Controller
        name="birthDate"
        control={control}
        rules={{ required: "Birth date required" }}
        render={({ field, fieldState: { error } }) => (
          <>
            <DatePicker
              selected={field.value}
              onChange={(val) => field.onChange(val)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
            />
            {error && <p>{error.message}</p>}
          </>
        )}
      />

      <br />
      {/* File input */}
      <label>Avatar (file)</label>
      <input
        type="file"
        {...register("avatar")}
        accept="image/*"
      />

      <br />
      {/* Nested fields example */}
      <label>City</label>
      <input {...register("address.city")} placeholder="City" />
      <br />
      <label>ZIP</label>
      <input {...register("address.zip")} placeholder="ZIP" />
      <br />
      {/* Submit + reset */}
      {/* <button type="submit" disabled={isSubmitting || !isValid}>Submit</button> */}
      <button type="submit">Submit</button><br />
      <button type="button" onClick={() => reset()}>Reset</button>

      {/* live preview */}
      <h4>Live values (watch):</h4>
      <pre>{JSON.stringify(allValues, null, 2)}</pre>
    </form>
  );
}
