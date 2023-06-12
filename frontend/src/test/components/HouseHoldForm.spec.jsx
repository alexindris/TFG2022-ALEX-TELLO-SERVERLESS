import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import HouseHoldForm from "../../components/HouseHoldForm";

describe('HouseHoldForm', () => {
    test('submits the form with valid input', async () => {
      const household = {};
      const setHousehold = jest.fn();
  
      const { getByLabelText, getByText } = render(
        <HouseHoldForm household={household} setHousehold={setHousehold} />,
      );
  
      const adultsInHouseholdInput = getByLabelText('Adults in HouseHold');
      const childrenInHouseholdInput = getByLabelText('Children in HouseHold');
      const ibanInput = getByLabelText('IBAN');
      const bicInput = getByLabelText('BIC');
      const salaryFirstApplicantInput = getByLabelText('Salary First Applicant');
      const salarySecondApplicantInput = getByLabelText(
        'Salary Second Applicant',
      );
      const rentalIncomeFinancedPropertyInput = getByLabelText(
        'Rental Income Financed Property',
      );
      const rentalIncomeOtherPropertiesInput = getByLabelText(
        'Rental Income Other Properties',
      );
      const furtherIncomeInput = getByLabelText('Further Income');
      const childBenefitInput = getByLabelText('Child Benefit');
      const assetsOnBankAccountsInput = getByLabelText('Assets on Bank Accounts');
      const assetsOtherInput = getByLabelText('Assets Other');
      const healthInsuranceFirstApplicantInput = getByLabelText(
        'Health Insurance First Applicant',
      );
      const healthInsuranceSecondApplicantInput = getByLabelText(
        'Health Insurance Second Applicant',
      );
      const otherLoansRemainderOfDebtInput = getByLabelText(
        'Other Loans Remainder Of Debt',
      );
      const otherLoansMonthlyRepaymentsInput = getByLabelText(
        'Other Loans Monthly Repayments',
      );
      const costOfLivingInput = getByLabelText('Cost Of Living');
      const rentInput = getByLabelText('Rent');
      const rentNotApplicableInFutureInput = getByLabelText(
        'Rent Not Applicable In Future',
      );
      const submitButton = getByText('Validate');
      act(() => {
  
      fireEvent.change(adultsInHouseholdInput, { target: { value: '2' } });
      fireEvent.change(childrenInHouseholdInput, { target: { value: '1' } });
      fireEvent.change(ibanInput, { target: { value: 'example-iban' } });
      fireEvent.change(bicInput, { target: { value: 'example-bic' } });
      fireEvent.change(salaryFirstApplicantInput, { target: { value: '2000' } });
      fireEvent.change(salarySecondApplicantInput, { target: { value: '1500' } });
      fireEvent.change(rentalIncomeFinancedPropertyInput, {
        target: { value: '500' },
      });
      fireEvent.change(rentalIncomeOtherPropertiesInput, {
        target: { value: '300' },
      });
      fireEvent.change(furtherIncomeInput, { target: { value: '100' } });
      fireEvent.change(childBenefitInput, { target: { value: '50' } });
      fireEvent.change(assetsOnBankAccountsInput, { target: { value: '2000' } });
      fireEvent.change(assetsOtherInput, { target: { value: '1000' } });
      fireEvent.change(healthInsuranceFirstApplicantInput, {
        target: { value: '150' },
      });
      fireEvent.change(healthInsuranceSecondApplicantInput, {
        target: { value: '100' },
      });
      fireEvent.change(otherLoansRemainderOfDebtInput, {
        target: { value: '500' },
      });
      fireEvent.change(otherLoansMonthlyRepaymentsInput, {
        target: { value: '200' },
      });
      fireEvent.change(costOfLivingInput, { target: { value: '1000' } });
      fireEvent.change(rentInput, { target: { value: '800' } });
      fireEvent.change(rentNotApplicableInFutureInput, {
        target: { value: 'true' },
      });
  
      fireEvent.click(submitButton);

    });

    await waitFor(() => {
        // Assert that the form has been submitted
    });
  
    });
  });
  