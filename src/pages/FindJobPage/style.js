import React from "react";
import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
  background: #f9f9f9;
`;
export const Container1 = styled.div`
  padding: 16px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-left: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
`;

export const Link = styled.a`
  display: block;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`;
export const Container2 = styled.div`
  display: flex;
  padding: 16px;
`;