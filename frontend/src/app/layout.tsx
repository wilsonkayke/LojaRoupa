import { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Dom da Bia",
  description: "Bolos e Salgados",
  openGraph:{
    title: "Dom da Bia. O melhor salgados que você vai comer!",
    description: "Aqui você pede sua encomenda e ganha um dia inteiro de felicidades",
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
