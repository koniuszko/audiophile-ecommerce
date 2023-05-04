import * as Yup from "yup";
import {emailRegex, passwordRegex} from "@/utils/regex";

export const RegisterFormValidator = Yup.object({
    name: Yup.string().required('Required').min(3, "Must be at least 3 characters long").max(30, 'Must be 30 characters or less'),
    email: Yup.string().required('Required').matches(emailRegex, "Email is wrong!"),
    password: Yup.string().required('Required').min(3, "Must be at least 3 characters long").max(20, 'Must be 20 characters or less').matches(passwordRegex, "At least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters"),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), undefined], "Passwords must match"),
    acceptedTerms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
})