import React, { useState } from 'react';
import { Button, Card, CardBody, Form, FormControl, Image } from 'react-bootstrap';
import Stepper from 'react-stepper-horizontal';
import { FaArrowRightLong, FaAngleRight } from "react-icons/fa6";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MyBadge from './components/MyBadge';
import ServiceItem from './components/service-item.js';
import TaskItem from './components/task-item.js';
import Question from './components/Question.js';
import MyDropzone from './components/MyDropzone.js';

const App = () => {
  const [selectedJobID, setSelectedJobID] = useState(null);
  const [selectedServiceID, setSelectedServiceID] = useState(null);
  const [selectedTaskID, setSelectedTaskID] = useState(null);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Submit form data to server
    console.log('Form submitted:', formData);
  };

  return (
    <Router>
      <div>
        <h3 className='text-center mt-3' style={{ fontWeight: 700 }}>Project Progress</h3>
        <Stepper activeColor="orange" circleFontSize={0} size={15} completeColor="rgb(224, 224, 224)" completeBorderColor="black" activeStep={step} steps={[{ title: 'Select Task' }, { title: 'Schedule' }, { title: 'Cart' }, { title: 'Confirm' }]} />
        {step === 0 && (
          <div className='container-fluid mt-5'>
            <h4 className='mb-0' style={{ fontWeight: 700 }}>Task Selection</h4>
            <label className='mb-3'>Select your desired category and service to find the right task you need done! </label>

            <Card className='mb-3'>
              <CardBody>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h6 style={{ fontWeight: 700, marginBottom: 0, marginRight: 10 }}>Job Category</h6>
                    <FaAngleRight />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 12 }}>1/4</span>
                </div>

                <div className='mt-3' style={{ display: "flex", flexWrap: "wrap", maxWidth: "100%" }}>
                  <MyBadge id={1} title={"Drywall & Paint"} setSelectedJobID={setSelectedJobID} selectedJobID={selectedJobID} />
                  <MyBadge id={2} title={"Doors, Knobs, Handles"} setSelectedJobID={setSelectedJobID} selectedJobID={selectedJobID} />
                  <MyBadge id={3} title={"Clogs, Leaks & Fixtures"} setSelectedJobID={setSelectedJobID} selectedJobID={selectedJobID} />
                  <MyBadge id={4} title={"Caulking"} setSelectedJobID={setSelectedJobID} selectedJobID={selectedJobID} />
                  <MyBadge id={5} title={"TV & Furniture Mounting"} setSelectedJobID={setSelectedJobID} selectedJobID={selectedJobID} />
                  <MyBadge id={6} title={"Furniture Assembly"} setSelectedJobID={setSelectedJobID} selectedJobID={selectedJobID} />
                  <MyBadge id={7} title={"Vent Cleaning"} setSelectedJobID={setSelectedJobID} selectedJobID={selectedJobID} />
                  <MyBadge id={8} title={"Other Categories"} setSelectedJobID={setSelectedJobID} selectedJobID={selectedJobID} />
                </div>

                <div>
                  <span>Need HVAC or Water filtration services?  </span>
                  <Link to={"#"} style={{ color: "#000", fontWeight: 700 }}>Call to request Home Advisor</Link>
                </div>
              </CardBody>
            </Card>

            <Card className='mb-3'>
              <CardBody>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h6 style={{ fontWeight: 700, marginBottom: 0, marginRight: 10 }}>Service</h6>
                    <FaAngleRight />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 12 }}>2/4</span>
                </div>

                {selectedJobID &&
                  <div className='service-container'>
                    <ServiceItem
                      id={1}
                      selectedServiceID={selectedServiceID}
                      setSelectedServiceID={setSelectedServiceID}
                      title="Painting"
                      description="Select your desired category and service to find the right task you need done!"
                      imgUrl="service-1.png"
                    />

                    <ServiceItem
                      id={2}
                      selectedServiceID={selectedServiceID}
                      setSelectedServiceID={setSelectedServiceID}
                      title="Dry wall repair"
                      description="Select your desired category and service to find the right task you need done!"
                      imgUrl="service-2.png"
                    />
                  </div>
                }

              </CardBody>
            </Card>

            <Card className='mb-3'>
              <CardBody>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h6 style={{ fontWeight: 700, marginBottom: 0, marginRight: 10 }}>Task</h6>
                    <FaAngleRight />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 12 }}>3/4</span>
                </div>

                {selectedServiceID &&
                  <div className='task-container'>
                    <TaskItem id={1} title="Paint Patched Area" description="Washroom Project" imgUrl="task-1.png" selectedTaskID={selectedTaskID} setSelectedTaskID={setSelectedTaskID} />
                    <TaskItem id={2} title="Paint Room" description="Washroom Project" imgUrl="task-2.png" selectedTaskID={selectedTaskID} setSelectedTaskID={setSelectedTaskID} />
                    <TaskItem id={3} title="Paint Wall Section" description="Washroom Project" imgUrl="task-1.png" selectedTaskID={selectedTaskID} setSelectedTaskID={setSelectedTaskID} />
                  </div>
                }

              </CardBody>
            </Card>

            <Card className='mb-3'>
              <CardBody>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h6 style={{ fontWeight: 700, marginBottom: 0, marginRight: 10 }}>Task details</h6>
                    <FaAngleRight />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 12 }}>4/4</span>
                </div>
              </CardBody>

              <div className='task-detail-container mt-3' style={{ marginLeft: 15 }}>
                <Question questionCount={1} />
                <Question questionCount={2} />
                <Question questionCount={3} />

                <Form.Group className="mb-3">
                  <Form.Label style={{fontWeight: 700}}>Note</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder='Describe the problem, the size, dimensions etc'/>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label style={{fontWeight: 700}}>Attach an image</Form.Label>
                  <MyDropzone />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{fontWeight: 700}}>Price:</Form.Label>
                  <p style={{fontWeight: 600}}>N/A</p>
                </Form.Group>
              </div>
            </Card>

            <div className='container text-center mt-5'>
              <Button onClick={handleNext} style={{ background: "rgba(15, 19, 55, 1)", border: "rgba(15, 19, 55, 1)", color: "white", borderRadius: 100, paddingLeft: 15, paddingRight: 15 }}>Continue to Schedule</Button>
              <br />
              <div className="mt-3">
                <Link to={"#"} style={{ fontWeight: 700, textDecoration: "none", color: "#000" }}>Save for later </Link>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        )}
        {step === 1 && (
          <div>
            <h4 className='mb-0' style={{ fontWeight: 700 }}>Schedule your task</h4>
            <FormControl
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormControl
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <Button onClick={handlePrev}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        )}
        {step === 2 && (
          <div>
            Cart
            <Button onClick={handlePrev}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        )}
        {step === 3 && (
          <div>
            Confirm
            <Button onClick={handlePrev}>Previous</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
