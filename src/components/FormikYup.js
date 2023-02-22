import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const FormikYup = () => {
    const validationSchema = Yup.object({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required()
    })
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values)=>{
        console.log(values)
    }
  })
  return (
    <>
      <div className="container p-5 justify-content-center">
        <form className="shadow p-3 rounded w-50 container">
          <h3>Sign up <small className='fs-6 '>Formik and yup</small></h3>
          <input
            name="firstname"
            type="text"
            className="form-control focus-border-danger my-3"
            placeholder="firstname" onChange={formik.handleChange} value={formik.firstname}
          />
          <input
            name="lastname"
            type="text"
            className="form-control focus-border-danger my-3"
            placeholder="lastname" onChange={formik.handleChange} value={formik.lastname}
          />
          <input
            name="email"
            type="text"
            className="form-control focus-border-danger my-3"
            placeholder="email" onChange={formik.handleChange} value={formik.email}
          />
          <input
            name="password"
            type="text"
            className="form-control focus-border-danger my-3"
            placeholder="password" onChange={formik.handleChange} value={formik.password} 
          /> {formik.errors.password}
          <button type='submit' className="bg-info btn my-3" onClick={formik.handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default FormikYup
