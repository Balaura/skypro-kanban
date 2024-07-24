import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPageStyles';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    if (!value.trim()) {
      return 'Заполните это поле.';
    }
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      return 'Введите корректный email.';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);

    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      username: validateField('username', username),
      email: validateField('email', email),
      password: validateField('password', password)
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      // Здесь будет логика регистрации пользователя в 5 домашке
      console.log('Registration:', username, email, password);
      navigate('/login');
    }
  };

  return (
    <RegisterWrapper>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Регистрация</Title>
        <InputWrapper>
          <Input
            name="username"
            type="text"
            value={username}
            onChange={handleInputChange}
            placeholder="Имя пользователя"
            error={errors.username}
          />
          {errors.username && <FieldErrorMessage>{errors.username}</FieldErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"
            error={errors.email}
          />
          {errors.email && <FieldErrorMessage>{errors.email}</FieldErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Пароль"
            error={errors.password}
          />
          {errors.password && <FieldErrorMessage>{errors.password}</FieldErrorMessage>}
        </InputWrapper>
        <Button type="submit">Зарегистрироваться</Button>
        <LinkWrapper>
          <p>Уже есть аккаунт?</p> <Link to="/login"><u>Войдите здесь</u></Link>
        </LinkWrapper>
      </RegisterForm>
    </RegisterWrapper>
  );
}

export default RegisterPage;