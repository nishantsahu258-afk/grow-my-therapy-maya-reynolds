import Header from "@/components/site/header";
import Hero from "@/components/site/hero";
import Intro from "@/components/site/intro";
import WhoIHelp from "@/components/site/who-i-help";
import QuoteBand from "@/components/site/quote-band";
import Expertise from "@/components/site/expertise";
import Approach from "@/components/site/approach";
import Honoring from "@/components/site/honoring";
import Specialties from "@/components/site/specialties";
import Office from "@/components/site/office";
import CtaBand from "@/components/site/cta-band";
import Footer from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Intro />
        <WhoIHelp />
        <QuoteBand />
        <Expertise />
        <Approach />
        <Honoring />
        <Specialties />
        <Office />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
