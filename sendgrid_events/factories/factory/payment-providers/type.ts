export interface IPaymentProvider {
  commission: Commission;
}

export interface Commission {
  (value: number): number;
}

export enum PaymentProvider {
  Visa = 'VISA',
  MasterCard = 'MASTERCARD',
}