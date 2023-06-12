import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import FinancingForm from '../../components/FinancingForm';

describe('FinancingForm', () => {
  test('submits the form with valid input', async () => {
    const financing = {};
    const number = '1';

    const { getByText, getByLabelText, queryByText } = render(
      <FinancingForm number={number} financing={financing} />,
    );

    const submitButton = getByText('Validate');
    const financingNeedsInput = getByLabelText('Financing Needs');
    const liquidAssetsInput = getByLabelText('Liquid Assets');
    const balanceFromBuildingSocietyInput = getByLabelText(
      'Balance from Building Society',
    );
    const ownManpowerInput = getByLabelText('Own Manpower');
    const priceOfLandInput = getByLabelText('Price of Land');
    const reconstructionCostsInput = getByLabelText('Reconstruction Costs');
    const additionalPurchaseChargesInput = getByLabelText(
      'Additional Purchase Charges',
    );

    act(() => {
      fireEvent.change(financingNeedsInput, { target: { value: '100000' } });
      fireEvent.change(liquidAssetsInput, { target: { value: '50000' } });
      fireEvent.change(balanceFromBuildingSocietyInput, {
        target: { value: '20000' },
      });
      fireEvent.change(ownManpowerInput, { target: { value: '30000' } });
      fireEvent.change(priceOfLandInput, { target: { value: '150000' } });
      fireEvent.change(reconstructionCostsInput, {
        target: { value: '50000' },
      });
      fireEvent.change(additionalPurchaseChargesInput, {
        target: { value: '10000' },
      });

      fireEvent.click(submitButton);
    });

    // Wait for the form submission to be processed
    await waitFor(() => {
      expect(queryByText('Financing Needs is required')).toBeNull();
      expect(queryByText('Liquid Assets is required')).toBeNull();
      expect(
        queryByText('Balance from Building Society is required'),
      ).toBeNull();
      expect(queryByText('Own Manpower is required')).toBeNull();
      expect(queryByText('Price of Land is required')).toBeNull();
      expect(queryByText('Reconstruction Costs is required')).toBeNull();
      expect(queryByText('Additional Purchase Charges is required')).toBeNull();
    });

    // Expectations for LoanForm fields
    const loanAmountInputs = Array.from({ length: 4 }, (_, i) =>
      getByLabelText(`Loan Amount`, {
        selector: `input[id='loanAmount${i + 1}']`,
      }),
    );
    const interestRateInputs = Array.from({ length: 4 }, (_, i) =>
      getByLabelText(`Interest Rate`, {
        selector: `input[id='interestRate${i + 1}']`,
      }),
    );
    const repaymentInPercentInputs = Array.from({ length: 4 }, (_, i) =>
      getByLabelText(`Repayment In Percent`, {
        selector: `input[id='repaymentInPercent${i + 1}']`,
      }),
    );
    const fixedInterestRateInYearsInputs = Array.from({ length: 4 }, (_, i) =>
      getByLabelText(`Fixed Interest Rate In Years`, {
        selector: `input[id='fixedInterestRateInYears${i + 1}']`,
      }),
    );

    act(() => {
      loanAmountInputs.forEach((input, i) => {
        fireEvent.change(input, { target: { value: `${50000 * (i + 1)}` } });
      });
      interestRateInputs.forEach((input, i) => {
        fireEvent.change(input, { target: { value: `${5 * (i + 1)}` } });
      });
      repaymentInPercentInputs.forEach((input, i) => {
        fireEvent.change(input, { target: { value: `${20 * (i + 1)}` } });
      });
      fixedInterestRateInYearsInputs.forEach((input, i) => {
        fireEvent.change(input, { target: { value: `${2 * (i + 1)}` } });
      });
      fireEvent.click(submitButton);
    });

    // Wait for the form submission to be processed
    await waitFor(() => {
      loanAmountInputs.forEach((_input, i) => {
        expect(queryByText(`Loan Amount ${i + 1} is required`)).toBeNull();
      });
      interestRateInputs.forEach((_input, i) => {
        expect(queryByText(`Interest Rate ${i + 1} is required`)).toBeNull();
      });
      repaymentInPercentInputs.forEach((_input, i) => {
        expect(
          queryByText(`Repayment In Percent ${i + 1} is required`),
        ).toBeNull();
      });
      fixedInterestRateInYearsInputs.forEach((_input, i) => {
        expect(
          queryByText(`Fixed Interest Rate In Years ${i + 1} is required`),
        ).toBeNull();
      });
    });

    loanAmountInputs.forEach((_input, i) => {
      expect(financing.Loans[i].loanAmount).toBe(`${50000 * (i + 1)}`);
    });
    interestRateInputs.forEach((_input, i) => {
      expect(financing.Loans[i].interestRate).toBe(`${5 * (i + 1)}`);
    });
    repaymentInPercentInputs.forEach((_input, i) => {
      expect(financing.Loans[i].repaymentInPercent).toBe(`${20 * (i + 1)}`);
    });
    fixedInterestRateInYearsInputs.forEach((_input, i) => {
      expect(financing.Loans[i].fixedInterestRateInYears).toBe(
        `${2 * (i + 1)}`,
      );
    });
  });
});
