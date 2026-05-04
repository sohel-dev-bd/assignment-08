import { Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


const robotoFont = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat",
  description: "QurbaniHat is a modern and reliable online marketplace designed for buying and selling Qurbani animals. Users can بسهولة browse cows, goats, and other livestock, view detailed information, compare prices, and choose the perfect animal for Eid-ul-Adha. Built with Next.js for fast performance and a smooth user experience.",
  icons: {
    icon: "/cowLogo.jpg",
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
