// import React from "react";
// import styled from "styled-components";
// import Slider from "react-slick";

// export const Container = styled.div`
//   padding: 20px;
//   background-color: #f5f5f5;
// `;

// export const Title = styled.h2`
//   font-size: 24px;
//   text-align: center;
//   color: #1a3b5d;
//   margin-bottom: 20px;
//   position: relative;

//   &:after {
//     content: "";
//     display: block;
//     width: 50px;
//     height: 4px;
//     background-color: #1a3b5d;
//     margin: 10px auto 0;
//   }
// `;

// export const SliderContainer = styled.div`
//   .slick-prev,
//   .slick-next {
//     z-index: 10;
//     color: #1a3b5d;
//   }

//   .slick-dots li button:before {
//     font-size: 12px;
//     color: #1a3b5d;
//   }

//   .slick-dots li.slick-active button:before {
//     color: #2b7d2e;
//   }
// `;

// export const Card = styled.div`
//   background: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   text-align: center;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
//     background-color: rgba(190, 250, 251, 0.2);
//   }
// `;

// export const Icon = styled.img`
//   width: 50px;
//   height: 50px;
//   margin:auto;
//   margin-bottom: 15px;
// `;

// export const TitleText = styled.h3`
//   font-size: 16px;
//   color: #333;
//   margin-bottom: 10px;
// `;

// export const JobCount = styled.p`
//   font-size: 14px;
//   color: #777;
// `;



import styled from "styled-components";

export const Container = styled.div`
max-width:100%;


  padding: 20px;
  background-color: #f5f5f5;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #1a3b5d;
  margin-bottom: 20px;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 50px;
    height: 4px;
    background-color: #1a3b5d;
    margin: 10px auto 0;
  }
`;

export const GridContainer = styled.div`


  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
margin: auto;
cursor:pointer;
width:300px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background-color: rgba(190, 250, 251, 0.2);
  }
`;

export const Icon = styled.img`
  width: 90px;
  height: 90px;
  margin: auto;
  margin-bottom: 15px;
`;

export const TitleText = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

export const JobCount = styled.p`
  font-size: 14px;
  color: #777;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;

  button {
    padding: 5px 10px;
    background-color: #1a3b5d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2b7d2e;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 14px;
    color: #333;
  }
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

