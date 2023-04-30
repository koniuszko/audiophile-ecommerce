export interface UserDataProps {
    data: {
        _id: string,
        name: string,
        email: string,
        role: string,
        orders: []
    }
}