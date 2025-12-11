import { Hero } from './components/Hero';
import { Horizons } from './components/Horizons';
import { Services } from './components/Services';
import { Advantages } from './components/Advantages';
import { Approach } from './components/Approach';
import { CTA } from './components/CTA';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <Hero />
      <Horizons />
      <Services />
      <Advantages />
      <Approach />
      <CTA />
    </div>
  );
}
