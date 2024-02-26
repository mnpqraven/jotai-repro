"use client";

import { DevTools } from "jotai-devtools";
import { Provider } from "jotai";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      {children}

      <DevTools isInitialOpen={false} theme="dark" />
    </Provider>
  );
}
