import { useState } from 'react';
import styles from './login.module.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles["form-control"]}>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChangeUsername}
          required  
        />
      </div>

      <div className={styles["form-control"]}>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>

      <button className="btn" type="submit">Enviar</button>
    </form>
  );
};
