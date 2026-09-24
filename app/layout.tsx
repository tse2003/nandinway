import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "NANDINWAY | Таны нандин дурсамж эндээс эхэлнэ",
  description:
    "Олон улсын болон дотоодын нислэгийн тийз, визний зөвлөгөө, байгууллага болон групп аяллын үйлчилгээ. Утас: 7000 2929.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
