import { NumberHelper } from "c4u-web-components";
import { Type } from "../..";

export interface IAdVahiclePersonalData {
  adId?: number;
  phoneNumber?: string;
  acceptedReceiveSms?: boolean;
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  bank?: string;
  branch?: string;
  account?: string;
  accountVerifyingDigit?: string;
}

export class AdVahiclePersonalDataRequest {
  adId: number | null;
  phoneNumber: string | null;
  acceptedReceiveSms: boolean;
  street: string | null;
  number: string | null;
  complement: string | null;
  neighborhood: string | null;
  city: string | null;
  state: string | null;
  bank: string | null;
  branch: string | null;
  account: string | null;
  accountVerifyingDigit: string | null;

  constructor({
    adId,
    phoneNumber,
    acceptedReceiveSms,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    bank,
    branch,
    account,
    accountVerifyingDigit,
  }: IAdVahiclePersonalData) {
    this.adId = Type.toNumberNull(adId);
    this.phoneNumber = Type.toStringNull(NumberHelper.toNumber(phoneNumber));
    this.street = Type.toStringNull(street);
    this.number = Type.toStringNull(NumberHelper.toNumber(number));
    this.complement = Type.toStringNull(complement);
    this.neighborhood = Type.toStringNull(neighborhood);
    this.city = Type.toStringNull(city);
    this.state = Type.toStringNull(state);
    this.bank = Type.toStringNull(bank);
    this.branch = Type.toStringNull(branch);
    this.account = Type.toStringNull(account);
    this.accountVerifyingDigit = Type.toStringNull(accountVerifyingDigit);
    this.acceptedReceiveSms = !!acceptedReceiveSms;
  }
}
