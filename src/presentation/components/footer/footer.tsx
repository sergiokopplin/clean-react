import { FC, memo } from 'react';

import css from './footer-styles.module.scss';

export interface FooterProps {}

const FooterComponent: FC<FooterProps> = () => {
  return <footer className={css.footer} />;
};

export const Footer = memo(FooterComponent);
