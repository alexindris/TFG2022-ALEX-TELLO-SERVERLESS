import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import LoanForm from "./LoanForm";

export default function FinancingForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    props.financing.financingNeeds = data.financingNeeds;
    props.financing.OwnResources = data.OwnResources;
    props.financing.PurchaseCosts = data.PurchaseCosts;
    props.financing.Loans = [data.Loans1, data.Loans2, data.Loans3, data.Loans4];
  }

  return (
    <Accordion.Item eventKey='financing'>
      <Accordion.Header>Financing</Accordion.Header>
      <Accordion.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Financing Needs</Form.Label>
            <Form.Control type="number" {...register("financingNeeds", { required: true })} />
          </Form.Group>
          <h2>Own Resources</h2>
          <Form.Group >
            <Form.Label>Liquid Assets</Form.Label>
            <Form.Control type="number" {...register("OwnResources.liquidAssets", { required: true })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Balance from Building Society</Form.Label>
            <Form.Control type="number" {...register("OwnResources.balanceFromBuildingSociety", { required: true })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Own Manpower</Form.Label>
            <Form.Control type="number" {...register("OwnResources.ownManpower", { required: true })} />
          </Form.Group>
          <h2>Purchase Costs</h2>
          <Form.Group >
            <Form.Label>Price of Land</Form.Label>
            <Form.Control type="number" {...register("PurchaseCosts.priceOfLand", { required: true })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Reconstruction Costs</Form.Label>
            <Form.Control type="number" {...register("PurchaseCosts.reconstructionCosts", { required: true })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Additional Purchase Charges</Form.Label>
            <Form.Control type="number" {...register("PurchaseCosts.additionalPurchaseCharges", { required: true })} />
          </Form.Group>
          <h2>Loans</h2>
          <LoanForm loanNumber='1' register={register} />
          <LoanForm loanNumber='2' register={register} />
          <LoanForm loanNumber='3' register={register} />
          <LoanForm loanNumber='4' register={register} />
          <Button type='submit'  >Validate</Button>
        </Form>

      </Accordion.Body>
    </Accordion.Item >
  );
}
