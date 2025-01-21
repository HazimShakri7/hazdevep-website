import React from 'react';

const PrivacyPolicyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>Header Content (optional)</header>
      <main>{children}</main>
      <footer>Footer Content (optional)</footer>
    </div>
  );
};

export default PrivacyPolicyLayout;