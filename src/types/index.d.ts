interface UserProp {
    email: string;
    password: string;
}

export interface LoginProps {
    onLogin?: (userData: UserProp, event: React.FormEvent<HTMLFormElement>) => void;
    logo?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    bottomTitle?: string;
    loginPromptMessage?: string;
    disabled?: boolean;
    emailLabel?: string;
    passwordLabel?: string;
    errorVariant?: boolean,
    submitText?: string,
    passwordMinLen?: number,
    passwordMaxLen?: number,
    emailMinLen?: number,
    emailMaxLen?: number,
    emailErrorMessage?: string,
    bottomTitleClass?: string

}

export interface PasswordnputProp {
    label?: string;
    hintText?: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorVariant?: boolean;
    passwordErrorMessage?: string;
}

export interface EmailInputProp {
    label?: string,
    hintText?: string,
    name?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    emailErrorMesage?: string,
    errorVariant?: boolean
}
