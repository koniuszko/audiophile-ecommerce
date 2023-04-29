export interface LoginSwitchProps {
    register: boolean,
    setRegister: (value: boolean) => void
}

export interface LoginUserProps {
    email: string,
    password: string
}