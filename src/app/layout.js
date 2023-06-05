import "./globals.css";
import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import TopBar from "@/common/TopBar";
import {Inter} from "next/font/google";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "IQRA",
  description:
    "Iqraa platform for teaching the Quran, Arabic language and Islamic studies",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-[#f2ede7]">
        <Navbar />
        <TopBar />
        {children}
        <Footer />
        <ToastContainer theme="light" />
      </body>
    </html>
  );
}
