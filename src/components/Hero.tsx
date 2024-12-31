import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-pattern min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Smart Waste Management for Smart Cities
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your urban waste management with our IoT-powered
              solutions. Real-time monitoring, data-driven insights, and
              automated collection optimization.
            </p>
            <button className="skeuo-button text-white px-8 py-4 rounded-full text-lg font-semibold">
              Get Started Today
            </button>
          </div>
          <div className="skeuo-card p-8">
            <Image
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
              alt="Smart Waste Management"
              width={500} // Width of the image in pixels
              height={300} // Height of the image in pixels
              className="rounded-lg w-full" // Maintain responsiveness
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
