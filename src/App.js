import React from 'react';
import AuthLayout from './components/layout/AuthLayout';
import Login from './components/Login';

function App() {
  return <AuthLayout children={<Login />} />;
}

export default App;
