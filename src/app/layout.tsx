import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/screens/Header";
import Footer from "@/components/screens/Footer";
import ReduxProvider from "@/store/ReduxProvider";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "YourMeal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
