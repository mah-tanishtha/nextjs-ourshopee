import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";

export const metadata = { title: "Mini Shop", description: "Next.js E-commerce App" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <CartProvider>
          <Header />
          <main className="max-w-5xl mx-auto p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
