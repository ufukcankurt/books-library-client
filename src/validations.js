import React from 'react'
import { object, string, number, date } from 'yup';

const RegisterSchema = object({
    full_name: string().required(),
    username: number().required().positive().integer(),
    email: string().email().required(),
    password: string().url().nullable().min(5).required(),
    gender_identity: string().required()
});

export default RegisterSchema


