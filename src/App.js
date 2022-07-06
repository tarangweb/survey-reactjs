import './App.css';
import FormListing from './pages/FormListinges/FormListing';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import CreateForm from './pages/FormCreationes/CreateForm';
import FormResponse from './pages/FormListinges/FormResponse';
import React, { createContext } from 'react';

const SurveyTitle = createContext();

function App() {
  return (
    <>
      <SurveyTitle.Provider value={'Survey Creator App'}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<FormListing />} />
            <Route exact path='/create-form' element={<CreateForm />} />
            <Route path='/form-response/:slug' element={<FormResponse />} />
          </Routes>
        </BrowserRouter>
      </SurveyTitle.Provider>
    </>
  );
}

export default App;
export {SurveyTitle};