import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExitePageStyles';

function ExitPage({ setIsAuth }) {
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(false);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }, [setIsAuth, navigate]);

  return (
    <ExitPageWrapper>
      <ExitMessage>Выход из системы...</ExitMessage>
    </ExitPageWrapper>
  );
}

export default ExitPage;