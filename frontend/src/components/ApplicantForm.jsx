import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';



export default function ApplicantForm(props) {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false)
  const decoratedOnClick = useAccordionButton(props.number);
  const onSubmit = (data) => {
    Object.assign(props.user, data);
    setSubmitted(true)
    decoratedOnClick();
  };


  return (
    <Accordion.Item eventKey={props.number ?? '0'}>
      <Accordion.Header>Applicant {props.number ?? ''} {submitted ? "✔️" : ''}</Accordion.Header>
      <Accordion.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Personal Information</h2>
          <Form.Group >
            <Form.Label>First Name</Form.Label>
            <Form.Control {...register("firstName", { required: true, maxLength: 20 })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Last Name</Form.Label>
            <Form.Control {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Birthday</Form.Label>
            <Form.Control type="date" {...register("birthday", { required: true })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>MaritalStatus</Form.Label>
            <Form.Control as="select" {...register("MaritalStatus", { required: true })}>
              <option value="" hidden></option>
              <option value="MARRIED">MARRIED</option>
              <option value="SINGLE">SINGLE</option>
              <option value="DIVORCED">DIVORCED</option>
              <option value="WIDOWED">WIDOWED</option>
            </Form.Control>
          </Form.Group>

          <h2>Address</h2>
          <Form.Group >
            <Form.Label>Street</Form.Label>
            <Form.Control {...register("Address.street", { required: true })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>City</Form.Label>
            <Form.Control {...register("Address.city", { required: true })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Post Code</Form.Label>
            <Form.Control {...register("Address.postCode", { required: true })} />
          </Form.Group>
          <h2>Business</h2>
          <Form.Group >
            <Form.Label>Business</Form.Label>
            <Form.Control as="select" {...register("Business", { required: true })}>
              <option value="" hidden></option>
              <option value="BANKING">BANKING</option>
              <option value="INSURANCE">INSURANCE</option>
              <option value="ENERGY">ENERGY</option>
              <option value="CONSTRUCTION">CONSTRUCTION</option>
              <option value="AGRICULTURE">AGRICULTURE</option>
              <option value="INDUSTRY">INDUSTRY</option>
              <option value="OTHER">OTHER</option>
            </Form.Control>
          </Form.Group>
          <Form.Group >
            <Form.Label>Employment</Form.Label>
            <Form.Control as="select" {...register("Employment", { required: true })}>
              <option value="" hidden></option>
              <option value="EMPLOYEE">EMPLOYEE</option>
              <option value="OFFICIAL">OFFICIAL</option>
              <option value="PENSIONER">PENSIONER</option>
              <option value="STUDENT">STUDENT</option>
              <option value="TRAINEE">TRAINEE</option>
              <option value="FREELANCER">FREELANCER</option>
              <option value="UNEMPLOYED">UNEMPLOYED</option>
              <option value="OTHER">OTHER</option>
            </Form.Control>
          </Form.Group>
          <Form.Group >
            <Form.Label>Employer</Form.Label>
            <Form.Control {...register("employer", { required: true })} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Employed Since</Form.Label>
            <Form.Control type="date" {...register("employedSince", { required: true })} />
          </Form.Group>

          <Button type='submit'  >Validate</Button>
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
}
