import { FC, useState } from 'react';

import { Footer } from 'presentation/components/footer/footer';
import { FormStatus } from 'presentation/components/form-status/form-status';
import { Input } from 'presentation/components/input/input';
import { LoginHeader } from 'presentation/components/login-header/login-header';
import { FormContext } from 'presentation/contexts/form/form-context';

import css from './login-styles.module.scss';

export interface LoginProps {}

type LoginState = {
  isLoading: boolean;
  errorMessage: string;
};

export const Login: FC<LoginProps> = () => {
  const [state] = useState<LoginState>({
    isLoading: false,
    errorMessage: '',
  });

  return (
    <div className={css.login}>
      <LoginHeader />
      <FormContext.Provider value={state}>
        <form className={css.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button className={css.submit} type="submit">
            Entrar
          </button>
          <span className={css.link}>Criar conta</span>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  );
};
