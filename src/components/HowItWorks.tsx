const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="skeuo-card w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl text-green-600 font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Install Sensors</h3>
            <p className="text-gray-600">
              Smart sensors are installed in waste bins
            </p>
          </div>
          <div className="text-center">
            <div className="skeuo-card w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl text-green-600 font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Collect Data</h3>
            <p className="text-gray-600">
              Real-time monitoring of waste levels
            </p>
          </div>
          <div className="text-center">
            <div className="skeuo-card w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl text-green-600 font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Analyze</h3>
            <p className="text-gray-600">AI processes data for insights</p>
          </div>
          <div className="text-center">
            <div className="skeuo-card w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl text-green-600 font-bold">4</span>
            </div>
            <h3 className="font-semibold mb-2">Optimize</h3>
            <p className="text-gray-600">Improve collection efficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
