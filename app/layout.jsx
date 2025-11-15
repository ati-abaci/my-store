import LayoutClientWrapper from "@/components/LayoutClientWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
