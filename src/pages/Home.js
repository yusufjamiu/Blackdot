import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Testimonials from '../pages/Testimonials.js';
import Stats from '../pages/Stats.js';
import projectRequestImage from '../assets/Cover1.png';
import projectRequestImage2 from '../assets/Cover2.png';
import project1 from '../assets/Cover3.png';
import project2 from '../assets/Logo1.jpg';
import project3 from '../assets/Book1.jpg';
import project4 from '../assets/Book2.jpg';
import project5 from '../assets/CardProduct.png';
import project6 from '../assets/HeroImage.png';

function Home() {
  const companies = ['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'];
  const [showMore, setShowMore] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const projects = [
    { id: 1, image: project1, path: '/project1' },
    { id: 2, image: project2, path: '/project2' },
    { id: 3, image: project3, path: '/project3' },
    { id: 4, image: project4, path: '/project4' },
    { id: 5, image: project5, path: '/project5' },
    { id: 6, image: project6, path: '/project6' },
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 4);

  const faqData = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer: 'We offer a wide range of design services, including UI/UX design, web design, mobile app design, and branding.'
    },
    {
      id: 2,
      question: 'How long does the design process typically take?',
      answer: 'The timeline can vary depending on the project scope and complexity, but we strive to deliver high-quality designs within a reasonable timeframe.'
    },
    {
      id: 3,
      question: 'Can you provide examples of your previous work?',
      answer: 'Absolutely! You can find a selection of our previous projects in the portfolio section of our website.'
    },
    {
      id: 4,
      question: 'How do you ensure user-friendly designs?',
      answer: 'We follow a user-centered design approach, conducting thorough research, testing, and iterating to create intuitive and engaging experiences.'
    },
    {
      id: 5,
      question: 'What is your design process?',
      answer: 'Our design process typically involves discovery, wireframing, visual design, prototyping, and testing before finalizing the designs.'
    },
    {
      id: 6,
      question: 'Do you offer ongoing support and maintenance?',
      answer: 'Yes, we offer ongoing support and maintenance services to ensure your designs remain up-to-date and functioning optimally.'
    }
  ];

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h2 className="text-6xl lg:text-9xl text-center font-bold mb-2 mt-20">Blackdot</h2>
        <div className="flex flex-col items-center">
          <p className="text-gray-700 justify-center text-xl max-auto max-w-xl mt-2 font-sans">
            Discover the Ultimate Solution to Dotting the 'i' and Crossing the 't's.
          </p>
        </div>
        <Link to="/project-request" className="inline-block text-blue-700 font-semibold py-2 px-4 mt-4">
          Start a design request+
        </Link>
        <img src={projectRequestImage} alt="Project Request" className="mt-4" />
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl text-center font-bold mb-2 mt-20">Designing for the future</h2>
        <div className="flex flex-col items-center">
          <p className="text-gray-700 justify-center text-2xl max-auto max-w-2xl mt-2 mb-10 font-sans">
            Adept at crasfting seamless user experiences, I leverage cutting-edge technologies to drive innovation.
          </p>
        </div>
        <img src={projectRequestImage2} alt="Project Request" className="mt-4" />
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Trusted by</h2>
        <div className="flex justify-center">
          <div className="marquee whitespace-nowrap">
            {companies.map((company, index) => (
              <span key={index} className="mx-4 text-xl font-semibold">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-15 mt-20">A glimpse into my design portfolio.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {visibleProjects.map((project) => (
            <Link key={project.id} to={project.path} className="relative group">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-300 p-4 rounded-lg">
                  <img
                    src={project.image}
                    alt={`Project ${project.id}`}
                    className="w-full h-auto transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        {!showMore && projects.length > 4 && (
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            onClick={() => setShowMore(true)}
          >
            Show More
          </button>
        )}
      </div>

      {/* Testimonials section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4 mt-20">Testimonials</h2>
        <Testimonials />
      </div>

      {/* Stats section */}
      <Stats />

      {/* Frequently Asked Questions section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4 mt-20">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-100 rounded-lg p-4 mb-4 cursor-pointer"
              onClick={() => toggleQuestion(faq.id)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {activeQuestion === faq.id && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* About section */}
      <div className="mt-16 text-center">
        <About />
      </div>
    </div>
  );
}
export default Home;