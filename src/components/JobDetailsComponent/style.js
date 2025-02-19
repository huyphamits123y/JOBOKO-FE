import React from "react";
import styled from "styled-components";
export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const JobInfo = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const JobTitle = styled.h1`
  font-size: 24px;
  color: #2b6cb0;
`;

export const CompanyName = styled.p`
  font-size: 16px;
  color: #4a5568;
  margin: 4px 0;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #718096;
`;

export const JobStatus = styled.p`
  font-size: 12px;
  color: #718096;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#3182ce" : "white")};
  color: ${(props) => (props.primary ? "white" : "#3182ce")};
  border: 1px solid #3182ce;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#2b6cb0" : "#ebf8ff")};
  }
`;

export const MainContent = styled.div`
  border-top: 1px solid #e2e8f0;
`;

export const Tabs = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Tab = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: none;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#2b6cb0" : "#718096")};
  border-bottom: ${(props) => (props.active ? "2px solid #2b6cb0" : "none")};
`;

export const JobDetails = styled.div`
  padding: 20px 0;
  font-size: 14px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  color: #2d3748;
  margin-bottom: 10px;
`;

export const InfoGroup = styled.div`
  margin-bottom: 20px;
`;

export const Icon = styled.span`
  margin-right: 8px;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 8px;
  width: 600px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderCV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  img {
    height: 40px;
  }

  h3 {
    font-size: 18px;
    color: #333;
  }

  button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #666;

    &:hover {
      color: red;
    }
  }
`;

export const Content = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h4`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

export const CVList = styled.div`
  margin-bottom: 20px;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
`;

export const CVItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  input {
    margin-right: 10px;
  }

  span {
    flex: 1;
    font-size: 14px;
  }
`;

export const FileUpload = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    cursor: pointer;
    color: #007bff;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    flex: 1;
    margin: 0 5px;
  }
`;

export const ButtonCV = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? "#0d6efd" : "#ddd")};
  color: ${(props) => (props.primary ? "white" : "#333")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#ccc")};
  }
`;

export const CreateCVForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
