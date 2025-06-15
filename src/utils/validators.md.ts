import * as Yup from 'yup';
const validateUserRegistration = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("lastName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(2),
    isAdmin: Yup.boolean().required('Admin status must be provided')
});

const validateUserLogin= Yup.object().shape({
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(2),
});

const validateUserAccountUpdate = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("lastName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(2),
    isAdmin: Yup.boolean().required('Admin status must be provided')
});
export { 
    validateUserRegistration,
    validateUserLogin,
    validateUserAccountUpdate
}