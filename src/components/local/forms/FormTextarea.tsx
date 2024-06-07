import { Textarea } from '@/components/ui/textarea'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Control, FieldValues, Path } from 'react-hook-form'

interface FormTextareaProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder: string
}

const FormTextarea = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder
}: FormTextareaProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default FormTextarea
