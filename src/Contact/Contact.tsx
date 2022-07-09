import { useFormik } from 'formik'
import { useState } from 'react'
import classes from './contact.module.css'

export const Contact = () => {
    const [message, setMessage] = useState<string | null>(null)

    type ContactType = {
        name?: string
        email?: string
        message?: string
    }

    const ContactForm = {
        form: {
            title: 'Contact Me',
            name: 'name',
            email: 'email',
            message: 'message',
            button: 'Send message',
            validate: {
                required: 'Required',
                lessName: 'Must be 15 characters or less',
                lessMessage: 'Must be 15 characters or less',
                invalidEmail: 'Invalid email address',
            },
            success: 'Email sent successfully 😊',
        }
    }

    const validate = (values: ContactType) => {

        const errors: ContactType = {}
        if (!values.name) {
            errors.name = ContactForm.form.validate.required
        } else if (values.name.length > 50) {
            errors.name = ContactForm.form.validate.lessName
        }

        if (!values.message) {
            errors.message = ContactForm.form.validate.required
        } else if (values.message.length > 500) {
            errors.message = ContactForm.form.validate.lessMessage
        }

        if (!values.email) {
            errors.email = ContactForm.form.validate.required
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = ContactForm.form.validate.invalidEmail
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate,
        onSubmit: values => {
            formik.resetForm()
            setMessage(ContactForm.form.success)
            console.log(values)
        },
    })

    return (
        <div id="contact" className='top-stripe'>
            <h2>{ContactForm.form.title}</h2>
            <div className={classes.contactBlock}>
                <div className={classes.contactContainer}>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="contact_name">{ContactForm.form.name}
                                {formik.touched.name && formik.errors.name ? <span> - {formik.errors.name}</span> : null}</label>
                            <input className={classes.input} id="contact_name" {...formik.getFieldProps('name')} type="text" />
                        </div>
                        <div>
                            <label htmlFor="contact_email">{ContactForm.form.email}
                                {formik.touched.email && formik.errors.email ? <span> - {formik.errors.email}</span> : null}</label>
                            <input className={classes.input} id="contact_email" {...formik.getFieldProps('email')} type="email" />
                        </div>
                        <div>
                            <label htmlFor="contact_message">{ContactForm.form.message}
                                {formik.touched.message && formik.errors.message ? <span> - {formik.errors.message}</span> : null}</label>
                            <textarea className={classes.textarea} id="contact_message" {...formik.getFieldProps('message')} />
                        </div>
                        {message && <div>{message}</div>}
                        <div>
                            <button type='submit'>{ContactForm.form.button}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
