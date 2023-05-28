import CarSection from "@/components/CarSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <Section model="Model 3" background="tesla-model-3.avif" icon={true}>
        <Header />
      </Section>
      <Section model="Model Y" background="tesla-model-y.avif"></Section>
      <Section model="Model X" background="tesla-model-x.avif"></Section>
      <Section model="Accessories" background="tesla-accessories.avif">
        <Footer />
      </Section>
    </>
  );
}

{
  /* <Header /> */
}
