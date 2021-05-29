import { FC, useContext } from 'react';

import { Spinner } from 'presentation/components/spinner/spinner';
import { FormContext } from 'presentation/contexts/form/form-context';

import Styles from './form-status-styles.module.scss';

export interface FormStatusProps {}

export const FormStatus: FC<FormStatusProps> = () => {
  const { isLoading, errorMessage } = useContext(FormContext);

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>Erro</span>}
    </div>
  );
};
