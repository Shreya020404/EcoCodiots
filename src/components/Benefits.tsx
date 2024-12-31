import Image from "next/image";
   const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="skeuo-card p-8">
            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="bi bi-check-circle-fill text-green-500 mr-3"></i>
                <span>Reduce operational costs by up to 30%</span>
              </li>
              <li className="flex items-center">
                <i className="bi bi-check-circle-fill text-green-500 mr-3"></i>
                <span>Decrease carbon emissions</span>
              </li>
              <li className="flex items-center">
                <i className="bi bi-check-circle-fill text-green-500 mr-3"></i>
                <span>Improve citizen satisfaction</span>
              </li>
              <li className="flex items-center">
                <i className="bi bi-check-circle-fill text-green-500 mr-3"></i>
                <span>Real-time monitoring and alerts</span>
              </li>
            </ul>
          </div>
          <div className="skeuo-card p-8">
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
              alt="Environmental Benefits"
              width={500} // Width of the image in pixels
              height={300} // Height of the image in pixels
              className="rounded-lg w-full" // Maintain responsiveness
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
