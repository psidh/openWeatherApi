/* eslint-disable @next/next/no-page-custom-font */
"use client";
import Image from 'next/image';
import styled, { createGlobalStyle } from "styled-components";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Weather from './components/Weather';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;
export default function Home() {

  return (
    <div style={{ fontFamily: 'Ambit, sans-serif'}} >
    
    <div className="font-Ambit bg-gradient-to-r text-white dark:text-white from-blue-500 via-blue-400 to-blue-300 bg-white dark:bg-black">
    <GlobalStyle />  
    <Navbar />
    <Weather />
    </div> 
    </div>
  );
}
