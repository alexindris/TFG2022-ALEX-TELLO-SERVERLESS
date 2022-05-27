import { useState } from "react";
import ApplicantForm from "./components/ApplicantForm";

function App() {
  const [count, setCount] = useState(0);

  const data = { Applicant1: {}, Applicant2: {} }
  const submit = () => console.log(data);;
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        {/* <p>Hello Vite + React!</p> */}
        {/* <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {" | "}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p> */}
        <ApplicantForm number='1' user={data.Applicant1} />
        <ApplicantForm number='2' user={data.Applicant2} />
        <button onClick={submit}>
          Send
        </button>
      </header>
    </div >
  );
}

export default App;
