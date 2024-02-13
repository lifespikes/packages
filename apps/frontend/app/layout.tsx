import './global.css';

export const metadata = {
  title: 'Welcome to apps/frontend',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-background">
      <body>{children}</body>
    </html>
  );
}
