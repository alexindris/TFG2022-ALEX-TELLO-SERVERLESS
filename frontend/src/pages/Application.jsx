import ApplicantForm from "../components/ApplicantForm";
import FinancingForm from "../components/FinancingForm";
import HouseHoldForm from "../components/HouseHoldForm";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2';

export default function ApplicationForm() {
  const data = { FirstApplicant: {}, SecondApplicant: {}, Financing: {}, HouseHold: {} };
  const submit = () => {
    console.log(process.env.REACT_APP_API_URL);
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

function swalConfirm(params) {
  Swal.fire({
    title: 'Success!',
    text: 'Your application has been submitted.',
    icon: 'success',
    confirmButtonText: 'Okay'
  })
}
function postForm(data) {
  fetch(`${process.env.REACT_APP_API_URL}/applications`, {
    // fetch(`https://bsv1h7u4pd.execute-api.eu-west-3.amazonaws.com/applications`, {
    method: "POST",
    mode: 'no-cors', // no-cors, *cors, same-origin
    body: JSON.stringify(data),
  })
    .then((response) => swalConfirm());
}

function isEmpty(object) {
  return Object.keys(object).length === 0;
}