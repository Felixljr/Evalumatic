import React from 'react';
import NavbarComp from '../components/NavbarComp';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { saveAs } from 'file-saver';
import axios from 'axios';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableCell,
  TableRow,
  WidthType,
} from 'docx';

const Completed = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [isShowAlert, setShowAlert] = useState(false);
  const [alertColor, setAlertColor] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const [dropDown, setDropDown] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/dashboard/all')
      .then((res) => {
        console.log(res);
        setDropDown(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  const oneStepHandle = (e) =>{
    e.preventDefault();
    setName(e.target.value);
    handleNameSelect(e.target.value);
  }


  const handleNameSelect = async (selectedName) => {
    await fetch(`http://localhost:3000/dashboard/completed/${selectedName}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((data) => {
        return data.text();
      })
      .then((data) => {
        setText(data);
        //  console.log(`NAME: ${name}`);
      });
  };

  async function updateEval(e) {
    e.preventDefault();
    setAlertColor('alert-success');
    setAlertMsg('All Changes Saved!');
    setShowAlert(true);
    await fetch('http://localhost:3000/dashboard/completed', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, text }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  }

  async function deleteRecord(e) {
    e.preventDefault();
    setAlertColor('alert-danger');
    setAlertMsg(`Student Record Has Been Deleted!`);
    setShowAlert(true);
    console.log('delete triggered');
    await fetch(`http://localhost:3000/dashboard/completed/${name}`, {
      method: 'DELETE',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setText(`ALL RECORDS FOR ${name.toLocaleUpperCase()} HAVE BEEN DELETED!`);
        console.log(res);
      });
  }

  async function exportDoc() {
    let exportText = '';

    await fetch(`http://localhost:3000/dashboard/completed/${name}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((data) => {
        return data.text();
      })
      .then((data) => {
        exportText = data;
      });

    const table = new Table({
      columnWidths: [4505, 4505],
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 4505,
                type: WidthType.DXA,
              },
              children: [
                new Paragraph('Therapist: Felix Leclerc Jr., MS, OTR/L'),
              ],
            }),
            new TableCell({
              width: {
                size: 4505,
                type: WidthType.DXA,
              },
              children: [new Paragraph('School: 07x030, 5452 Bronx, NY 10375')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 4505,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Date of last IEP: 1/5/2021')],
            }),
            new TableCell({
              width: {
                size: 4505,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Primary Physician: Dr. Charles Wint')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 4505,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Diagnosis: ')],
            }),
            new TableCell({
              width: {
                size: 4505,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Teacher(s): Ms. Williams')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 4505,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Referred By: Parent')],
            }),
            new TableCell({
              width: {
                size: 4505,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Parent Phone Number: 0123456789')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 4505,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Date of Evaluation: ')],
            }),
            new TableCell({
              width: {
                size: 4505,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Alerts: ')],
            }),
          ],
        }),
      ],
    });

    const table1 = new Table({
      columnWidths: [2200, 2200, 2200, 2200],
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('TEST')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('RAW SCORE')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('STANDARD SCORE')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('PERFORMANCE RANGE')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Visual Motor Integration')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('18')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('95')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Average')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Visual Perceptual')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('16')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('84')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Below Average')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Motor Coordination')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('17')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('89')],
            }),
            new TableCell({
              width: {
                size: 2200,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Below Average')],
            }),
          ],
        }),
      ],
    });

   
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: 'OCCUPATIONAL THERAPY EVALUATION',
              size: 18,
            }),
            new Paragraph({ text: '' }),
            table,
            new Paragraph({ text: '' }),

            new Paragraph({ text: 'Background Information' }),
            new Paragraph({ text: '' }),
            new Paragraph({
              children: [new TextRun(`${exportText}`)],
            }),
            new Paragraph({ text: '' }),
            table1,
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `OT Evaluation For ${name}.docx`);
    });
  }

  return (
    <>
      <NavbarComp />
      <div className='export'>
        <Button variant='secondary' type='submit' onClick={exportDoc}>
          Export
        </Button>
      </div>
      <div className='search'>
        <h1>Find a completed evaluation</h1>
        <br />

        <Form.Select
          aria-label='Default select example'
          onChange={oneStepHandle}
        >
          <option>Select a Name</option>
          {dropDown.map((student) => (
            <option value={student.firstName} key={student._id}>
              {student.firstName}
            </option>
          ))}
        </Form.Select>

        <Form>
          {/* <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              type='text'
              placeholder='First Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Search
          </Button> */}

          {/* Alert for saved progress and delete */}
          <div className='Alert-Div'>
            <div
              className={`alert ${alertColor} ${
                isShowAlert ? 'alert-shown' : 'alert-hidden'
              }`}
              onTransitionEnd={() => setShowAlert(false)}
            >
              {alertMsg}
            </div>
          </div>
          {/* End Alert */}

          <div className='report'>
            <FloatingLabel controlId='floatingTextarea2'>
              <Form.Control
                as='textarea'
                placeholder='Leave a comment here'
                style={{ height: '400px' }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </FloatingLabel>
          </div>
          <div className='actionButtons'>
            <Button variant='success' type='submit' onClick={updateEval}>
              Save
            </Button>
            <Button variant='danger' type='submit' onClick={deleteRecord}>
              Delete
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Completed;
