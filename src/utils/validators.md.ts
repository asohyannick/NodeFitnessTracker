import * as Yup from 'yup';
import { MaritalStatus } from '../service/interfac/profile/profile.interfac';
import { InstensityStatus, MoodStatus } from '../service/interfac/activity/activity.interfac';
import { FrequencyStatus, GoalStatus } from '../service/interfac/goal/goal.interfac';
import { MealStatus } from '../service/interfac/nutrition/nutrition.interfac';
import { SleepProblemStatus, SleepQualityStatus } from '../service/interfac/sleep/sleep.interfac';
import { WorkoutGoalPlanStatus } from '../service/interfac/workoutPlan/workoutPlan.interfac';
import { ChallengeStatus } from '../service/interfac/challenge/challenge.interfac';
import { DeviceStatus } from '../service/interfac/device/device.interfac';
import { RecurrencePatternStatus, ReminderStatus } from '../service/interfac/reminder/reminder.interfac';
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
});

const validateSleepCalendar = Yup.object().shape({
    duration: Yup.number().required(' Sleep durationvalue must be provided').integer(),
    quality: Yup.mixed().required('One value must be provided').oneOf(Object.values(SleepQualityStatus)),
    date: Yup.date().required("Date must be provided"),
    notes: Yup.string().required("Notes must provided").trim().min(2),
    sleepStart: Yup.date().required("Sleep start date must be provided"),
    sleepEnd: Yup.date().required("Sleep end date must be provided"), //  Time the user woke up
    interruptions: Yup.number().required('Sleep Interruptions value must be provided').integer(),//  Number of times the user woke up during the night
    sleepDisorders: Yup.mixed().required('One value must be provided').oneOf(Object.values(SleepProblemStatus)), // Optional: Any known sleep disorders
});

const validateUpdatedSleepCalendar = Yup.object().shape({
    duration: Yup.number().required(' Sleep duration value must be provided').integer(),
    quality: Yup.mixed().required('One value must be provided').oneOf(Object.values(SleepQualityStatus)),
    date: Yup.date().required("Date must be provided"),
    notes: Yup.string().required("Notes must provided").trim().min(2),
    sleepStart: Yup.date().required("Sleep start date must be provided"),
    sleepEnd: Yup.date().required("Sleep end date must be provided"), //  Time the user woke up
    interruptions: Yup.number().required('Sleep Interruptions value must be provided').integer(),//  Number of times the user woke up during the night
    sleepDisorders: Yup.mixed().required('One value must be provided').oneOf(Object.values(SleepProblemStatus)), // Optional: Any known sleep disorders
});

const validateWorkoutPlan = Yup.object().shape({
    title: Yup.string().required("Title must provided").trim().min(2),
    description: Yup.string().required("Description must provided").trim().min(2),
    goal: Yup.mixed().required('One value must be provided').oneOf(Object.values(WorkoutGoalPlanStatus)),
    exercises: Yup.array().required("Exercises must be provided").of(Yup.string().trim()),
    duration: Yup.number().required('Workout  duration value must be provided').integer(),
    date: Yup.date().required("Date must be provided"),
})

const validateUpdatedWorkoutPlan = Yup.object().shape({
    title: Yup.string().required("Title must provided").trim().min(2),
    description: Yup.string().required("Description must provided").trim().min(2),
    goal: Yup.mixed().required('One value must be provided').oneOf(Object.values(WorkoutGoalPlanStatus)),
    exercises: Yup.array().required("Exercises must be provided").of(Yup.string().trim()),
    duration: Yup.number().required('Workout  duration value must be provided').integer(),
    date: Yup.date().required("Date must be provided"),

});

const validateCreatedChallenge = Yup.object().shape({
    title: Yup.string().required("Title must provided").trim().min(2),
    description: Yup.string().required("Description must provided").trim().min(2),
    startDate: Yup.date().required("Challenge start date must be provided"),
    endDate: Yup.date().required("Challenge end date must be provided"), //  Time the user woke up
    status: Yup.mixed().required('One value must be provided').oneOf(Object.values(ChallengeStatus)),
    goals: Yup.array().required("Goals to resolve the challenge must be provided").of(Yup.string().trim()),
    rewards: Yup.array().required("Rewards must be provided for resolving the challenge").of(Yup.string().trim()),
});

const validateUpdatedChallenge = Yup.object().shape({
    title: Yup.string().required("Title must provided").trim().min(2),
    description: Yup.string().required("Description must be provided").trim().min(2),
    startDate: Yup.date().required("Challenge start date must be provided"),
    endDate: Yup.date().required("Challenge end date must be provided"), //  Time the user woke up
    status: Yup.mixed().required('One value must be provided').oneOf(Object.values(ChallengeStatus)),
    goals: Yup.array().required("Goals to resolve the challenge must be provided").of(Yup.string().trim()),
    rewards: Yup.array().required("Rewards must be provided for resolving the challenge").of(Yup.string().trim()),
});

const validateCreatedDevice = Yup.object().shape({
    deviceName: Yup.string().required("Device name must be provided").trim().min(2),
    deviceType: Yup.string().required("Device type mustbe  provided").trim().min(2),
    registeredAt: Yup.date().required("Registered date of the device must be provided"),
    serialNumber: Yup.string().required("Serial number  must be  provided").trim().min(2),
    model: Yup.string().required("Model  must be  provided").trim().min(2),
    manucfacturer: Yup.string().required("Manucfacturer must be  provided").trim().min(2),
    lastSync: Yup.date().required("Last sync date must be provided"), //  Time the user woke up
    batteryLevel: Yup.number().required('Battery level value must be provided').integer(),
    status: Yup.mixed().required('One value must be provided').oneOf(Object.values(DeviceStatus)),
});

const validateUpdatedDevice = Yup.object().shape({
    deviceName: Yup.string().required("Device name must be provided").trim().min(2),
    deviceType: Yup.string().required("Device type mustbe  provided").trim().min(2),
    registeredAt: Yup.date().required("Registered date of the device must be provided"),
    serialNumber: Yup.string().required("Serial number  must be  provided").trim().min(2),
    model: Yup.string().required("Model  must be  provided").trim().min(2),
    manucfacturer: Yup.string().required("Manucfacturer must be  provided").trim().min(2),
    lastSync: Yup.date().required("Last sync date must be provided"), //  Time the user woke up
    batteryLevel: Yup.number().required('Battery level value must be provided').integer(),
    status: Yup.mixed().required('One value must be provided').oneOf(Object.values(DeviceStatus)),
});

const validateSendReminderMessage = Yup.object().shape({
    message: Yup.string().required("Message must be provided").min(1).max(250),
    reminderDate: Yup.date().required().min(new Date(), 'Reminder date must be in the future'),
    isRecurring: Yup.boolean().optional(),
    recurrencePattern: Yup.object().shape({
        frequency: Yup.mixed()
            .oneOf(Object.values(RecurrencePatternStatus))
            .required('Frequency is required when recurrence pattern is specified'),
        interval: Yup.number().optional().min(1, 'Interval must be at least 1'),
    }).optional(),
    status: Yup.mixed()
        .oneOf(Object.values(ReminderStatus))
        .required(),
    snoozeDuration: Yup.number().optional().min(1, 'Snooze duration must be at least 1 minute'),
});

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
    validateUpdatedNutrition,
    validateSleepCalendar,
    validateUpdatedSleepCalendar,
    validateWorkoutPlan,
    validateUpdatedWorkoutPlan,
    validateCreatedChallenge,
    validateUpdatedChallenge,
    validateCreatedDevice,
    validateUpdatedDevice,
    validateSendReminderMessage
}