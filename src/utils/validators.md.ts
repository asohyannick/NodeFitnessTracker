import * as Yup from 'yup';
import { MaritalStatus } from '../service/interfac/profile/profile.interfac';
import { InstensityStatus, MoodStatus } from '../service/interfac/activity/activity.interfac';
import { FrequencyStatus, GoalStatus } from '../service/interfac/goal/goal.interfac';
import { MealStatus } from '../service/interfac/nutrition/nutrition.interfac';
const validateUserRegistration = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("lastName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(6, "Password must be at least 6 characters long"),
    isAdmin: Yup.boolean().required('Admin status must be provided')
});

const validateUserLogin = Yup.object().shape({
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

const validateUpdatedProfileRegistration = Yup.object().shape({
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

const validateActivityCreation = Yup.object().shape({
    type: Yup.string().required("Type must be provided").trim().min(2),
    duration: Yup.number().required("Duration value must be provided").min(2.).integer(),
    caloriesBurned: Yup.number().required("Calories burned value must be provided").min(2).integer(),
    notes: Yup.string().required("Notes must be provided").trim().min(6, "Notes must be at least 6 characters long"),
    location: Yup.string().required('Location must be provided').trim(),
    intensity: Yup.mixed()
        .required("One value must be provided")
        .oneOf(Object.values(InstensityStatus)), // Validates against the enum values
    heartRate: Yup.number().required("Heart rate value must be provided").min(2).integer(),
    distance: Yup.number().required("Distance value must be provided").min(2).integer(),
    equipments: Yup.array().of(Yup.string().trim()).required('Equipments must be provided').min(1),
    mood: Yup.mixed()
        .required("One value must be provided")
        .oneOf(Object.values(MoodStatus)), // Validates against the enum values
    date: Yup.date().required("Date must be provided")

});

const validateUpdatedActivity = Yup.object().shape({
    type: Yup.string().required("Type must be provided").trim().min(2),
    duration: Yup.number().required("Duration value must be provided").min(2.).integer(),
    caloriesBurned: Yup.number().required("Calories burned value must be provided").min(2).integer(),
    notes: Yup.string().required("Notes must be provided").trim().min(6, "Notes must be at least 6 characters long"),
    location: Yup.string().required('Location must be provided').trim(),
    intensity: Yup.mixed()
        .required("One value must be provided")
        .oneOf(Object.values(InstensityStatus)), // Validates against the enum values
    heartRate: Yup.number().required("Heart rate value must be provided").min(2).integer(),
    distance: Yup.number().required("Distance value must be provided").min(2).integer(),
    equipments: Yup.array().of(Yup.string().trim()).required('Equipments must be provided').min(1),
    mood: Yup.mixed()
        .required("One value must be provided")
        .oneOf(Object.values(MoodStatus)), // Validates against the enum values
    date: Yup.date().required("Date must be provided")
});

const validateGoalCreation = Yup.object().shape({
    type: Yup.string().required("Type must be provided").trim().min(2),
    target: Yup.number().required("Target value must be provided").min(2.).integer(),
    currentProgress: Yup.number().required("Current Progress value must be provided").min(2).integer(),
    deadline: Yup.date().required("Deadline must be provided"),
    status: Yup.mixed()
        .required("One value must be provided")
        .oneOf(Object.values(GoalStatus)), // Validates against the enum values
    frequency: Yup.mixed()
        .required("One value must be provided")
        .oneOf(Object.values(FrequencyStatus)), // Validates against the enum values
    notes: Yup.string().required("Notes must be provided").trim().min(6, "Notes must be at least 6 characters long"),
    milestones: Yup.array().of(Yup.string().trim()).required('Milestones must be provided').min(1),
});

const validateUpdatedGoal = Yup.object().shape({
    type: Yup.string().required("Type must be provided").trim().min(2),
    target: Yup.number().required("Target value must be provided").min(2.).integer(),
    currentProgress: Yup.number().required("Current Progress value must be provided").min(2).integer(),
    deadline: Yup.date().required("Deadline must be provided"),
    status: Yup.mixed()
        .required("One value must be provided")
        .oneOf(Object.values(GoalStatus)), // Validates against the enum values
    frequency: Yup.mixed()
        .required("One value must be provided")
        .oneOf(Object.values(FrequencyStatus)), // Validates against the enum values
    notes: Yup.string().required("Notes must be provided").trim().min(6, "Notes must be at least 6 characters long"),
    milestones: Yup.array().of(Yup.string().trim()).required('Milestones must be provided').min(1),
});

const validateNutritionCreation = Yup.object().shape({
    foodItem: Yup.string().required("Food item must provided").trim().min(2),
    calories: Yup.string().required("Calories must provided").trim().min(2),
    protein: Yup.number().required('Protein value must be provided').integer(),
    carbs: Yup.number().required('Carbs value must be provided').integer(),
    fats: Yup.number().required('Fats value must be provided').integer(),
    date: Yup.date().required('Date value must be provided'),
    notes: Yup.string().required("Notes must provided").trim().min(2),
    servingSize: Yup.number().required('ServingSize value must be provided').integer(),
    mealType: Yup.mixed().required('One value must be provided').oneOf(Object.values(MealStatus)),
    fiber: Yup.number().required('Fiber value must be provided').integer(),
    sugar: Yup.number().required('Sugar value must be provided').integer(),
    sodium: Yup.number().required('Sodium value must be provided').integer(),
})

const validateUpdatedNutrition = Yup.object().shape({
    foodItem: Yup.string().required("Food item must provided").trim().min(2),
    calories: Yup.string().required("Calories must provided").trim().min(2),
    protein: Yup.number().required('Protein value must be provided').integer(),
    carbs: Yup.number().required('Carbs value must be provided').integer(),
    fats: Yup.number().required('Fats value must be provided').integer(),
    date: Yup.date().required('Date value must be provided'),
    notes: Yup.string().required("Notes must provided").trim().min(2),
    servingSize: Yup.number().required('ServingSize value must be provided').integer(),
    mealType: Yup.mixed().required('One value must be provided').oneOf(Object.values(MealStatus)),
    fiber: Yup.number().required('Fiber value must be provided').integer(),
    sugar: Yup.number().required('Sugar value must be provided').integer(),
    sodium: Yup.number().required('Sodium value must be provided').integer(),
})

export {
    validateUserRegistration,
    validateUserLogin,
    validateUserAccountUpdate,
    validateProfileRegistration,
    validateUpdatedProfileRegistration,
    validateActivityCreation,
    validateUpdatedActivity,
    validateGoalCreation,
    validateUpdatedGoal,
    validateNutritionCreation,
    validateUpdatedNutrition
}