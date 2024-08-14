import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => {
  return (
    <main className="w-full min-h-screen p-4 bg-slate-50">{children}</main>
  );
};
