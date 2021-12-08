import type { ControllerRenderProps } from 'react-hook-form'
import { forwardRef } from 'react'

interface Props extends ControllerRenderProps {
  id: string
  label: string
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ id, label, ...props }, ref) => {
    return (
      <div className="mb-6">
        <label htmlFor={id} className="block font-medium mb-1">
          {label}
        </label>
        <input
          type="text"
          {...props}
          className="w-full border border-gray-300 p-4 rounded-md"
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
