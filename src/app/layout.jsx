import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "KyuAnimeList",
  description: "Website Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-gradient-to-r from-[#c2d7ff] to-[#8db3ff]`} >
        <Navbar/>
        {children}</body>
    </html>
  );
}
