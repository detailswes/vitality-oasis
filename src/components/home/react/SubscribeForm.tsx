import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const SubscribeForm = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Subscribed with email:", values.email);
    },
  });

  const isEmailError = formik.touched.email && formik.errors.email;

  return (
    <div className="w-full sm:max-w-[308px]">
      <form onSubmit={formik.handleSubmit}>
        <p className="text-lg font-medium text-white pb-[10px]">Stay Updated</p>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email..."
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`h-11 w-full text-white md:h-[60px] border-white bg-transparent placeholder:text-white ${
            isEmailError ? "border-red-500" : ""
          }`}
        />

        {isEmailError && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}

        <Button
          type="submit"
          className="py-3 px-5 uppercase bg-secondary text-black mt-[23px] hover:text-white font-semibold"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default SubscribeForm;
