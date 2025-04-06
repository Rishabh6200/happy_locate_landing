import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Announcement from '@/components/announcement/index'
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Provider>
          <Announcement />
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
