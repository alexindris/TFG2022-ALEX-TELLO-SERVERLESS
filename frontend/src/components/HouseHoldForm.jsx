import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
export default function HouseHoldForm(props) {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false)
  const decoratedOnClick = useAccordionButton(props.number);
  const onSubmit = (data) => {
    Object.assign(props.household, data);
    setSubmitted(true)
    decoratedOnClick();
  };


  return (
    <Accordion.Item eventKey='household' >

      <Accordion.Header>Household  {submitted ? "✔️" : ''}</Accordion.Header>
      <Accordion.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Household</h2>
          <Form.Group >
            <Form.Label>Adults in Household</Form.Label>
            <Form.Control type="number" {...register("adultsInHousehold", { required: true, min: 1 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Children in Household</Form.Label>
            <Form.Control type="number" {...register("childrenInHousehold", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>IBAN</Form.Label>
            <Form.Control type="text" {...register("iban", { required: true })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>BIC</Form.Label>
            <Form.Control type="text" {...register("bic", { required: true })} />
          </Form.Group>
          <h2>Earning Capacity</h2>
          <Form.Group >
            <Form.Label>Salary First Applicant</Form.Label>
            <Form.Control type="number" {...register("EarningCapacity.salaryFirstApplicant", { required: true, min: 1000 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Salary Second Applicant</Form.Label>
            <Form.Control type="number" {...register("EarningCapacity.salarySecondApplicant", { required: true, min: 1000 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Rental Income Financed Property</Form.Label>
            <Form.Control type="number" {...register("EarningCapacity.rentalIncomeFinancedProperty", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Rental Income Other Properties</Form.Label>
            <Form.Control type="number" {...register("EarningCapacity.rentalIncomeOtherProperties", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Further Income</Form.Label>
            <Form.Control type="number" {...register("EarningCapacity.furtherIncome", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Child Benefit</Form.Label>
            <Form.Control type="number" {...register("EarningCapacity.childBenefit", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Assets on Bank Accounts</Form.Label>
            <Form.Control type="number" {...register("EarningCapacity.assetsOnBankAccounts", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Assets Other</Form.Label>
            <Form.Control type="number" {...register("EarningCapacity.assetsOther", { required: true, min: 0 })} />
          </Form.Group>
          <h2>Monthly Expenses</h2>
          <Form.Group >
            <Form.Label>Health Insurance First Applicant</Form.Label>
            <Form.Control type="number" {...register("MonthlyExpenses.healthInsuranceFirstApplicant", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Health Insurance Second Applicant</Form.Label>
            <Form.Control type="number" {...register("MonthlyExpenses.healthInsuranceSecondApplicant", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Other Loans Remainder Of Debt</Form.Label>
            <Form.Control type="number" {...register("MonthlyExpenses.otherLoansRemainderOfDebt", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Other Loans Monthly Repayments</Form.Label>
            <Form.Control type="number" {...register("MonthlyExpenses.otherLoansMonthlyRepayments", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Cost Of Living</Form.Label>
            <Form.Control type="number" {...register("MonthlyExpenses.costOfLiving", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Rent</Form.Label>
            <Form.Control type="number" {...register("MonthlyExpenses.rent", { required: true, min: 0 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Rent Not Applicable In Future</Form.Label>
            <Form.Control as="select" {...register("MonthlyExpenses.rentNotApplicableInFuture", { required: true })}>
              <option value="" hidden></option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Validate
          </Button>
        </Form>

      </Accordion.Body>

    </Accordion.Item >
  );
}
