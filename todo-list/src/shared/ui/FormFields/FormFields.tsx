import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { Input } from '../Input/Input'; // Или путь к вашей функции classNames
import { classNames } from '../../lib/classNames';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  label?: string;
  type?: 'text' | 'checkbox' | 'search';
  placeholder?: string;
  className?: string;
  onChange?: (value: T) => void;
  baseClass?: string;
  htmlFor?: string;
}

const FormField: React.FC<FormFieldProps<any>> = ({
  control,
  name,
  label,
  type = 'text',
  placeholder,
  className,
  onChange,
  baseClass,
  htmlFor,
}) => {
  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div className="form-group form-check">
            <Input
              checked={field.value}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              className={classNames(`${baseClass}`, {}, error?.message ? ['is-invalid'] : [])}
            />
            <label htmlFor={htmlFor} className="form-check-label">
              {label}
            </label>
          </div>
        )}
      />
    </div>
  );
};

export default FormField;
