import React from "react";
import styled from "styled-components"
export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  background-color:#EEEEEE
`;
export const Container1 = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display:flex;
  background-color:#EEEEEE
`;
export const Title = styled.h1`
  
  margin-bottom: 20px;
`;

export const JobList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const JobCard = styled.div`
  
  background-color: #f9f9f9;
  border:1px solid black;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor:pointer;
  width: calc(50% - 15px); /* Hai card mỗi hàng */
  height:120px;
   &:hover
  {
  border: 1px solid #1E90FF;
  }

`;

export const JobTitle = styled.h2`
  font-size: 14px;
  color: #d32f2f;
  
`;

export const Company = styled.p`
  font-size: 10px;
  font-weight: bold;
`;

export const Location = styled.p`
  font-size: 10px;
  color: #666;
`;

export const Salary = styled.p`
  font-size: 10px;

 
`;

export const ApplyButton = styled.button`
  background-color: #33CCCC;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border-radius:20px;
  justify-content: flex-end;
  margin-top: auto;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  font-size: 16px;
`;
export const Container2 = styled.div`
  padding: 16px;
  background: #fff;
  height:200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-left: 16px;
`;
export const Container3 = styled.div`
margin-top:10px;
cursor:pointer;
  background: #fff;
  height:200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-left: 16px;
`;
export const Title1 = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
`;

export const Link1 = styled.a`
  display: block;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`;