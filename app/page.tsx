import FeaturedProducts from '@/components/FeaturedProducts';
import About from '@/components/About';
import Contact from '@/components/Contact';
import WhyChooseUs from '@/components/Why';

export default function Home() {
  return (
    <main>
      <WhyChooseUs />
      <FeaturedProducts />
      <div id='about'>
      <About />
      </div>
      <Contact />
    </main>
  );
}
