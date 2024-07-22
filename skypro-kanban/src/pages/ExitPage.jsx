import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ExitPage({ setIsAuth }) {
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(false);
    navigate('/login');
  }, [setIsAuth, navigate]);

  return <h1>Logging out...</h1>;
}

export default ExitPage;