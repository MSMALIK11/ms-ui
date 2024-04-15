
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputControl from '../components/InputControl';
import PasswordControl from '../components/PasswordControl';
import { data } from '../data/data';
import { brandLogo, loginBg } from '../assets/assets';
import { LoginProps } from '../types';
import '../index.css';
interface UserProp {
    email: string;
    password: string;
}
const Login: React.FC<LoginProps> = ({
    onLogin,
    logo = brandLogo,
    bottomTitle = data.botomTitleDefault,
    loginPromptMessage = data.loginPromptMessageDefault,
    disabled = false,
    emailLabel = data.emailLabelDefault,
    passwordLabel = data.passwordLabelDefault,
    errorVariant,
    submitText = data.submitTextDefault,
    emailMinLen = data.emailMinLen,
    emailMaxLen = data.emailMaxLen,
    passwordMinLen = data.passwordMinLen,
    passwordMaxLen = data.passwordMaxLen,
    emailErrorMessage = data.emailErrorMessage,
    bottomTitleClass

}) => {
    const schema = yup.object().shape({
        email: yup.string().required("Email is required").min(emailMinLen).max(emailMaxLen).email(emailErrorMessage),
        password: yup.string().required("Password is required").min(passwordMinLen).max(passwordMaxLen),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm<UserProp>({
        resolver: yupResolver(schema)
    });

    const onSubmitHandler = (formData: UserProp, event: React.FormEvent<HTMLFormElement>) => {
        // Call the onSubmit prop function with form data
        event.preventDefault()
        if (!formData.email && !formData.password) return
        if (onLogin) {
            onLogin(formData);
        }
        reset();

    };


    return (
        <div id='login-wraper'>

            <div id='login-left-content'>
                <img src={loginBg} alt="login-background" />
                <div className='brand-logo'>
                    <img src={logo || brandLogo} alt="brand-logo" />
                </div>
                <h1 className={`${bottomTitleClass} bottomTitle`}>{bottomTitle}</h1>
            </div>
            <div id='login-right-content'>
                <div id='login-right-box'>
                    <form action='#' onSubmit={(event) => handleSubmit((formData) => onSubmitHandler(formData, event))} >
                        <h1 className='text-heading'>{loginPromptMessage}</h1>
                        <InputControl   {...register('email')} emailErrorMesage={errors?.email?.message} errorVariant={errorVariant} name={"email"} label={emailLabel} hintText='Enter Your Email' />
                        <PasswordControl maxLength={20} {...register('password')} passwordErrorMessage={errors?.password?.message} errorVariant={errorVariant} name={"password"} label={passwordLabel} hintText='Enter Your Password' />
                        <button type='submit' disabled={disabled} className={`bg-brand mt-4 shadow-sm cursor-pointer ${disabled ? 'bg-brand/50 cursor-not-allowed' : 'hover:bg-brand'} text-white rounded-lg h-12 transition-all duration-300`}>{submitText}</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;

