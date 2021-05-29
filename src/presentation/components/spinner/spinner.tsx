import { FC, HTMLAttributes } from 'react';

import css from './spinner-styles.module.scss';

type Props = HTMLAttributes<HTMLElement>;

export const Spinner: FC<Props> = (props: Props) => {
  return (
    <div {...props} className={[css.spinner, props.className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
