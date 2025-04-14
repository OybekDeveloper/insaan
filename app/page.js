// pages/index.js
import Hero from "@/components/shared/Hero";

export default function Home() {
  return (
    <main>
      <Hero
        image="homeImage.jpg"
        title="Все услуги для людей"
        description="Документация, планировка и прочие услуги в сфере строительства."
        cardTitle="Свяжитесь с нами чтобы узнать подробнее"
        cardButtonText="Связаться"
        cardButtonLink="/contact"
        imagePosition="bottom"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={true}
      />
      {/* Other content sections */}
    </main>
  );
}