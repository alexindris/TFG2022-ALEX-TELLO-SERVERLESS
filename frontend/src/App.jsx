import { useState } from "react";
import ApplicantForm from "./components/ApplicantForm";
import FinancingForm from "./components/FinancingForm";
import HouseHoldForm from "./components/HouseHoldForm";

function App() {
  const [count, setCount] = useState(0);

  const data = { Applicant1: {}, Applicant2: {}, Financing: {}, Household: {} }
  const submit = () => console.log(data);;
  return (
    <div className='App'>
      <header className='App-header'>
        <ApplicantForm number='1' user={data.Applicant1} />
        <ApplicantForm number='2' user={data.Applicant2} />
        <FinancingForm financing={data.Financing} />
        <HouseHoldForm household={data.Household} />

        <button onClick={submit}>
          Send
        </button>
      </header>
    </div >
  );
}

export default App;
