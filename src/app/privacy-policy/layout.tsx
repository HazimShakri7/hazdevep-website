import React from "react";

const PrivacyPolicyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h1>Privacy Policy</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 My Application</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicyLayout;
