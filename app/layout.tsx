import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Announcement from '@/components/announcement/index'
import Navbar from "@/components/header/Navbar";
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
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
