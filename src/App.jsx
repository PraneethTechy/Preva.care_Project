import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Sign In",
    type: "signin", // special type to render form
  },
  {
    id: 2,
    title: "Medicine Delivery",
    bullets: [
      "Upload your prescription",
      "Doorstep delivery within hours",
      "Track your orders in app",
      "Safe & verified medicines",
    ],
  },
  {
    id: 3,
    title: "Health Monitoring",
    bullets: [
      "Track vitals in real-time",
      "Smart health reports",
      "Personalized reminders",
      "Integrated with wearables",
    ],
  },
  {
    id: 4,
    title: "Lab Test Booking",
    bullets: [
      "Schedule tests from home",
      "Trusted partner labs",
      "Digital test reports",
      "Discounted packages",
    ],
  },
  {
    id: 5,
    title: "Emergency Support",
    bullets: [
      "24/7 medical helpline",
      "Ambulance booking",
      "Critical care guidance",
      "One-tap emergency call",
    ],
  },
];

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextFeature = () =>
    setActiveIndex((prev) => (prev + 1) % features.length);
  const prevFeature = () =>
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 bg-white sticky top-0 pl-50">
      {/* Company Title at Left Top */}
      <h1 className="absolute top-4 left-6 text-2xl font-bold text-blue-600 m-5">
        Preva.care
      </h1>

      {/* Left Panel */}
      <div className="w-full md:w-1/3 flex flex-col justify-center h-full mt-12">
        <h3 className="text-blue-600 font-semibold mb-2">
          Feature No.{features[activeIndex].id} -
        </h3>
        <h2 className="text-2xl font-bold mb-4">
          {features[activeIndex].title}
        </h2>

        {features[activeIndex].type === "signin" ? (
<ul className="list-disc ml-6 text-gray-600 space-y-2">
    <li>Secure login with email & password</li>
    <li>Access your personal health dashboard</li>
    <li>View past prescriptions & lab reports</li>
    <li>Sync data across devices</li>
  </ul>        ) : (
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            {features[activeIndex].bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}

        {/* Arrows with center line */}
        <div className="flex items-center mt-8 space-x-8">
          <button
            onClick={prevFeature}
            className="text-2xl text-gray-500 hover:text-blue-600"
          >
            ←
          </button>
          <div className="w-[2px] h-6 bg-blue-500"></div>
          <button
            onClick={nextFeature}
            className="text-2xl text-gray-500 hover:text-blue-600"
          >
            →
          </button>
        </div>
      </div>

      {/* Center iPhone Mockup */}
      <div className="w-full md:w-1/3 flex justify-center my-10 md:my-0 mr-30">
        <div className="relative w-[300px] h-[600px] rounded-[3rem] border-[10px] border-black bg-gray-100 shadow-2xl overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl"></div>

          {/* Feature Content */}
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={features[activeIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {features[activeIndex].type === "signin" ? (
                  <div className="w-full max-w-xs text-left">
                    <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">
                      Sign In
                    </h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-blue-600 mb-4">
                      {features[activeIndex].title}
                    </h3>
                    <ul className="text-gray-700 text-sm space-y-2">
                      {features[activeIndex].bullets.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-1/3 flex flex-col justify-center mt-12 md:mt-0">
        <h2 className="text-lg font-bold mb-4">Feature Showcase</h2>
        <div className="space-y-4">
          {features.map((feature, i) => (
            <button
              key={feature.id}
              onClick={() => setActiveIndex(i)}
              className={`relative block w-full text-left pl-6 pr-4 py-2 rounded transition ${
                activeIndex === i
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {/* Blue bar on active */}
              {activeIndex === i && (
                <span className="absolute left-0 top-0 h-full w-[2px] bg-blue-600"></span>
              )}
              Feature {feature.id} : {feature.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
