import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import axios from "axios";

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

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signin", {  
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        alert("Data submitted successfully");
        // Clear the form
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error submitting data", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <Container>
      <div>
        <Title>Welcome to PeakPulse 👋</Title>
        <Span>Please login with your details here</Span>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChange={handleChange}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <Button text="Sign In" type="submit" />
      </form>
    </Container>
  );
};

export default SignIn;