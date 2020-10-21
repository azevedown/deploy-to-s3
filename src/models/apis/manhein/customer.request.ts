import { Type } from "../..";

export interface ICustomerRequest {
  id?: number;
  name?: string;
  email?: string;
  document?: string;
  mobile?: string;
  zipCode?: string;
}

export class CustomerRequest {
  id: number | null;
  name: string | null;
  email: string | null;
  document: string | null;
  mobile: string | null;
  zipCode: string | null;

  constructor({
    id,
    name,
    email,
    document,
    mobile,
    zipCode,
  }: ICustomerRequest) {
    this.id = Type.toNumberNull(id);
    this.name = Type.toStringNull(name);
    this.email = Type.toStringNull(email);
    this.document = Type.toStringNull(document?.replace(/[^\d]/g, ""));
    this.mobile = Type.toStringNull(mobile?.replace(/[^\d]/g, ""));
    this.zipCode = Type.toStringNull(zipCode?.replace(/[^\d]/g, ""));
  }
}
