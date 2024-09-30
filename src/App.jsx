import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react'
import Layout from './layout/layout';
import HomePage from './pages/homepage';
import './App.css'

function App() {

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>

    </Fragment>
  )
}

export default App
