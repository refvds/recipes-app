import React from 'react'

import { Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { HomePage } from './pages/Home'

import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}
