import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Chiki Portfolio",
  description: "Showcasing my front-end skills",
};

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
