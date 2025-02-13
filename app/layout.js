import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google'

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["200","300","400","500","600","700","800"],
});

export const metadata = {
  title: "Harry Kane",
  description: "a Web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${PlusJakartaSans.className} antialiased bg-bgcolor text-white`}
      >
        {children}
      </body>
    </html>
  );
}
