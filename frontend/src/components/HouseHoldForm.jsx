import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

export default function HouseHoldForm({ household, setHousehold }) {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const decoratedOnClick = useAccordionButton(setHousehold);
  const onSubmit = (data) => {
    Object.assign(household, data);
    setSubmitted(true);
    decoratedOnClick();
  };

  return (
    <Accordion.Item eventKey="household">
      <Accordion.Header>
        HouseHold
        {submitted ? '✔️' : ''}
      </Accordion.Header>
      <Accordion.Body>
        <Form onSubmit={handleSubmit(onSubmit)} name="HouseHold">
          <h2>HouseHold</h2>
          <Form.Group>
            <Form.Label htmlFor="adultsInHousehold">
              Adults in HouseHold
            </Form.Label>
            <Form.Control
              type="number"
              id="adultsInHousehold"
              {...register('adultsInHousehold', { required: true, min: 1 })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="childrenInHousehold">
              Children in HouseHold
            </Form.Label>
            <Form.Control
              type="number"
              id="childrenInHousehold"
              {...register('childrenInHousehold', { required: true, min: 0 })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="iban">IBAN</Form.Label>
            <Form.Control
              type="text"
              id="iban"
              {...register('iban', { required: true })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="bic">BIC</Form.Label>
            <Form.Control
              type="text"
              id="bic"
              {...register('bic', { required: true })}
            />
          </Form.Group>
          <h2>Earning Capacity</h2>
          <Form.Group>
            <Form.Label htmlFor="salaryFirstApplicant">
              Salary First Applicant
            </Form.Label>
            <Form.Control
              type="number"
              id="salaryFirstApplicant"
              {...register('EarningCapacity.salaryFirstApplicant', {
                required: true,
                min: 1000,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="salarySecondApplicant">
              Salary Second Applicant
            </Form.Label>
            <Form.Control
              type="number"
              id="salarySecondApplicant"
              {...register('EarningCapacity.salarySecondApplicant', {
                required: true,
                min: 1000,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="rentalIncomeFinancedProperty">
              Rental Income Financed Property
            </Form.Label>
            <Form.Control
              type="number"
              id="rentalIncomeFinancedProperty"
              {...register('EarningCapacity.rentalIncomeFinancedProperty', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="rentalIncomeOtherProperties">
              Rental Income Other Properties
            </Form.Label>
            <Form.Control
              type="number"
              id="rentalIncomeOtherProperties"
              {...register('EarningCapacity.rentalIncomeOtherProperties', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="furtherIncome">Further Income</Form.Label>
            <Form.Control
              type="number"
              id="furtherIncome"
              {...register('EarningCapacity.furtherIncome', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="childBenefit">Child Benefit</Form.Label>
            <Form.Control
              type="number"
              id="childBenefit"
              {...register('EarningCapacity.childBenefit', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="assetsOnBankAccounts">
              Assets on Bank Accounts
            </Form.Label>
            <Form.Control
              type="number"
              id="assetsOnBankAccounts"
              {...register('EarningCapacity.assetsOnBankAccounts', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="assetsOther">Assets Other</Form.Label>
            <Form.Control
              type="number"
              id="assetsOther"
              {...register('EarningCapacity.assetsOther', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <h2>Monthly Expenses</h2>
          <Form.Group>
            <Form.Label htmlFor="healthInsuranceFirstApplicant">
              Health Insurance First Applicant
            </Form.Label>
            <Form.Control
              type="number"
              id="healthInsuranceFirstApplicant"
              {...register('MonthlyExpenses.healthInsuranceFirstApplicant', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="healthInsuranceSecondApplicant">
              Health Insurance Second Applicant
            </Form.Label>
            <Form.Control
              type="number"
              id="healthInsuranceSecondApplicant"
              {...register('MonthlyExpenses.healthInsuranceSecondApplicant', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="otherLoansRemainderOfDebt">
              Other Loans Remainder Of Debt
            </Form.Label>
            <Form.Control
              type="number"
              id="otherLoansRemainderOfDebt"
              {...register('MonthlyExpenses.otherLoansRemainderOfDebt', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="otherLoansMonthlyRepayments">
              Other Loans Monthly Repayments
            </Form.Label>
            <Form.Control
              type="number"
              id="otherLoansMonthlyRepayments"
              {...register('MonthlyExpenses.otherLoansMonthlyRepayments', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="costOfLiving">Cost Of Living</Form.Label>
            <Form.Control
              type="number"
              id="costOfLiving"
              {...register('MonthlyExpenses.costOfLiving', {
                required: true,
                min: 0,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="rent">Rent</Form.Label>
            <Form.Control
              type="number"
              id="rent"
              {...register('MonthlyExpenses.rent', { required: true, min: 0 })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="rentNotApplicableInFuture">
              Rent Not Applicable In Future
            </Form.Label>
            <Form.Control
              as="select"
              id="rentNotApplicableInFuture"
              {...register('MonthlyExpenses.rentNotApplicableInFuture', {
                required: true,
              })}
            >
              <option hidden> </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Validate
          </Button>
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
}
