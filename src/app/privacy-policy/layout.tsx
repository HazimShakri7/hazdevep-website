// src/app/layout.tsx
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Layout for Privacy Policy</title>
        {/* Add other mTeta tags or links to stylesheets here */}
      </head>
      <body>
        <header>
          {/* Your site header (navigation, logo, etc.) */}
          <h1>PrivacyPolicy</h1>
        </header>
        <main>{children}</main>
        <footer>
          {/* Your site footer */}
          <p>&copy; PrivacyPolicy</p>
        </footer>
      </body>
    </html>
  );
}
