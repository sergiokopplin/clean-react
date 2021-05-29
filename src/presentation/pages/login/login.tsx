import { FC } from 'react';

import { Spinner, Footer, LoginHeader, Input } from 'presentation/components';

import css from './login-styles.module.scss';

export interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  return (
    <div className={css.login}>
      <LoginHeader />
      <form className={css.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
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
