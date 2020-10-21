export interface CustomerAd {
  bank: string;
  agency: string;
  account: string;
  digit: string;
  birthDate?: string;
  name: string;
  personalDocument: string;
  email: string;
  phoneNumber?: string;
  cellphone: string;
  acceptSms?: boolean;
  zipCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  kbbStateId?: number;  
}
