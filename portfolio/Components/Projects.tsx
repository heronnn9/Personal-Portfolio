import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Moviestagram",
    description:
      "This project is a fun demo where users can sign up and log in. They can explore movie and TV show information in different genres and add them to custom lists according to their preferences. Finally, if they want, they can share their lists with everyone",
    image: "/movie.jpg",
    github: "https://github.com/heronnn9/finalprojectt",
    link: "https://moviestagram.vercel.app/",
  },
  {
    name: "CarHub",
    description:
      "In this project, you can search for the cars you like and learn about those cars. The website is fully responsive. I tried to use https://www.imagin.studio/car-image-api but i could not get api key so car images did not fetch",
    image: "/Carhub.png",
    github: "https://github.com/heronnn9/Car-Modal-Application",
  },
  {
    name: "Destek Farmazon",
    description:
      "This project is a copy of https://yardim.farmazon.com.tr/tr/. To learn how to use CSS and how to do responsive website.",
    image: "/farmazon.jpg",
    github: "https://github.com/heronnn9/farmazon_copy",
  },
  {
    name: "Weather App",
    description:
      "In this project, you can learn the weather conditions of the city you want.",
    image: "/Weather.jpg",
    github: "https://github.com/heronnn9/Weather-Application",
  },
  {
    name: "Pokemon App",
    description:
      "In this project you can search a pokemon and you can learn their stats",
    image: "/poke.png",
    github: "https://github.com/heronnn9/Pokemon-App",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <div>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </div>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
