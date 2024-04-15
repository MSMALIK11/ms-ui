import React from 'react'
import { forwardRef, ForwardedRef } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { PasswordnputProp } from '../types';
const PasswordControl = forwardRef((
    { label, hintText, name, errorVariant, passwordErrorMessage, ...rest }: PasswordnputProp,
    ref: ForwardedRef<HTMLInputElement>
) => {

    return (
        <div className="input-wraper flex flex-col gap-1">
            <label htmlFor={label} className="text-label text-md">
                {label}
            </label>
            <div tabIndex={0} id='input-password-box' className='input-box relative '>
                <input ref={ref} name={name} {...rest} className=" w-full  p-4  border-2   border-gray-200 rounded-md h-[48px] focus:border-inputFocus focus:border-2 transition-all duration-300" id={label} type='password' placeholder={hintText} />

                {
                    passwordErrorMessage && <div className={`error-message flex mt-1 ${!errorVariant ? 'justify-end' : 'justify-start'}`} >
                        <p className="text-red-500 flex items-center gap-2 text-sm"><BiInfoCircle size={18} />{passwordErrorMessage}</p>
                    </div>
                }

            </div>
        </div>
    );
});

export default PasswordControl;
