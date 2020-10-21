export interface Address {
    zipCode: string;
    street?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
}

export interface CustomerModel {
    id: number;
    idAuth0: string;
    name: string;
    email: string;
    mobile: string;
    document: string;
    phoneNumber?: any;
    birthDate: Date;
    acceptedReceiveSms: boolean;
    address: Address;
}