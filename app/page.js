import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { ScrollProvider } from "@/components/GlobalState";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Rates from "@/components/Rates";

export default function Home() {
  return (
    <ScrollProvider>
      <Header />
      <Main />
      <Features />
      <Rates />
      <Footer />
    </ScrollProvider>
  );
}
