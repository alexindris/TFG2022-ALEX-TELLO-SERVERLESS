import {
  array,
  boolean,
  define,
  number,
  object,
  date,
  string,
  enums,
  integer,
} from 'superstruct'

import {Business, Employment, MaritalStatus} from '@prisma/client'



//Helpers
const isUuid = (value: any) => {
  if(typeof value !== 'string')  return false
  return value.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
}


const Uuid = define('Uuid', isUuid)

// Types

const OwnResourcesValidator = object({
  liquidAssets: number(),
  balanceFromBuildingSociety : number(),
  ownManpower: number(),
})

const PurchaseCostsValidator = object({
  priceOfLand : number(),
  reconstructionCosts : number(),
  additionalPurchaseCharges: number(),
})

const LoanValidator = object({
  loanAmount : number(),
  interestRate : number(),
  repaymentInPercent: number(),
  fixedInterestRateInYears : number()
})


const EarningCapacityValidator = object({
  salaryFirstApplicant : number(),
  salarySecondApplicant : number(),
  rentalIncomeFinancedProperty : number(),
  rentalIncomeOtherProperties : number(),
  furtherIncome : number(),
  childBenefit : number(),
  assetsOnBankAccounts : number(),
  assetsOther : number(),

})


const MonthlyExpensesValidator = object({
  healthInsuranceFirstApplicant : number(),
  healthInsuranceSecondApplicant : number(),
  otherLoansRemainderOfDebt : number(),
  otherLoansMonthlyRepayments : number(),
  costOfLiving : number(),
  rent : number(),
  rentNotApplicableInFuture : boolean(),
})

// Main Validators
export const ApplicantValidator = object({
  applicantNumber: Uuid,
  firstName: string(),
  lastName: string(),
  employer: string(),
  employedSince: date(),
  birthday: date(),
  Bussiness: enums(Object.values(Business)),
  Employment: enums(Object.values(Employment)),
  MaritalStatus: enums(Object.values(MaritalStatus)),

})

export const FinancingValidator = object({
  financingNeeds : number(),
  OwnResources: OwnResourcesValidator,
  PurchaseCosts: PurchaseCostsValidator,
  Loan: array(LoanValidator),

})

export const HouseHold = object({
  adultsInHousehold: integer(),
  childrenInHousehold: integer(),
  iban : string(),
  bic: string(),
  EarningsCapacity: EarningCapacityValidator,
  MonthlyExpenses: MonthlyExpensesValidator,

})


export const ApplicationValidator = object({
  id : Uuid,
  FirstApplicant: ApplicantValidator,
  SecondApplicant: ApplicantValidator,
  Financing: FinancingValidator,
  HouseHold: HouseHold,
});