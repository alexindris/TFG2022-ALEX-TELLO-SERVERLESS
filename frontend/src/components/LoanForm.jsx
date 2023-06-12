import React from 'react';
import Form from 'react-bootstrap/Form';

export default function LoanForm(props) {
  const { loanNumber, register } = props;

  return (
    <>
      <h3>Loan {loanNumber}</h3>
      <Form.Group>
        <Form.Label htmlFor={`loanAmount${loanNumber}`}>Loan Amount</Form.Label>
        <Form.Control
          type="number"
          id={`loanAmount${loanNumber}`}
          {...register(`Loans${loanNumber}.loanAmount`, { required: true })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor={`interestRate${loanNumber}`}>
          Interest Rate
        </Form.Label>
        <Form.Control
          type="number"
          id={`interestRate${loanNumber}`}
          {...register(`Loans${loanNumber}.interestRate`, { required: true })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor={`repaymentInPercent${loanNumber}`}>
          Repayment In Percent
        </Form.Label>
        <Form.Control
          type="number"
          id={`repaymentInPercent${loanNumber}`}
          {...register(`Loans${loanNumber}.repaymentInPercent`, {
            required: true,
          })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor={`fixedInterestRateInYears${loanNumber}`}>
          Fixed Interest Rate In Years
        </Form.Label>
        <Form.Control
          type="number"
          id={`fixedInterestRateInYears${loanNumber}`}
          {...register(`Loans${loanNumber}.fixedInterestRateInYears`, {
            required: true,
          })}
        />
      </Form.Group>
    </>
  );
}
