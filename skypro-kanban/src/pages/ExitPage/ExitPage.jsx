import { useNavigate } from 'react-router-dom';
import { ExitPageWrapper, ExitMessage, ButtonGroup, Button, ModalOverlay, ModalContent } from './ExitPageStyles';
import { useUser } from '../../contexts/UserContext';


function ExitPage({ setIsAuth }) {
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleConfirmExit = () => {
    setIsAuth(false);
    updateUser(null);
    navigate('/login');
  };

  const handleCancelExit = () => {
    navigate(-1);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ExitPageWrapper>
          <ExitMessage>Выйти из аккаунта?</ExitMessage>
          <ButtonGroup>
            <Button onClick={handleConfirmExit}>Да, выйти</Button>
            <Button onClick={handleCancelExit}>Нет, остаться</Button>
          </ButtonGroup>
        </ExitPageWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ExitPage;