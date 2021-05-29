import { FC, HTMLAttributes } from 'react';

import css from './spinner-styles.module.scss';

export type SpinnerProps = HTMLAttributes<HTMLElement>;

export const Spinner: FC<SpinnerProps> = (props) => {
  return (
    <div {...props} className={[css.spinner, props.className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
