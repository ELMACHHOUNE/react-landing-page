import { CardSpotlight } from "../ui/card-spotlight";

export default function LearnReact() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-8">
      {/* Card 1: Core Concepts */}
      <CardSpotlight className="w-full max-w-xs md:max-w-sm md:w-96 min-h-[22rem] flex-1">
        <p className="text-xl font-bold relative z-20 mt-2 text-[#F9F3EF]">
          Core Concepts
        </p>
        <div className="text-[#D2C1B6] mt-4 relative z-20">
          <p className="mb-2">Master the building blocks of React:</p>
          <ul className="list-disc list-inside ml-4">
            <li>JSX & Virtual DOM</li>
            <li>Components & Props</li>
            <li>State Management</li>
            <li>Component Lifecycle</li>
          </ul>
        </div>
      </CardSpotlight>

      {/* Card 2: Modern React */}
      <CardSpotlight className="w-full max-w-xs md:max-w-sm md:w-96 min-h-[22rem] flex-1">
        <p className="text-xl font-bold relative z-20 mt-2 text-[#F9F3EF]">
          Modern React
        </p>
        <div className="text-[#D2C1B6] mt-4 relative z-20">
          <p className="mb-2">Unlock the power of modern features:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Hooks (useState, useEffect, useContext)</li>
            <li>Context API for global state</li>
            <li>Custom Hooks</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
      </CardSpotlight>

      {/* Card 3: Building Real Projects */}
      <CardSpotlight className="w-full max-w-xs md:max-w-sm md:w-96 min-h-[22rem] flex-1">
        <p className="text-xl font-bold relative z-20 mt-2 text-[#F9F3EF]">
          Building Real Projects
        </p>
        <div className="text-[#D2C1B6] mt-4 relative z-20">
          <p className="mb-2">Apply your skills in real-world scenarios:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Project Structure & Best Practices</li>
            <li>Routing & Navigation</li>
            <li>API Integration</li>
            <li>Deployment & Hosting</li>
          </ul>
        </div>
      </CardSpotlight>
    </div>
  );
}
