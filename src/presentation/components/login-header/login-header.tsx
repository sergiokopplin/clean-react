import { FC, memo } from 'react';

import { Logo } from 'presentation/components/logo/logo';

import Styles from './login-header-styles.module.scss';

export interface LoginHeaderProps {}

const LoginHeaderComponent: FC<LoginHeaderProps> = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  );
};

export const LoginHeader = memo(LoginHeaderComponent);
