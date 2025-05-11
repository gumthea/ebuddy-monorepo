'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import ThemeRegistry from '@/providers/ThemeRegistry';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </Provider>
      </body>
    </html>
  );
}
