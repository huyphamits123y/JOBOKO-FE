import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width:100%;
  width:1200px;
  margin: auto;
  font-family: Arial, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: #333;
    margin: 0;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CVList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CVItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;

  p {
    margin: 5px 0;
    color: #666;
    font-size: 14px;
  }
`;

export const CVTitle = styled.h3`
  margin: 0;
  color: #333;
`;

export const CVLink = styled.a`
  display: block;
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`;

export const CVActions = styled.div`
  display: flex;
  gap: 10px;

  button,
  a {
    padding: 5px 10px;
    background-color: #e9ecef;
    color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background-color: #ddd;
    }
  }
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
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-top: 0;
    color: #333;
  }
`;

export const UploadForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
export const Description = styled.p`
  color: #7f8c8d;
  margin-bottom: 20px;
`;

export const SupportOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const SupportButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-radius: 50px;
  background-color: #fff;
  color: #2c3e50;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #27ae60; /* Màu xanh lá */
    color: #fff; /* Chữ trắng */
  }

  img {
    margin-right: 10px;
  }
`;
export const SupportContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

export const TitleOptions = styled.h2`
  color: #2c3e50;
  margin-bottom: 10px;
`;

