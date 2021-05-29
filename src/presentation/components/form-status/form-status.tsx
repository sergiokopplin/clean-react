import { FC } from 'react';

import { Spinner } from 'presentation/components';

import Styles from './form-status-styles.module.scss';

export interface FormStatusProps {}

export const FormStatus: FC<FormStatusProps> = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  );
};
