import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  date: Yup.string().required("Data is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

// Helper function for dynamic class names
const getFieldClassNames = (fieldName: string, touched: any, errors: any) =>
  touched[fieldName] && errors[fieldName] ? "border-red-500" : "";

// Form Submission Handler
const handleSubmit = (values: any, { setSubmitting }: any) => {
  console.log(values);
  setSubmitting(false);
};

export default function HomeScreenForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          {/* Name and Email Fields */}
          <div className="flex gap-[14px] flex-col md:flex-row mt-[14px]">
            <div className="w-full">
              <Field
                name="name"
                as={Input}
                placeholder="Name"
                type="text"
                className={getFieldClassNames("name", touched, errors)}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="w-full">
              <Field
                name="email"
                as={Input}
                placeholder="Email"
                type="email"
                className={getFieldClassNames("email", touched, errors)}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* Date Field */}
          <div className="w-full">
            <Field
              name="date"
              as={Input}
              placeholder="Data"
              type="text"
              className={`mt-[14px] ${getFieldClassNames(
                "date",
                touched,
                errors
              )}`}
            />
            <ErrorMessage
              name="date"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Message Field */}
          <Field
            name="message"
            as={Textarea}
            className={`text-[14px] h-[204px] mt-[14px] ${getFieldClassNames(
              "message",
              touched,
              errors
            )}`}
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-red-500 text-sm mt-1"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="uppercase py-5 mt-5 h-[54px] px-[30px] hover:bg-secondary hover:text-black"
          >
            Schedule a tour
          </Button>
        </Form>
      )}
    </Formik>
  );
}
