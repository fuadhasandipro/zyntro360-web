import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
