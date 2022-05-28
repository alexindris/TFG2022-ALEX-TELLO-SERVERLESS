import React from 'react'
import Form from "react-bootstrap/Form";

export default function LoanForm(props) {
  const loanNumber = props.loanNumber;
  const register = props.register;
  return (
    <>
      <h3>Loan {loanNumber}</h3>
      <Form.Group >
        <Form.Label>Loan Amount</Form.Label>
        <Form.Control type="number" {...register(`Loans${loanNumber}.loanAmount`, { required: true })} />
      </Form.Group>
      <Form.Group >
        <Form.Label>Interest Rate</Form.Label>
        <Form.Control type="number" {...register(`Loans${loanNumber}.interestRate`, { required: true })} />
      </Form.Group>
      <Form.Group >
        <Form.Label>Repayment In Percent</Form.Label>
        <Form.Control type="number" {...register(`Loans${loanNumber}.repaymentInPercent`, { required: true })} />
      </Form.Group>
      <Form.Group >
        <Form.Label>Fixed Interest Rate In Years</Form.Label>
        <Form.Control type="number" {...register(`Loans${loanNumber}.fixedInterestRateInYears`, { required: true })} />
      </Form.Group>
    </>
  )
}
