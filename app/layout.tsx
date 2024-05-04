import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blockchain Engineer | Taku Yamamoto",
  description: "I am a seasoned Blockchain Engineer with seven years of expertise in designing engaging, user-friendly interfaces for blockchain applications. My skill set includes mastery of modern frameworks such as REACT, VUE, NEXT, and NUXT, enabling me to create interactive and efficient web experiences. My in-depth knowledge of blockchain technology and smart contracts helps me develop secure, scalable solutions that simplify complex processes for users. I excel in collaborating with teams to drive innovations and enhance digital adoption, always pushing the limits of technology to deliver exceptional results. Let’s work together to leverage cutting-edge solutions for your digital challenges.",
  keywords: ["blockchain", "engineer", "front-end", "developer", "taku", "yamamoto", "blockchain engineer", "taku yamamoto", "blockchain developer", "taku yamamoto developer", "taku yamamoto blockchain engineer", "taku yamamoto blockchain developer", "taku yamamoto front-end developer", "taku yamamoto front end developer", "taku"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="theme init" src="/js/theme.js" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
