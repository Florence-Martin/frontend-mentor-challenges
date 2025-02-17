import { Outfit } from "next/font/google";
import "./globals.css";
const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-outfit",
});
export const metadata = {
    title: "QR Code Component",
    description: "Generated by create next app",
};
export default function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={`${outfit.variable} bg-light-grey flex min-h-screen items-center justify-center`}>
        {children}
      </body>
    </html>);
}
