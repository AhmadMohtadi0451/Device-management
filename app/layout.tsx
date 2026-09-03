import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { SnackbarProvider } from "./snackbarProvider";

export const metadata: Metadata = {
  title: "Device Dashboard",
  description: "Manage your devices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SnackbarProvider>{children}</SnackbarProvider>
        </Providers>
      </body>
    </html>
  );
}
