import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Input } from '../Components/input'
import { Button } from '../Components/button'
import { Container, Form, InputField, ErrorMessage } from '../Styles/style'
const TELREGEX =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
export const SignupForm = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .required('Firstname is required'),
        lastName: Yup.string().required('Lastname is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .min(5, 'Must be at least 5 characters')
            .required('Password is required'),
        phone: Yup.string()
            .matches(TELREGEX, 'Invalid phone number')
            .required('Phone number is required'),
    })
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })
    return (
        <Container>
            <Form action="" onSubmit={formik.handleSubmit}>
                <InputField>
                    <label htmlFor="first">Firstname</label>
                    <Input
                        type="text"
                        id="first"
                        name="firstName"
                        onChange={formik.handleChange}
                        {...formik.getFieldProps.firstName}
                    />
                    {formik.errors.firstName && formik.touched.firstName ? (
                        <ErrorMessage>{formik.errors.firstName} </ErrorMessage>
                    ) : null}
                </InputField>
                <InputField>
                    <label htmlFor="last">Lastname</label>
                    <Input
                        type="text"
                        id="last"
                        name="lastName"
                        onChange={formik.handleChange}
                        {...formik.getFieldProps.lastName}
                    />
                    {formik.errors.lastName && formik.touched.lastName ? (
                        <ErrorMessage>{formik.errors.lastName} </ErrorMessage>
                    ) : null}
                </InputField>
                <InputField>
                    <label htmlFor="email">Email</label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        {...formik.getFieldProps.email}
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <ErrorMessage>{formik.errors.email} </ErrorMessage>
                    ) : null}
                </InputField>
                <InputField>
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        {...formik.getFieldProps.password}
                    />
                    {formik.errors.password && formik.touched.password ? (
                        <ErrorMessage>{formik.errors.password} </ErrorMessage>
                    ) : null}
                </InputField>
                <InputField>
                    <label htmlFor="tel">Phone number</label>
                    <Input
                        type="tel"
                        id="tel"
                        name="phone"
                        onChange={formik.handleChange}
                        {...formik.getFieldProps.phone}
                    />
                    {formik.errors.phone && formik.touched.phone ? (
                        <ErrorMessage>{formik.errors.phone} </ErrorMessage>
                    ) : null}
                </InputField>
                <Button type="submit" />
            </Form>
        </Container>
    )
}
