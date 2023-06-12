import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ApplicantForm from '../../components/ApplicantForm';

describe('ApplicantForm', () => {

  test('submits the form with valid input', async () => {
    const user = {};

    const { getByText, getByLabelText, queryByText } = render(
      <ApplicantForm user={user} />,
    );

    const submitButton = getByText('Validate');
    const firstNameInput = getByLabelText('First Name');
    const lastNameInput = getByLabelText('Last Name');
    const birthdayInput = getByLabelText('Birthday');
    const maritalStatusInput = getByLabelText('Marital Status');
    const streetInput = getByLabelText('Street');
    const cityInput = getByLabelText('City');
    const postCodeInput = getByLabelText('Post Code');
    const businessInput = getByLabelText('Business');
    const employmentInput = getByLabelText('Employment');
    const employerInput = getByLabelText('Employer');
    const employedSinceInput = getByLabelText('Employed Since');

    act(() => {
      fireEvent.change(firstNameInput, { target: { value: 'John' } });
      fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
      fireEvent.change(birthdayInput, { target: { value: '1990-01-01' } });
      fireEvent.change(maritalStatusInput, { target: { value: 'MARRIED' } });
      fireEvent.change(streetInput, { target: { value: '123 Street' } });
      fireEvent.change(cityInput, { target: { value: 'City' } });
      fireEvent.change(postCodeInput, { target: { value: '12345' } });
      fireEvent.change(businessInput, { target: { value: 'BANKING' } });
      fireEvent.change(employmentInput, { target: { value: 'EMPLOYEE' } });
      fireEvent.change(employerInput, { target: { value: 'Company' } });
      fireEvent.change(employedSinceInput, { target: { value: '2020-01-01' } });

      fireEvent.click(submitButton);
    });

    // Wait for the form submission to be processed
    await waitFor(() => {
      expect(queryByText('First Name is required')).toBeNull();
      expect(queryByText('Last Name is required')).toBeNull();
      expect(queryByText('Birthday is required')).toBeNull();
      expect(queryByText('Marital Status is required')).toBeNull();
      expect(queryByText('Street is required')).toBeNull();
      expect(queryByText('City is required')).toBeNull();
      expect(queryByText('Post Code is required')).toBeNull();
      expect(queryByText('Business is required')).toBeNull();
      expect(queryByText('Employment is required')).toBeNull();
      expect(queryByText('Employer is required')).toBeNull();
      expect(queryByText('Employed Since is required')).toBeNull();
    });

    expect(user.firstName).toBe('John');
    expect(user.lastName).toBe('Doe');
    expect(user.birthday).toBe('1990-01-01');
    expect(user.maritalStatus).toBe('MARRIED');
    expect(user.Address.street).toBe('123 Street');
    expect(user.Address.city).toBe('City');
    expect(user.Address.postCode).toBe('12345');
    expect(user.Business).toBe('BANKING');
    expect(user.Employment).toBe('EMPLOYEE');
    expect(user.employer).toBe('Company');
    expect(user.employedSince).toBe('2020-01-01');

    waitFor(() => {
      const accordionItem = getByText(`Applicant  ✔️`).closest('div');
      expect(accordionItem).toBeInTheDocument();
    });
  });
});
