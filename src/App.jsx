
import React from 'react';
import './App.css';
import './index.css';
import ProfileImage from './assets/avatar.png';
import { FaLinkedin, FaInstagram, FaGithub, FaDownload } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-[#4229d5] text-white flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold leading-snug mb-4">
            I'm <span className="text-lime-300">Aryando</span>, Full Stack Web Developer.
          </h1>
          <p className="text-lg mb-6">
            I'm Coming from a non-web development background, I decided to transition into the tech industry as a Fullstack Developer.
          </p>

          <p className="text-lg mb-6">
            My interest in understanding how applications work end-to-end from the user interface to server-side data processing Motivated me to learn React.js, Node.js, and databases like MongoDB. I'm committed to continuous learning and contributing to the development of impactful digital products.
          </p>
        {/* Social Media Links */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="https://www.linkedin.com/in/aryando-prasetya" target="_blank" className="bg-white text-black flex items-center justify-center 
        h-12 w-12 rounded-full">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/aryandoprstya?igsh=eGF4cGRubHljOGZl" target="_blank" className="bg-white text-black flex items-center justify-center 
        h-12 w-12 rounded-full">
              <FaInstagram />
            </a>
            <a href="https://github.com/aryando" target="_blank" className="bg-white text-black flex items-center justify-center 
        h-12 w-12 rounded-full">
              <FaGithub />
            </a>
            {/*CV Link */}
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              <FaDownload /> My Curriculum Vitae
            </a>
          </div>
          {/* Education Section */}
          <h2 className="text-left text-2xl font-bold mb-4">Education</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse border border-gray-300 mb-6">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-xl font-bold mb-2">Year</th>
                  <th className="border border-gray-300 px-4 py-2 text-xl font-bold mb-2">Level</th>
                  <th className="border border-gray-300 px-4 py-2 text-xl font-bold mb-2">School Name</th>
                </tr>
              </thead>
             <tbody>
               <tr>
                <td className="border border-gray-300 px-4 py-2 text-base font-semibold">2008 - 2014</td>
                <td className="border border-gray-300 px-4 py-2 text-base font-semibold">Elementary School</td>
                <td className="border border-gray-300 px-4 py-2 text-base font-semibold">SDN 06 Tlajung Udik</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-base font-semibold">2014 - 2017</td>
                  <td className="border border-gray-300 px-4 py-2 text-base font-semibold">Junior High School</td>
                  <td className="border border-gray-300 px-4 py-2 text-base font-semibold">SMPN 1 Klapanunggal</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-base font-semibold">2017 - 2020</td>
                  <td className="border border-gray-300 px-4 py-2 text-base font-semibold">Senior High School</td>
                  <td className="border border-gray-300 px-4 py-2 text-base font-semibold">SMK 2 Amal Mulia Klapanunggal</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        {/* Training Section */}
          <h2 className="text-left text-2xl font-bold mb-4">Training</h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse border border-gray-300 mb-6">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-xl font-bold mb-2">Period</th>
                  <th className="border border-gray-300 px-4 py-2 text-xl font-bold mb-2">Organizer</th>
                  <th className="border border-gray-300 px-4 py-2 text-xl font-bold mb-2">Program</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-base font-semibold">Mar - Aug 2025</td>
                  <td className="border border-gray-300 px-4 py-2 text-base font-semibold">HariSenin.com</td>
                  <td className="border border-gray-300 px-4 py-2 text-base font-semibold">Full Stack Web Development</td>
                </tr>
              </tbody>
            </table>
          </div>

        {/* Skills Section */}
          <h2 className="text-lime-300 text-left text-2xl font-bold mb-4">Skills</h2>
          <div className="overflow-x-auto text-lime-300">
            <table className="w-full min-w-[320px] border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-base font-semibold">Programming Languages & Web</th>
                  <th className="px-4 py-2 text-base font-semibold">Framework</th>
                  <th className="px-4 py-2 text-base font-semibold">CSS Libraries</th>
                  <th className="px-4 py-2 text-base font-semibold">Tools</th>
                  <th className="px-4 py-2 text-base font-semibold">Database</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" align-top text-left">
                    <ul className="list-disc list-inside">
                      <li>JavaScript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                  </td>
              
                  <td className="align-top text-left">
                    <ul className="list-disc list-inside">
                      <li>React</li>
                      <li>Node JS</li>
                    </ul>
                  </td>
                
                  <td className="align-top text-left">
                    <ul className="list-disc list-inside">
                      <li>Bootstrap</li>
                      <li>Tailwind</li>
                    </ul>
                  </td>

                
                  <td className="align-top text-left">
                    <ul className="list-disc list-inside">
                      <li>Figma</li>
                      <li>Git</li>
                    </ul>
                  </td>

                  <td className="align-top text-left">
                    <ul className="list-disc list-inside">
                      <li>MongoDB</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>

        {/* Hobbies Section */}
          <h2 className="text-lime-300 text-left text-2xl font-bold mb-4">Hobbies</h2>
          <div className="overflow-x-auto text-left text-lime-300">
            <ol className="list-decimal list-inside">
              <li>Learning New Technologies</li>
              <li>Learning Programming</li>
              <li>Playing Football</li>
              <li>Traveling</li>
            </ol>
          </div>
          <br />


            <p className="text-lime-300">
              I'm seeking an opportunity to work as a Fullstack Developer in a dynamic company. <strong>Relevant Skill:</strong> such as strong communication, problem-solving, UI and system design, IT governance, and a good sense of design aesthetics.

            </p>
          
        {/* Contact Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <p>Email: aryandoprasetya97@gmail.com</p>
            <p>Phone: +62 895-348-121-518</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl border-2 border-white opacity-50 transform translate-x-4 translate-y-4"></div>
            <img src={ProfileImage} alt="Aryando" className="rounded-xl w-80 object-cover relative z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
