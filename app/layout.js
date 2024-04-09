import { Inter } from "next/font/google";
import "./globals.css";
import { FilterContextProvider } from "@/context/filterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "College List",
  description: "An app that lists colleges and scholarships abroad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
      <FilterContextProvider>
        <body className={inter.className}>{children}</body>
      </FilterContextProvider>
    </html>
  );
}
