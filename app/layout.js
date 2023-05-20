import "./globals.css";

export const metadata = {
  title: "Chiki Portfolio",
  description: "Showcasing my front-end skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
