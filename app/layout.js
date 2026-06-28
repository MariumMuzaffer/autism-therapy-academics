import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Autism Therapy & Academics",
  description:
    "Autism Therapy & Academics is a BCBA-led ABA therapy practice delivering evidence-based, 1:1 treatment, parent coaching, and academic support for children 18 months to 14 years.",
  icons: {
    icon: "https://res.cloudinary.com/dn7cdtibf/image/upload/v1782556219/df4b2e1e-63a7-4e98-95c5-41fab85089d0_removalai_preview_glamiy.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
