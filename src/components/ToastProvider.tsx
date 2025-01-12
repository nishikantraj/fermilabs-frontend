/**
 * ToastProvider.tsx
 * Global toast notification provider using Sonner
 */

import { Toaster } from 'sonner';

export function ToastProvider() {
  return <Toaster position="bottom-center" theme="dark" richColors />;
}
