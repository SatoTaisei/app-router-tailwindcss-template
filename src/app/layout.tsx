import type { ReactNode } from 'react';

import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/system';

import { Footer, Header, Main } from '@/components';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <NextUIProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
