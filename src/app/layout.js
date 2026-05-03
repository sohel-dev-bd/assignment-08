import { Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


const robotoFont = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiles Gallery",
  description: "Tiles Gallery is a modern, high-performance web application designed to showcase a premium collection of interior and architectural tiles. Built with Next.js, it offers a seamless experience for users to browse, search, and explore detailed tile specifications in a visually aesthetic environment.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${robotoFont}h-full antialiased`}
    >
      <body className="bg-teal-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
