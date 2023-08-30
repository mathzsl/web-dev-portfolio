import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "A viagem de Chihiro",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className}  bg-gradient-to-r from-green-app-500 to-green-app-700`}
      >
        <div className="max-w-screen-lg min-h-screen m-auto px-4">
          <Header />

          <main className="flex flex-col-reverse items-center pb-24 mt-24 justify-between lg:h-app lg:flex-row lg:pb-0 lg:mt-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
