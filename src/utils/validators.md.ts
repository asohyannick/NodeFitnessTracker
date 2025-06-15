import * as Yup from 'yup';
import { MaritalStatus } from '../service/interfac/profile/profile.interfac';
const validateUserRegistration = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("lastName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(6, "Password must be at least 6 characters long"),
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

const validateProfileRegistration = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("lastName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(6, "Password must be at least 6 characters long"),
    bio: Yup.string().required('Bio must be provided').trim(),
    profilePicture: Yup.string().required('Profile picture URL must be provided').trim(),
    profession: Yup.string().required('Profession must be provided').trim(),
    country: Yup.string().required('Country must be provided').trim(),
    maritalStatus: Yup.mixed()
        .required("One value must be provided")
        .oneOf(Object.values(MaritalStatus)), // Validates against the enum values

});

export { 
    validateUserRegistration,
    validateUserLogin,
    validateUserAccountUpdate,
    validateProfileRegistration
}