import React from "react";
import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #2b7d2e;
  text-align: center;
  margin-bottom: 20px;
`;

export const JobListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-left:150px;
  max-width: 1200px;
  width: 100%;
`;

export const JobColumn = styled.div`
  list-style: none;
`;

export const JobItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #2b7d2e;
  }
`;
export const WrapperContent = styled.div`
max-width:100%;
width:1200px;
margin: auto;


`
export const TitleContent = styled.h1`
  font-size: 19px;
  color:rgb(44, 182, 49);

  margin-bottom: 10px;
`;
export const Content = styled.p`
  font-size: 15px;
  color:rgb(3, 15, 3);
   line-height: 1.9;
  margin-bottom: 10px;
`;