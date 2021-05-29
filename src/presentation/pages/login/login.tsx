import { FC } from 'react';

import { Spinner, Footer, LoginHeader } from 'presentation/components';

import css from './login-styles.module.scss';

export const Login: FC = () => {
  return (
    <div className={css.login}>
      <LoginHeader />
      <form className={css.form}>
        <h2>Login</h2>
        <div className={css.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={css.status}>🔴</span>
        </div>
        <div className={css.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <span className={css.status}>🔴</span>
        </div>
        <button className={css.submit} type="submit">
          Entrar
        </button>
        <span className={css.link}>Criar conta</span>
        <div className={css.errorWrap}>
          <Spinner className={css.spinner} />
          <span className={css.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  );
};
