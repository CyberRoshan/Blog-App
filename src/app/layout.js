import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import MainContext from "./MainContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Writelog Blogs",
  description: "Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContext>
        {children}
        </MainContext>
        </body>
    </html>
  );
}
