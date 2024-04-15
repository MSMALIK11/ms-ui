
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputControl from '../components/InputControl';
import PasswordControl from '../components/PasswordControl';
import { data } from '../data/data';
import { brandLogo, loginBg } from '../assets/assets';
import { LoginProps } from '../types';
import './login.css'
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

    const onSubmitHandler = (formData: UserProp) => {
        // Call the onSubmit prop function with form data

        if (!formData.email && !formData.password) return
        if (onLogin) {
            onLogin(formData);
        }
        reset();

    };


    return (
        <div id='login-wraper' className='flex items-center'>
            <div id='login-left-content' className='relative w-1/2 h-screen'>
                <img src={loginBg} alt="login-background" className='h-screen w-[100%]' />
                <div className='brand-logo absolute top-12 left-12 w-[100%]'>
                    <img src={logo || brandLogo} alt="brand-logo" />
                </div>
                <h1 className={`${bottomTitleClass} bottomTitle absolute text-white bottom-[100px] italic left-12 lg:text-5xl md:text-4xl w-[80%]`}>{bottomTitle}</h1>
            </div>
            <div id='login-right-content' className='flex-1 h-screen'>
                <div id='login-right-box' className='flex flex-col items-center justify-center h-screen'>
                    <form onSubmit={(e) => handleSubmit(onSubmitHandler(e))} className='flex flex-col gap-4 mt-10'>
                        <h1 className='text-heading text-left text-[16px]'>{loginPromptMessage}</h1>
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

