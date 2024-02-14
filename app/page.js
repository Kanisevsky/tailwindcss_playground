import Alert from '@/components/Alert';
import ContactCard from '@/components/ContactCard';
import ContactCardList from '@/components/ContactCardList';
import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  return (
    <main>
      <Alert />
      <ContactCard />
      <FeatureCard />
      <ContactCardList />
    </main>
  );
}
