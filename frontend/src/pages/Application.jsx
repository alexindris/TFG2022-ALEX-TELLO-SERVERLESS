import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import ApplicantForm from '../components/ApplicantForm';
import FinancingForm from '../components/FinancingForm';
import HouseHoldForm from '../components/HouseHoldForm';

function swalError() {
  Swal.fire({
    title: 'Error!',
    text: 'Check that all fields are filled out and try again.',
    icon: 'error',
    confirmButtonText: 'Okay',
  });
}
function swalWrong() {
  Swal.fire({
    title: 'Error!',
    text: 'Ups, something went wrong. Please try again.',
    icon: 'error',
    confirmButtonText: 'Okay',
  });
}

function isEmpty(object) {
  return Object.keys(object).length === 0;
}

function swalConfirm() {
  Swal.fire({
    title: 'Success!',
    text: 'Your application has been submitted.',
    icon: 'success',
    confirmButtonText: 'Okay',
  });
}
async function postForm(data) {
  await fetch(`${process.env.REACT_APP_API_URL}/applications`, {
    method: 'POST',
    mode: 'no-cors', // no-cors, *cors, same-origin
    body: JSON.stringify(data),
  })
    .then(() => {
      swalConfirm();
    })
    .catch(() => {
      swalWrong();
    });
}

export default function ApplicationForm() {
  const data = {
    FirstApplicant: {},
    SecondApplicant: {},
    Financing: {},
    HouseHold: {},
  };
  const submit = async () => {
    if (
      isEmpty(data.FirstApplicant) ||
      isEmpty(data.Financing) ||
      isEmpty(data.HouseHold)
    ) {
      swalError();
    } else {
      await postForm(data);
    }
  };
  return (
    <div>
      <h1>Application Form</h1>
      <Accordion className="App-header">
        <ApplicantForm number="1" user={data.FirstApplicant} />
        <ApplicantForm number="2" user={data.SecondApplicant} />
        <FinancingForm financing={data.Financing} />
        <HouseHoldForm household={data.HouseHold} />

        <Button onClick={submit}>Send</Button>
      </Accordion>
    </div>
  );
}
