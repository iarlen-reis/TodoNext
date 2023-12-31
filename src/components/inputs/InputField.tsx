import { InputHTMLAttributes } from 'react'
import { useController, useFormContext } from 'react-hook-form'

interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  type?: string
  rules?: Object
  defaultValues?: string
}

export const InputField = ({
  label,
  name,
  type,
  rules,
  defaultValues,
  ...rest
}: IInputFieldProps) => {
  const { control } = useFormContext()

  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValues || '',
  })

  return (
    <fieldset className="flex w-full flex-col gap-1">
      <label htmlFor={name} className="w-full font-body font-medium">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-md border border-zinc-400 bg-zinc-300 p-3 outline-none focus:border-blue-400"
        ref={ref}
        {...inputProps}
        {...rest}
      />
      {error && <small className="text-red-400">{error.message}</small>}
    </fieldset>
  )
}
