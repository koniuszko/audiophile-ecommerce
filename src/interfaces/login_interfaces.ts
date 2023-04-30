export interface LoginSwitchProps {
    register: boolean,
    setRegister: (value: boolean) => void
}

export interface LoginUserProps {
    email: string,
    password: string,
    remember: boolean
}

export interface IModalProps {
    isOpen: boolean;
}

export interface IRegistrationModalProps extends IModalProps {
    message: string;
}