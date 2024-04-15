import React from 'react'
import { forwardRef, ForwardedRef } from 'react'
import { BiInfoCircle } from "react-icons/bi"
import { EmailInputProp } from '../types'
const InputControl = forwardRef(({ label, hintText, name, onChange, emailErrorMesage, errorVariant, ...rest }: EmailInputProp,
    ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className="input-wraper flex flex-col gap-1">
            <label htmlFor={label} className="text-label text-md">
                {label}
            </label>
            <div className='input-box'>
                <input {...rest} ref={ref} name={name} onChange={onChange} id={label} type="text" placeholder={hintText} />
                {
                    emailErrorMesage && <div className={`error-message`}>
                        <p className="text-red-500 flex items-center gap-1 text-sm"><BiInfoCircle size={18} />{emailErrorMesage}</p>
                    </div>
                }
            </div>

        </div>
    )
})

export default InputControl