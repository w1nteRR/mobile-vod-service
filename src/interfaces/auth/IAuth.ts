export interface ISignIn {
    password: string,
    email: string
}

export interface ISignUp {
    password: string,
    confirmPassword: string,
    email: string,
    username: string
}

export interface IUser {
    token: string,
    userId: string,
    username: string,
    email: string,
    isSubscriber: boolean
}

export interface IJwt {
    exp: number,
    iat: number,
    userId: string
}