const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Smart Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="skeuo-card p-6">
            <i className="bi bi-broadcast text-4xl text-green-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">IoT Sensors</h3>
            <p className="text-gray-600">
              Real-time monitoring of fill levels and waste composition
            </p>
          </div>
          <div className="skeuo-card p-6">
            <i className="bi bi-graph-up-arrow text-4xl text-green-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
            <p className="text-gray-600">
              Comprehensive data analysis and predictive insights
            </p>
          </div>
          <div className="skeuo-card p-6">
            <i className="bi bi-truck text-4xl text-green-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">Route Optimization</h3>
            <p className="text-gray-600">
              AI-powered collection route planning and optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
