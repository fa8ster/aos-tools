import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='h-full bg-gray-800'>
      <head />
      <body className='h-full'>{children}</body>
    </html>
  );
}
