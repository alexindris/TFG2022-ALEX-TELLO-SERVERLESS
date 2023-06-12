import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import LoanForm from './LoanForm';

export default function FinancingForm({ number, financing }) {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const decoratedOnClick = useAccordionButton(number);
  const onSubmit = (data) => {
    financing.financingNeeds = data.financingNeeds;
    financing.OwnResources = data.OwnResources;
    financing.PurchaseCosts = data.PurchaseCosts;
    financing.Loans = [data.Loans1, data.Loans2, data.Loans3, data.Loans4];
    setSubmitted(true);
    decoratedOnClick();
  };

  return (
    <Accordion.Item eventKey="financing">
      <Accordion.Header>
        Financing
        {submitted ? '✔️' : ''}
      </Accordion.Header>
      <Accordion.Body>
        <Form onSubmit={handleSubmit(onSubmit)} name="Financing">
          <Form.Group>
            <Form.Label htmlFor="financingNeeds">Financing Needs</Form.Label>
            <Form.Control
              type="number"
              id="financingNeeds"
              {...register('financingNeeds', { required: true })}
            />
          </Form.Group>
          <h2>Own Resources</h2>
          <Form.Group>
            <Form.Label htmlFor="liquidAssets">Liquid Assets</Form.Label>
            <Form.Control
              type="number"
              id="liquidAssets"
              {...register('OwnResources.liquidAssets', { required: true })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="balanceFromBuildingSociety">
              Balance from Building Society
            </Form.Label>
            <Form.Control
              type="number"
              id="balanceFromBuildingSociety"
              {...register('OwnResources.balanceFromBuildingSociety', {
                required: true,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="ownManpower">Own Manpower</Form.Label>
            <Form.Control
              type="number"
              id="ownManpower"
              {...register('OwnResources.ownManpower', { required: true })}
            />
          </Form.Group>
          <h2>Purchase Costs</h2>
          <Form.Group>
            <Form.Label htmlFor="priceOfLand">Price of Land</Form.Label>
            <Form.Control
              type="number"
              id="priceOfLand"
              {...register('PurchaseCosts.priceOfLand', { required: true })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="reconstructionCosts">
              Reconstruction Costs
            </Form.Label>
            <Form.Control
              type="number"
              id="reconstructionCosts"
              {...register('PurchaseCosts.reconstructionCosts', {
                required: true,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="additionalPurchaseCharges">
              Additional Purchase Charges
            </Form.Label>
            <Form.Control
              type="number"
              id="additionalPurchaseCharges"
              {...register('PurchaseCosts.additionalPurchaseCharges', {
                required: true,
              })}
            />
          </Form.Group>
          <h2>Loans</h2>
          <LoanForm loanNumber="1" register={register} />
          <LoanForm loanNumber="2" register={register} />
          <LoanForm loanNumber="3" register={register} />
          <LoanForm loanNumber="4" register={register} />
          <Button type="submit">Validate</Button>
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
}
