import "./global.css";
import "./variables.css";

export const metadata = {
  title: "UK Charity Camp",
  description:
    "An unconference event that allows charities from accross the sector to come together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
