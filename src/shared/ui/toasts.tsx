import { X } from 'lucide-react'
import { type ToastT, toast } from 'sonner'

interface ToastProps extends Omit<ToastT, 'id'> {}

const Toasts = {
  info: (props?: ToastProps) =>
    toast.info('Info', {
      cancel: {
        label: <X size={16} strokeWidth={1.75} />
      },
      ...props
    }),
  success: (props?: ToastProps) =>
    toast.success('Success', {
      cancel: {
        label: <X size={16} strokeWidth={1.75} />
      },
      ...props
    }),
  error: (props?: ToastProps) =>
    toast.error('Error', {
      cancel: {
        label: <X size={16} strokeWidth={1.75} />
      },
      ...props
    })
}

export default Toasts
