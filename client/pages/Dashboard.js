import React from 'react';
import NavbarComp from '../components/NavbarComp';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Dashboard = () => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [reason, setReason] = useState('');
  const [condition, setCondition] = useState('');
  const [meds, setMeds] = useState('');
  const [roll, setRoll] = useState('');
  const [sit, setSit] = useState('');
  const [crawl, setCrawl] = useState('');
  const [walk, setWalk] = useState('');
  const [words, setWords] = useState('');
  const [rawVMI, setRawVMI] = useState('');
  const [scVMI, setSCVMI] = useState('');
  const [prVMI, setPRVMI] = useState('');
  const [rawVP, setRawVP] = useState('');
  const [scVP, setSCVP] = useState('');
  const [prVP, setPRVP] = useState('');
  const [rawMC, setRawMC] = useState('');
  const [scMC, setSCMC] = useState('');
  const [prMC, setPRMC] = useState('');

  const [isShowAlert, setShowAlert] = useState(false);

  async function generateEval(e) {
    e.preventDefault();
    setShowAlert(true);
    setInterval(() => (window.location.href = '/dashboard/completed'), 4000);
    await fetch('http://localhost:3000/dashboard', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        fname,
        lname,
        sex,
        age,
        reason,
        condition,
        meds,
        roll,
        sit,
        crawl,
        walk,
        words,
        rawVMI,
        scVMI,
        prVMI,
        rawVP,
        scVP,
        prVP,
        rawMC,
        scMC,
        prMC,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <>
      <NavbarComp />
      <div className='intake'>
        <h1>Start a new evaluation</h1>
        <form onSubmit={generateEval}>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label></Form.Label>
            <Form.Control
              type='text'
              placeholder="Student's First Name"
              //value={fname}
              onChange={(e) => setFName(e.target.value)}
            />
            <br />
            <Form.Control
              type='text'
              placeholder="Student's Last Name"
              onChange={(e) => setLName(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Control
            type='text'
            placeholder='Age'
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <Form.Select
            aria-label='Default select example'
            onChange={(e) => setSex(e.target.value)}
          >
            <option>Sex</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </Form.Select>
          <br />
          <Form.Select
            aria-label='Default select example'
            // value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <option>Reason for the evaluation</option>
            <option value='parent'>Parent</option>
            <option value='teacher'>Teacher(s)</option>
          </Form.Select>
          <br />
          <Form.Control
            type='text'
            placeholder='Condition(s) (including allergies, diagnoses, etc.)'
            //value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
          <br />
          <Form.Control
            type='text'
            placeholder='List Medications'
            //value={meds}
            onChange={(e) => setMeds(e.target.value)}
          />
          <br />
          <h2>Milestones (in months)</h2>
          <br />
          <Form.Control
            type='text'
            placeholder='Rolling'
            //value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
          <br />
          <Form.Control
            type='text'
            placeholder='Crawling'
            //value={crawl}
            onChange={(e) => setCrawl(e.target.value)}
          />
          <br />
          <Form.Control
            type='text'
            placeholder='Walking'
            //value={walk}
            onChange={(e) => setWalk(e.target.value)}
          />
          <br />
          <Form.Control
            type='text'
            placeholder='Sitting'
            //value={sit}
            onChange={(e) => setSit(e.target.value)}
          />
          <br />
          <Form.Control
            type='text'
            placeholder='Talking'
            //value={words}
            onChange={(e) => setWords(e.target.value)}
          />
          <br />
          <h2>
            Beery Buktenica Developmental Test of Visual Motor Integration
          </h2>
          <Row className='mb-3'>
            <Form.Group
              as={Col}
              controlId='formGridCity'
              //value={rawVMI}
              onChange={(e) => setRawVMI(e.target.value)}
            >
              <Form.Label>VMI Raw Score</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId='formGridZip'
              //value={scVMI}
              onChange={(e) => setSCVMI(e.target.value)}
            >
              <Form.Label>VMI Standard Score</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Performance Range</Form.Label>
              <Form.Select
                defaultValue='Choose...'
                //value={prVMI}
                onChange={(e) => setPRVMI(e.target.value)}
              >
                <option>Choose...</option>
                <option>Above Average</option>
                <option>Average</option>
                <option>Below Average</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group
              as={Col}
              controlId='formGridCity'
              //value={rawVP}
              onChange={(e) => setRawVP(e.target.value)}
            >
              <Form.Label>Visual Perceptual Raw Score</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId='formGridZip'
              //value={scVP}
              onChange={(e) => setSCVP(e.target.value)}
            >
              <Form.Label>Visual Perceptual Standard Score</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Performance Range</Form.Label>
              <Form.Select
                defaultValue='Choose...'
                //value={prVP}
                onChange={(e) => setPRVP(e.target.value)}
              >
                <option>Choose...</option>
                <option>Above Average</option>
                <option>Average</option>
                <option>Below Average</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group
              as={Col}
              controlId='formGridCity'
              //value={rawMC}
              onChange={(e) => setRawMC(e.target.value)}
            >
              <Form.Label>Motor Coordination Raw Score</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId='formGridZip'
              //value={scMC}
              onChange={(e) => setSCMC(e.target.value)}
            >
              <Form.Label>Motor Coordination Standard Score</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Performance Range</Form.Label>
              <Form.Select
                defaultValue='Choose...'
                //value={prMC}
                onChange={(e) => setPRMC(e.target.value)}
              >
                <option>Choose...</option>
                <option>Above Average</option>
                <option>Average</option>
                <option>Below Average</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <br />
          <Button variant='primary' type='submit'>
            Submit
          </Button>
          {/* Alert for saved progress and delete */}
          <div className='Alert-Div'>
            <div
              className={`alert alert-success ${
                isShowAlert ? 'alert-shown' : 'alert-hidden'
              }`}
              onTransitionEnd={() => setShowAlert(false)}
            >
              Evaluation Successfully Created - Redirecting to Completed Evaluations!
            </div>
          </div>
          {/* End Alert */}
        </form>
        <br />
        <br />
      </div>
    </>
  );
};

export default Dashboard;
