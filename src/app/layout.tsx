// app/layout.tsx
import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react"; // Importa o NextUIProvider
import "./globals.css";

export const metadata: Metadata = {
  title: "Cadastro de Professores",
  description: "App criado com Next.js, NextUI e Atomic Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
