import type { ReactNode } from 'react';

import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/system';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
