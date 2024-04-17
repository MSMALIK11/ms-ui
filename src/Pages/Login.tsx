
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputControl from '../components/InputControl';
import PasswordControl from '../components/PasswordControl';
import { data } from '../data/data';
import { brandLogo, loginBg, loader } from '../assets/assets';
import type { LoginProps } from '../types';
import '../index.css';
interface UserProp {
    email: string;
    password: string;
}
const Login: React.FC<LoginProps> = ({
    onLogin,
    logo = brandLogo,
    bottomTitle = data.botomTitleDefault,
    bottomTitleClass,
    loginPromptMessage = data.loginPromptMessageDefault,
    disabled = false,
    emailLabel = data.emailLabelDefault,
    passwordLabel = data.passwordLabelDefault,
    errorVariant,
    submitText = data.submitTextDefault,
    passwordMaxLen = data.passwordMaxLen,
    btnClass,
    logoClass,
    isLoading

}: LoginProps) => {
    const schema = yup.object().shape({
        email: yup.string().required("Email is required"),
        password: yup.string().required("Password is required").max(passwordMaxLen),
    });
    const { register, handleSubmit, formState: { errors } } = useForm<UserProp>({
        resolver: yupResolver(schema)
    });
    const onFormSubmitClick = (formData: UserProp) => {
        if (!formData.email && !formData.password) return
        if (onLogin) {
            onLogin(formData);
        }
    }

    return (
        <div id='login-wraper'>
            <div id='login-left-content'>
                <img src={loginBg} alt="login-background" />
                <div className={`brand-logo ${logoClass}`}>
                    <img src={logo || brandLogo} alt="brand-logo" />
                </div>
                <h1 className={`${bottomTitleClass} bottomTitle`}>{bottomTitle}</h1>
            </div>
            <div id='login-right-content'>
                <div id='login-right-box'>
                    <div className='login-form'>
                        <h1 className='login-title'>{loginPromptMessage}</h1>
                        <InputControl    {...register('email')} emailErrorMesage={errors?.email?.message} errorVariant={errorVariant} name={"email"} label={emailLabel} hintText='Enter Your Email' />
                        <PasswordControl maxLength={20} {...register('password')} passwordErrorMessage={errors?.password?.message} errorVariant={errorVariant} name={"password"} label={passwordLabel} hintText='Enter Your Password' />
                        <button id='login-button' onClick={handleSubmit(onFormSubmitClick)} disabled={disabled} className={`${btnClass} ${disabled ? 'bg-brand/50 cursor-not-allowed disabled' : 'hover:bg-brand'}`}>
                            {isLoading ? <img src={loader} alt="loader" /> : submitText}
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;

