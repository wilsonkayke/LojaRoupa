import { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Loja roupa",
  description: "Vendas de roupas, coleção de grife e marcas",
  openGraph:{
    title: "Loja de roupa, coleção de marcas",
    description: "Aqui você compra suas roupas online com segurança e uma qualidade fora do normal.",
    //Para adicionar imagens 
    images: ['https://adicineaquiumaimagem.com/suaimagem'],
  },
  //
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body 
      className="{`antialiased`}">

        {/* <Header/> */}
        
        {children}
      </body>
    </html>
    
  );
} 
