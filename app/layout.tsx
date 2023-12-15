import "./global.css";
import "./variables.css";

export const metadata = {
  title: "UK Charity Camp",
  description:
    "An unconference event that means charities accross the sector come together, share and learn.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
