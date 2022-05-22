import { NotEmpty } from "validator.ts/decorator/Validation";

export class Address {
  private street: string;
  private city: string;
  private postCode: string;

  constructor(street: string, city: string, postCode: string) {
    this.street = street;
    this.city = city;
    this.postCode = postCode;
  }

  getStreet(): string {
    return this.street;
  }

  getCity(): string {
    return this.city;
  }

  getPostCode(): string {
    return this.postCode;
  }

  setStreet(street: string): void {
    this.street = street;
  }
}
