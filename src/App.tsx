import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import DetailPage from './pages/detail';
import LayoutClient from './containers/layout-client';
import GlobalContextProvider from './context/global-context';
import CategoryPage from './pages/category';
import ArtistPage from './pages/artist';

function App() {
  return <GlobalContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutClient />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/artist' element={<ArtistPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Route>

        <Route path='*' element={<h2>not found</h2>} />
      </Routes>
    </BrowserRouter>
  </GlobalContextProvider>
  
}

export default App;

//set up routes
//context
//bootstrap
//icons
