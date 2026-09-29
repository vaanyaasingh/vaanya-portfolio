import { useId } from 'react';

export function Input({ label, multiline = false, error, className = '', ...rest }) {
  const id = useId();
  const El = multiline ? 'textarea' : 'input';
  return (
    <div className={'field' + (error ? ' has-error' : '') + ' ' + className}>
      <label className="field__label" htmlFor={id}>{label}</label>
      <El id={id} className="field__input" rows={multiline ? 3 : undefined} aria-invalid={!!error} aria-describedby={error ? id + '-err' : undefined} {...rest} />
      <span className="field__line" aria-hidden="true" />
      {error && <span className="field__error" id={id + '-err'} role="alert">{error}</span>}
    </div>
  );
}
