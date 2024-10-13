import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import axios from "axios"; // Make sure to import axios
const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
      name: name,  
      email: email,
      password: password,
      })
      .then((response) => {
        console.log(response.data);
        alert("Data submitted successfully");
        // Clear the form
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error submitting data", error);
      });
    
  };
  return (
    <Container>
      <div>
        <Title>Create New Account 👋</Title>
        <Span>Please enter details to create a new account</Span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <TextInput 
        label="Full name" 
        placeholder="Enter your full name"
        value={name} 
        onChange={e => setName(e.target.value)}
        />
        <TextInput
  label="Email Address"
  value={email}
  onChange={e => setEmail(e.target.value)}
  placeholder="Enter your email address"
/>
        <TextInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <Button text="SignUp" onclick={handleSubmit}/>
      </div>
    </Container>
  );
};

export default SignUp;
