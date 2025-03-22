import Hero from "@/components/shared/Hero";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero
        image="homeImage.jpg"
        title="Все услуги для людей"
        description="Документация, планировка и прочие услуги в сфере строительства."
        cardTitle="Свяжитесь с нами чтобы узнать подробнее"
      />
    </main>
  );
}
