import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Radio, Breadcrumb } from 'antd';
import {
  HomeOutlined,
  ReconciliationOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import './Styles/application.css';

const initialFormValues = {
  email: '',
  location: '',
  name: '',
  current_comp: '',
  tech_stack: '',
  can_commit: '',
  how_commit: '',
  other_info: '',
};

const Mentor = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const postNewAccount = async newAccount => {
    try {
      const response = await axios.post(
        'https://underdog-devs-a-api.herokuapp.com/application/new-mentor',
        newAccount
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const formSubmit = () => {
    const newAccount = formValues;
    postNewAccount(newAccount);
  };

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="breadcrumbs">
        <Breadcrumb>
          <Breadcrumb.Item href="/login">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/signup">
            <IdcardOutlined />
            <span>Signup</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <ReconciliationOutlined />
            <span>Mentor Application</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="application">
        <Form onFinish={formSubmit}>
          <div className="signUpForm">
            <h1> Mentor Application </h1>
            <div className="questions">
              <div className="infoDiv">
                <h3>Please fill out your user information</h3>
                <br />
                <div className="name">
                  <div className="titleContainer">
                    <h3>Full Name*</h3>
                  </div>
                  <Form.Item
                    type="text"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Name is required!',
                      },
                    ]}
                    value={formValues.name}
                    onChange={evt => {
                      inputChange('name', evt.target.value);
                    }}
                  >
                    <Input placeholder="Your Name" />
                  </Form.Item>
                </div>
                <div className="email">
                  <div className="titleContainer">
                    <h3>Email*</h3>
                  </div>
                  <Form.Item
                    type="email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Email is required!',
                      },
                    ]}
                    value={formValues.email}
                    onChange={evt => {
                      inputChange('email', evt.target.value);
                    }}
                  >
                    <Input placeholder="Enter valid email" />
                  </Form.Item>
                </div>
                <div className="location">
                  <div className="titleContainer">
                    <h3>Location*</h3>
                  </div>
                  <Form.Item
                    type="text"
                    name="location"
                    rules={[
                      {
                        required: true,
                        message: 'Location is required!',
                      },
                    ]}
                    value={formValues.location}
                    onChange={evt => {
                      inputChange('location', evt.target.value);
                    }}
                  >
                    <Input placeholder="Your Location" />
                  </Form.Item>
                </div>
                <hr />
                <div className="current_comp">
                  <h3>Current company/position?</h3>
                  <Form.Item
                    type="text"
                    name="current_comp"
                    value={formValues.current_comp}
                    onChange={evt => {
                      inputChange('current_comp', evt.target.value);
                    }}
                  >
                    <Input placeholder="Your answer" />
                  </Form.Item>
                </div>
                <div className="tech_stack">
                  <h3>What is your tech stack?*</h3>
                  <Form.Item
                    type="text"
                    name="tech_stack"
                    rules={[
                      {
                        required: true,
                        message: 'This field is required!',
                      },
                    ]}
                    value={formValues.tech_stack}
                    onChange={evt => {
                      inputChange('tech_stack', evt.target.value);
                    }}
                  >
                    <Input placeholder="Your answer" />
                  </Form.Item>
                </div>
              </div>
              <hr />
              <br />
              <div className="can_commit">
                <h3>
                  Can you commit to 1:1 mentoring of one or more mentees at a
                  cadence you both decide upon or a minimum of 1 hour per week
                  pair program (problem solving) with a mentee in our stipend
                  program?*
                </h3>
                <Form.Item
                  name="can_commit"
                  rules={[
                    {
                      required: true,
                      message: 'Please choose one!',
                    },
                  ]}
                >
                  <Radio.Group>
                    <div className="radio-space">
                      <Radio
                        onChange={evt => {
                          inputChange('can_commit', evt.target.value);
                        }}
                        value="1:1 Mentoring"
                      >
                        1:1 Mentoring
                      </Radio>
                      <Radio
                        onChange={evt => {
                          inputChange('can_commit', evt.target.value);
                        }}
                        value="Pair Program"
                      >
                        Pair Program
                      </Radio>
                      <Radio
                        onChange={evt => {
                          inputChange('can_commit', evt.target.value);
                        }}
                        value="Neither"
                      >
                        Neither
                      </Radio>
                    </div>
                  </Radio.Group>
                </Form.Item>
              </div>
              <br />

              {formValues.can_commit === 'Neither' ? (
                <div className="how_commit">
                  <h3>
                    If you can not commit to 1:1 mentoring or pair programming
                    what type of commitment did you have in mind to help our
                    mentees? *
                  </h3>
                  <Form.Item
                    type="text"
                    name="how_commit"
                    rules={[
                      {
                        required: true,
                        message: 'Please indicate type of commitment.',
                      },
                    ]}
                    value={formValues.how_commit}
                    onChange={evt => {
                      inputChange('how_commit', evt.target.value);
                    }}
                  >
                    <Input.TextArea placeholder="Your answer" />
                  </Form.Item>
                </div>
              ) : (
                ''
              )}
              <br />
              <div className="other_info">
                <h3>Anything else you want us to know?</h3>
                <Form.Item
                  type="text"
                  name="other_info"
                  value={formValues.other_info}
                  onChange={evt => {
                    inputChange('other_info', evt.target.value);
                  }}
                >
                  <Input.TextArea placeholder="Your answer" />
                </Form.Item>
              </div>
              <hr />
              <br />
            </div>

            <Button htmlType="submit" id="button">
              {' '}
              Submit{' '}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Mentor;
