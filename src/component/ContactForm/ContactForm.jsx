import React,{useState} from "react";
import "./ContactForm.scss";
import { TextField, Button, Box, Typography } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
  const initalValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [capVal, setcapVal] = useState(null)

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Please enter first name")
      .min(2, "First name too short"),
    lastName: Yup.string()
      .min(1, "Last name too short"),
    email: Yup.string()
      .required("Please enter email")
      .email("Invalid email"),
    phone: Yup.string()
      .required("Please enter phone number")
      .matches(/^[0-9]+$/, "Phone number must be only digits")
      .min(10, "Phone number should be minimum 10 digits long"),
    message: Yup.string()
      .required("Please enter message")
      .min(5, "Message too short"),
  });
  const handleSubmit = (values, { resetForm }) => {
    // You can perform your form submission logic here
    console.log(values);
    resetForm();
  };
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="contactPageForm">
      <div className="contactPageFormLeft">
        <span className="contactPageFormLeftText1">
          We’ve helped DHL, Henkel, Kaiser and Republic Services
        </span>
        <span className="contactPageFormLeftText2">
          {" "}
          in their digital transformation journey that align with their business
          objectives.
        </span>
      </div>
      <div className="contactPageFormRight">
        <Formik
          initialValues={initalValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form>
              <div className="contactFormRow1" >
              <Field
            name="firstName"
            as={TextField}
            size="small"
            variant="filled"

            label="First Name"
            className="contactInput"

            fullWidth
            error={Boolean(errors.firstName) && Boolean(touched.firstName)}
            helperText={Boolean(touched.firstName) && errors.firstName}
          />
                  <Field
            name="lastName"
            size="small"

            as={TextField}
            variant="filled"
            label="Last Name"
            fullWidth
            className="contactInput"
            error={Boolean(errors.lastName) && Boolean(touched.lastName)}
            helperText={Boolean(touched.lastName) && errors.lastName}
          />
              </div>
              <div className="contactFormRow2">
              <Field
            name="email"
            size="small"
            as={TextField}
             variant="filled"
            label="Email"
            className="contactInput"

            fullWidth
            error={Boolean(errors.email) && Boolean(touched.email)}
            helperText={Boolean(touched.email) && errors.email}
          />
                 <Field
            name="phone"
            size="small"
            as={TextField}
              variant="filled"
            className="contactInput"

            label="Phone"
            fullWidth
            error={Boolean(errors.phone) && Boolean(touched.phone)}
            helperText={Boolean(touched.phone) && errors.phone}
          />
              </div>
              <div className="conatctTextButtonField">
              <Field
            name="message"
            as={TextField}
            size="small"
              variant="filled"
            label="Message"
            className="contactInput"

            fullWidth
            multiline
            rows={4}
            error={Boolean(errors.message) && Boolean(touched.message)}
            helperText={Boolean(touched.message) && errors.message}
          />
            <ReCAPTCHA
    sitekey="6LfX0PgpAAAAANnJZERY4jy7U5r3wa_E4fqBWmLA"
    onChange={(val) =>setcapVal(val) }
  />

         
          <Button
                type="submit"
                variant="contained"
                // color="primary"
                style={{background:'#1A74E9',cursor:'pointer',color:'white'}}
                size="large"
                disabled={!isValid || !dirty || !capVal}
              >
                Sign up
              </Button>
          </div>
            </Form>
          )}
        </Formik>
        
      </div>
    </div>
  );
};

export default ContactForm;
