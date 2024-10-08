import { useNavigate } from 'react-router-dom';
import { ExitPageWrapper, ExitMessage, ButtonGroup, Button, ModalOverlay, ModalContent } from './ExitPageStyles';
import { useUser } from '../../contexts/UserContext';
import { AppRoutesObj } from '../../routes/routes';

function ExitPage() {
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleConfirmExit = () => {
    updateUser(null);
    navigate(AppRoutesObj.LOGIN);
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