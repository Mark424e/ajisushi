import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aji Sushi",
  description: "Velkommen til vores sushi-paradis, hvor vi tilbyder både ad libitum og à la carte sushi, samt takeaway! Nyd vores lækre sushi i restauranten eller hjemme med vores takeaway-service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}

      </body>
    </html>
  );
}
