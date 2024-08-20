import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import About from '@/components/About';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="my-10 p-5 bg-base-100 rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4">Why Choose Bloom's Garden?</h2>
        <p>
          We offer a wide selection of flowers and plants that will bring life to your home or garden. 
          Our expert gardeners hand-pick the best flowers for you.
        </p>
        <button className="btn btn-primary mt-5">Learn More</button>
      </div>
      <FeaturedProducts />
      <About />
    </div>
  );
}
