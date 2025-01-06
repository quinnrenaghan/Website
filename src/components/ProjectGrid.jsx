import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <a 
            href={project.link}
            className="block bg-paper border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
        >
            <div className="w-full">
                <img 
                    src={project.imageUrl} 
                    alt={project.name}
                    className="w-full object-contain"
                />
            </div>
            
            <div className="p-4 flex flex-col flex-1">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-rose-800 break-words">
                            {project.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-black flex-shrink-0" />
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                        {project.description}
                    </p>
                </div>
                
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className={`px-2 py-1 text-sm rounded ${tech.bgColor} ${tech.textColor || 'text-black'}`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
};




const ProjectsGrid = () => {
    const projects = [
    {
        name: "Personal Website",
        description: "I built this portfolio website with Astro, JS, React, and Tailwind. It is deployed on Netlify.",
        technologies: [
            { name: "Astro", bgColor: "bg-purple-100", textColor: "text-purple-900" },
            { name: "React", bgColor: "bg-red-100", textColor: "text-red-900" },
            { name: "Tailwind", bgColor: "bg-cyan-100", textColor: "text-cyan-900" },
            { name: "Javascript", bgColor: "bg-lime-100", textColor: "text-lime-900" }
        ],
        link: "/",
        imageUrl: "/website.png"
    },
    {
        name: "Catan Board Generator",
        description: "Settlers of Catan, also known as Catan, is a multiplayer board game where players build settlements and trade resources on the island of Catan. I coded a Python program that generates and evaluates Catan board set-ups. By grading each board on 7 metrics describing fairness and balance, the program gives the user a board that removes variance from the game.",
        technologies: [
            { name: "Python", bgColor: "bg-blue-100", textColor: "text-blue-900" },
        ],
        link: "https://github.com/quinnrenaghan/catan-board-gen",
        imageUrl: "/catan.jpg"
    },
    {
        name: "Tree-Walking Interpreter",
        description: "I wrote a tree-walking interpreter in C, which can analyze and evaluate programs written in a made-up programming language. The language supports features including booleans, integers, strings, functions, conditional expressions, and more. Users can write programs in the language and the REPL will evaluate the program and print the result.",
        technologies: [
            { name: "C", bgColor: "bg-gray-100", textColor: "text-gray-900" },
        ],
        link: "https://github.com/quinnrenaghan/simple_tree_walking_interpreter_c",
        imageUrl: "/interpreter.png"
    },
    {
        name: "Jurisprudence Article Scraping - RSS Feed",
        description: "RSS Feeds are often used to receive updates from websites, blogs, and other online publishers. This project scrapes articles from the Jurisprudence feed and formats the data into a JSON format that can be read by an RSS Feed reader. The script can be easily deployed via AWS Lambda for continuous updates.",
        technologies: [
            { name: "Python", bgColor: "bg-blue-100", textColor: "text-blue-900" },
            { name: "AWS", bgColor: "bg-green-100", textColor: "text-green-900" }
        ],
        link: "https://github.com/quinnrenaghan/webpage-jsonfeed",
        imageUrl: "/jurisprudence.png"
    },
    {
        name: "Climate Activist Data Analysis",
        description: "I helped to analyze hundreds of survey samples from climate activists at various marches, rallies, and demonstrations in the D.C. area. In this article, Dr. Fisher and I present our findings.",
        technologies: [],
        link: "https://www.brookings.edu/articles/understanding-the-growing-radical-flank-of-the-climate-movement-as-the-world-burns/",
        imageUrl: "/climate.jpeg"
    }
    ];

    return (
    <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-medium mb-6 text-rose-800 text-center">Project Archive</h1>
        <div className="max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    </div>
    );
};

export default ProjectsGrid;