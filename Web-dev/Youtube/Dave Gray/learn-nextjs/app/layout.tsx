import "./globals.css";

export const metadata = {
  title: "Next",
  description: "Learn Nestjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <nav>
          <h1>Black Nav</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
