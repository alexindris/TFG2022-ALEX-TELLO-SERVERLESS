import ApplicantForm from "../components/ApplicantForm";
import FinancingForm from "../components/FinancingForm";
import HouseHoldForm from "../components/HouseHoldForm";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

export default function ApplicationForm() {
  const data = { Applicant1: {}, Applicant2: {}, Financing: {}, Household: {} };
  const submit = () => console.log(data);
  return <div>
    <h1>Application Form</h1>
    <Accordion className='App-header'>
      <ApplicantForm number='1' user={data.Applicant1} />
      <ApplicantForm number='2' user={data.Applicant2} />
      <FinancingForm financing={data.Financing} />
      <HouseHoldForm household={data.Household} />

      <Button onClick={submit}>
        Send
      </Button>
    </Accordion>
  </div>;
}
