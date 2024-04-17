interface UserProp {
    email: string;
    password: string;
}

interface LoginProps {
    onLogin?: (userData: UserProp) => void;
    logo?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    bottomTitle?: string;
    bottomTitleClass?: string;
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
    btnClass?: string,
    logoClass?: string,
    isLoading?: boolean

}

interface PasswordnputProp {
    label?: string;
    hintText?: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorVariant?: boolean;
    passwordErrorMessage?: string;
}

interface EmailInputProp {
    label?: string,
    hintText?: string,
    name?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    emailErrorMesage?: string,
    errorVariant?: boolean
}
interface Login {
    Login: React.JSX.Element
}

export type { EmailInputProp, Login, LoginProps, PasswordnputProp };
