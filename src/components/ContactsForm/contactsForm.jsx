// import { nanoid } from 'nanoid'
import { Formik, Form, Field } from "formik";
import { useId } from 'react';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./contactForm.module.css"
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactsSlice';



export default function ContactForm() {
    const dispatch = useDispatch();

    
    const handleSubmit = (values, actions) => {
    //     onAdd({
    //         id: nanoid(),
    //         name: values.username,
    //         number: values.phone
    //     });
        //    actions.resetForm()
        // const form = event.target
        // dispatch(addContacts(form.elements.username.value))
        // dispatch(addContacts(form.elements.phone.value))
        // form.reset()

        dispatch(addContacts(values.username,values.phone));
         actions.resetForm()
    }




    const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.string().min(3, "Too short!").max(50, "Too Long!").required("Required")
})
    const nameFieldId = useId();
    const phoneFieldId = useId();
    
    return (
        <Formik initialValues={{
        username: "",
        phone: ""
        }} onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <label className={css.label} htmlFor={nameFieldId}>Name</label>
                <Field className={css.field} type="text" placeholder="Enter..." name="username" id={nameFieldId} />
                 <ErrorMessage name="username" component="span" />
                <label className={css.label} htmlFor={phoneFieldId}>Phone</label>
                <Field className={css.field} type="number" placeholder="Enter..." name="phone" id={phoneFieldId} />
                 <ErrorMessage name="phone" component="span" />
                <button className={css.btn} type="submit">Add Contact</button>
</Form>
        </Formik>
    )
}