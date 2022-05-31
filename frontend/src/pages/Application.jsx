import ApplicantForm from "../components/ApplicantForm";
import FinancingForm from "../components/FinancingForm";
import HouseHoldForm from "../components/HouseHoldForm";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2';

export default function ApplicationForm() {
  const data = { FirstApplicant: {}, SecondApplicant: {}, Financing: {}, HouseHold: {} };
  const submit = () => {
    if (isEmpty(data.FirstApplicant || data.SecondApplicant || data.Financing || data.HouseHold)) swalError()
    else {
      postForm(data);
    }
  };
  return <div>
    <h1>Application Form</h1>
    <Accordion className='App-header'>
      <ApplicantForm number='1' user={data.FirstApplicant} />
      <ApplicantForm number='2' user={data.SecondApplicant} />
      <FinancingForm financing={data.Financing} />
      <HouseHoldForm household={data.HouseHold} />

      <Button onClick={submit}>
        Send
      </Button>
    </Accordion>
  </div>;
}

function swalError(params) {
  Swal.fire({
    title: 'Error!',
    text: 'Check that all fields are filled out and try again.',
    icon: 'error',
    confirmButtonText: 'Okay'
  })
}
function swalWrong(params) {
  Swal.fire({
    title: 'Error!',
    text: 'Ups, something went wrong. Please try again.',
    icon: 'error',
    confirmButtonText: 'Okay'
  })
}

function swalConfirm(params) {
  Swal.fire({
    title: 'Success!',
    text: 'Your application has been submitted.',
    icon: 'success',
    confirmButtonText: 'Okay'
  })
}
async function postForm(data) {
  fetch(`${process.env.REACT_APP_API_URL}/applications`, {
    // const response = await fetch(`https://ghrl62f7e8.execute-api.eu-west-1.amazonaws.com/applications`, {
    method: "POST",
    mode: 'no-cors', // no-cors, *cors, same-origin
    body: JSON.stringify(data),
  }).then(response => {
    swalConfirm();
  }).catch(error => {
    swalWrong();
  });


}

function isEmpty(object) {
  return Object.keys(object).length === 0;
}