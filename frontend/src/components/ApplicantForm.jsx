import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

export default function ApplicantForm({ user, number }) {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const decoratedOnClick = useAccordionButton(number);
  const onSubmit = (data) => {
    Object.assign(user, data);
    setSubmitted(true);
    decoratedOnClick();
  };

  return (
    <Accordion.Item eventKey={number || '0'}>
      <Accordion.Header>
        Applicant {number || ''} {submitted ? '✔️' : ''}
      </Accordion.Header>
      <Accordion.Body>
        <Form onSubmit={handleSubmit(onSubmit)} name={`Applicant${number}`}>
          <h2>Personal Information</h2>
          <Form.Group>
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              id="firstName"
              {...register(`firstName`, { required: true, maxLength: 20 })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              id="lastName"
              {...register(`lastName`, {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="birthday">Birthday</Form.Label>
            <Form.Control
              id="birthday"
              type="date"
              {...register(`birthday`, { required: true })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="maritalStatus">Marital Status</Form.Label>
            <Form.Control
              id="maritalStatus"
              as="select"
              {...register(`maritalStatus`, { required: true })}
            >
              <option value="" hidden>
                -- select an option --
              </option>
              <option value="MARRIED">MARRIED</option>
              <option value="SINGLE">SINGLE</option>
              <option value="DIVORCED">DIVORCED</option>
              <option value="WIDOWED">WIDOWED</option>
            </Form.Control>
          </Form.Group>

          <h2>Address</h2>
          <Form.Group>
            <Form.Label htmlFor="street">Street</Form.Label>
            <Form.Control
              id="street"
              {...register(`Address.street`, { required: true })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="city">City</Form.Label>
            <Form.Control
              id="city"
              {...register(`Address.city`, { required: true })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="postCode">Post Code</Form.Label>
            <Form.Control
              id="postCode"
              {...register(`Address.postCode`, { required: true })}
            />
          </Form.Group>

          <h2>Business</h2>
          <Form.Group>
            <Form.Label htmlFor="business">Business</Form.Label>
            <Form.Control
              id="business"
              as="select"
              {...register(`Business`, { required: true })}
            >
              <option value="" hidden>
                -- select an option --
              </option>
              <option value="BANKING">BANKING</option>
              <option value="INSURANCE">INSURANCE</option>
              <option value="ENERGY">ENERGY</option>
              <option value="CONSTRUCTION">CONSTRUCTION</option>
              <option value="AGRICULTURE">AGRICULTURE</option>
              <option value="INDUSTRY">INDUSTRY</option>
              <option value="OTHER">OTHER</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="employment">Employment</Form.Label>
            <Form.Control
              id="employment"
              as="select"
              {...register(`Employment`, { required: true })}
            >
              <option value="" hidden>
                -- select an option --
              </option>
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
          <Form.Group>
            <Form.Label htmlFor="employer">Employer</Form.Label>
            <Form.Control
              id="employer"
              {...register(`employer`, { required: true })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="employedSince">Employed Since</Form.Label>
            <Form.Control
              id="employedSince"
              type="date"
              {...register(`employedSince`, { required: true })}
            />
          </Form.Group>

          <Button type="submit">Validate</Button>
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
}
