import { Document, Types } from "mongoose";
export enum ProfileVisibilityStatus {
    PUBLIC = 'PUBLIC',
    FRIENDS = 'FRIENDS',
    PRIVATE = 'PRIVATE',
};
export enum ActivityVisibilityStatus {
    PUBLIC = 'PUBLIC',
    FRIENDS = 'FRIENDS',
    PRIVATE = 'PRIVATE',
};
export enum SearchVisibilityStatus {
    VISIBLE = 'VISIBLE',
    HIDDEN = 'HIDDEN',
};
export enum UnitsDistanceStatus {
    METRICS = 'METRICS',
    IMPERIAL = 'IMPERIAL',
};
export enum UnitsWeightStatus {
    KILOGRAMS = 'KILOGRAMS',
    POUNDS = 'POUNDS',
};
export enum UnitsTemperatureStatus {
    CELSIUS = 'CELSIUS',
    FAHRENHEIT = 'FAHRENHEIT',
};
export enum ThemeStatus {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
};

export enum LanguageStatus {
    ENGLISH = 'ENGLISH',
    FRENCH = 'FRENCH',
    SPANISH = 'SPANISH',
    GERMAN = 'GERMAN',
    CHINESE = 'CHINESE',
    JAPANESE = 'JAPANESE',
};

export interface ISettingInterfac extends Document {
    userId: Types.ObjectId;
    privacy: {
        profileVisibility: ProfileVisibilityStatus;
        activityVisibility: ActivityVisibilityStatus;
        searchVisibility: SearchVisibilityStatus; // Optional: Visibility in search results
    },
    notifications: {
        email: boolean;
        push: boolean;
        sms: boolean; // Optional: SMS notifications
    },
    units: {
        distance: UnitsDistanceStatus;
        weight: UnitsWeightStatus;
        temperature: UnitsTemperatureStatus; // Optional: Temperature unit
    },
    language: LanguageStatus, // Optional: Preferred language
    theme: ThemeStatus; // Optional: UI theme preferenc
    date: Date;
}