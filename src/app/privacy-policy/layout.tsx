export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>Privacy Policy Header</header>
      <main>{children}</main>
      <footer>Privacy Policy Footer</footer>
    </div>
  );
}