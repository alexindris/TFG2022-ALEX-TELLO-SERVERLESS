/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

Cypress.Commands.overwrite('type', (originalFn, subject, text, options = {}) => {
  options.delay = 100

  return originalFn(subject, text, options)
})

describe("fill form", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Has a main screen", () => {
    cy.get("button").contains("Yes, I want to apply - >").click();

    cy.location("pathname").should("eq", "/application");

    cy.wait(2000);
  });

  it("You can fill the first applicant form", () => {
    cy.get("button").contains("Applicant 1").click();
    cy.get("form[name=Applicant1]").within(() => {
      cy.get("input[name=firstName]").type("John");
      cy.get("input[name=lastName]").type("Doe");
      cy.get("input[name=birthday]").type("1990-01-01");
      cy.get("select[name=MaritalStatus]").select("SINGLE");
      cy.get("input[name='Address.street']").type("123 Main St");
      cy.get("input[name='Address.city']").type("Anytown");
      cy.get("input[name='Address.postCode']").type("12345");
      cy.get("select[name=Business]").select("BANKING");
      cy.get("select[name=Employment]").select("EMPLOYEE");
      cy.get("input[name=employer]").type("Bank of America");
      cy.get("input[name=employedSince]").type("2000-01-01");
      cy.get("button").contains("Validate").click();
    });
    cy.wait(2000);
  });

  it("You can fill the second applicant form", () => {
    cy.get("button").contains("Applicant 2").click();
    cy.get("form[name=Applicant2]").within(() => {
      cy.get("input[name=firstName]").type("Janine");
      cy.get("input[name=lastName]").type("Duude");
      cy.get("input[name=birthday]").type("1990-01-01");
      cy.get("select[name=MaritalStatus]").select("SINGLE");
      cy.get("input[name='Address.street']").type("123 Main St");
      cy.get("input[name='Address.city']").type("Anytown");
      cy.get("input[name='Address.postCode']").type("12345");
      cy.get("select[name=Business]").select("BANKING");
      cy.get("select[name=Employment]").select("EMPLOYEE");
      cy.get("input[name=employer]").type("Bank of America");
      cy.get("input[name=employedSince]").type("2000-01-01");
      cy.get("button").contains("Validate").click();
    });
  });

  it("You can fill the financing form", () => {
    cy.get("button").contains("Financing").click();
    cy.get("form[name=Financing]").within(() => {
      cy.get("input[name=financingNeeds]").type("100");
      cy.get("input[name='OwnResources.liquidAssets']").type("100");
      cy.get("input[name='OwnResources.balanceFromBuildingSociety']").type(
        "100"
      );
      cy.get("input[name='OwnResources.ownManpower']").type("100");
      cy.get("input[name='PurchaseCosts.priceOfLand']").type("100");
      cy.get("input[name='PurchaseCosts.reconstructionCosts']").type("100");
      cy.get("input[name='PurchaseCosts.additionalPurchaseCharges']").type(
        "100"
      );

      cy.get("input[name='Loans1.loanAmount']").type("100");
      cy.get("input[name='Loans1.interestRate']").type("100");
      cy.get("input[name='Loans1.repaymentInPercent']").type("100");
      cy.get("input[name='Loans1.fixedInterestRateInYears']").type("100");

      cy.get("input[name='Loans2.loanAmount']").type("100");
      cy.get("input[name='Loans2.interestRate']").type("100");
      cy.get("input[name='Loans2.repaymentInPercent']").type("100");
      cy.get("input[name='Loans2.fixedInterestRateInYears']").type("100");

      cy.get("input[name='Loans3.loanAmount']").type("100");
      cy.get("input[name='Loans3.interestRate']").type("100");
      cy.get("input[name='Loans3.repaymentInPercent']").type("100");
      cy.get("input[name='Loans3.fixedInterestRateInYears']").type("100");

      cy.get("input[name='Loans4.loanAmount']").type("100");
      cy.get("input[name='Loans4.interestRate']").type("100");
      cy.get("input[name='Loans4.repaymentInPercent']").type("100");
      cy.get("input[name='Loans4.fixedInterestRateInYears']").type("100");

      cy.get("button").contains("Validate").click();
    });
  });



  it("should fill household form", () => {
    cy.get("button").contains("HouseHold").click();
    cy.get("form[name=HouseHold]").within(() => {
      cy.get("input[name=adultsInHousehold]").type("2");
      cy.get("input[name=childrenInHousehold]").type("1");
      cy.get("input[name=iban]").type("DE89370400440532013000");
      cy.get("input[name=bic]").type("BFSWDE33BER");
      cy.get("input[name='EarningCapacity.salaryFirstApplicant']").type("2000");
      cy.get("input[name='EarningCapacity.salarySecondApplicant']").type(
        "1000"
      );
      cy.get("input[name='EarningCapacity.rentalIncomeFinancedProperty']").type(
        "500"
      );
      cy.get("input[name='EarningCapacity.rentalIncomeOtherProperties']").type(
        "0"
      );
      cy.get("input[name='EarningCapacity.furtherIncome']").type("0");
      cy.get("input[name='EarningCapacity.childBenefit']").type("0");
      cy.get("input[name='EarningCapacity.assetsOnBankAccounts']").type("0");
      cy.get("input[name='EarningCapacity.assetsOther']").type("0");
      cy.get(
        "input[name='MonthlyExpenses.healthInsuranceFirstApplicant']"
      ).type("0");
      cy.get(
        "input[name='MonthlyExpenses.healthInsuranceSecondApplicant']"
      ).type("0");
      cy.get("input[name='MonthlyExpenses.otherLoansRemainderOfDebt']").type(
        "0"
      );
      cy.get("input[name='MonthlyExpenses.otherLoansMonthlyRepayments']").type(
        "0"
      );
      cy.get("input[name='MonthlyExpenses.costOfLiving']").type("0");
      cy.get("input[name='MonthlyExpenses.rent']").type("0");
      cy.get("select[name='MonthlyExpenses.rentNotApplicableInFuture']").select(
        "false"
      );
      cy.get("button").contains("Validate").click();
    });
  });

  it("can submit form", () => {
    cy.get("button").contains("Send").click();
    cy.wait(3000);
  });
});
