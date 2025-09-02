import Title from "./title";


import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Gestionnaire de tâches',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Plateforme E-commerce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Next.js', 'TypeScript', 'Prisma'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Application de Chat en temps réel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['React', 'Socket.io', 'Express.js'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Système de réservation de salles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Analyseur de sentiment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Python', 'Flask', 'NLTK'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },
];

function Projects() {
    return (
        <div className="mt-20" id="Projects">
            <Title title="MY Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-xl">
                        <img src={project.image} alt={project.title} className="w-full rounded-xl h-56 object-cover" />
                        <div>
                            <h1 className="my-2  font-bold">{project.title}</h1>
                            <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap  "> 
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="badge badge-info badge-outline  badge-sm mr-2 mt-2">{tech}</span>
                            ))}
                        </div>
                        <div className="flex  mt-4">
                            <a href={project.demoLink} className="btn btn-sm btn-info w-2/3 flex items-center">
                                <Video className="mr-1 w-4 h-4" />
                                Demo
                            </a>
                            <a href={project.repoLink} className="btn btn-sm  w-1/3 ml-2 btn-neutral flex items-center">
                                <Github className="mr-1 w-4 h-4" />
                                Repo
                            </a>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default Projects;