"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  return (
    <section className="second w-full h-full fixed  visible" id="aboutMe">
      <div className="outer w-full h-full overflow-y-hidden">
        <div className="inner w-full h-full overflow-y-hidden">
          <div className="bg one w-full h-full absolute top-0 flex items-center justify-center bg-cover bg-no-repeat bg-[url('/assets/images/city-background-2.jpg')]">
            <div className="w-10/12 mx-auto h-full pt-28 flex flex-col justify-start md:flex-row-reverse md:justify-center md:items-center md:gap-10 ">
              {/* box-right */}
              <div className="w-full h-auto uppercase text-center font-chakra-petch">
                <h2
                  className="text-4xl md:text-left md:text-5xl md:pb-4"
                  id="aboutText"
                >
                  About Me
                </h2>
                <div className="about py-4 text-left">
                  <p>Name: Siraphop Tinthuwanon</p>
                  <p className="py-4">Nickname: Fa</p>
                  <div className="w-full h-full p-4 bg-[rgba(0,0,0,0.7)]">
                    <p className="pb-4 text-lg">Education</p>
                    <p>Degree: Bachelor of Arts </p>
                    <p>Major: Information Studies </p>
                    <p>Faculty: Humanities</p>
                    <p>University: Chiang mai university</p>
                    <p>GPA: 3.01 / 4.0</p>
                  </div>
                </div>
              </div>

              {/* box-left */}
              <div className="description w-full h-auto p-4 font-chakra-petch bg-[rgba(0,0,0,0.7)] md:h-2/2 md:flex md:flex-col md:justify-center ">
                <h2 className="text-lg font-medium md:text-3xl">Description</h2>
                <p className="pt-4 md:text-lg">
                  Hello, My name is Siraphop Tinthuwanon. I recently graduated
                  with a degree in Information Studies from Chiang Mai
                  University. I have a strong passion for front-end development
                  and have gained experience through internships and self-study.
                  In my free time, I enjoy playing games and coding, which helps
                  me enhance my logical thinking skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
