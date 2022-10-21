import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const Main = React.lazy(() => import('./pages/Main'));
const Detail = React.lazy(() => import('./pages/Detail'));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </Suspense>
  );
};

export default App;
