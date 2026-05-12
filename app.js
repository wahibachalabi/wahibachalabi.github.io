const projects = [

    {
        title:"Site E-commerce",

        image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",

        description:
        "Développement d'un site e-commerce complet.",

        technologies:["HTML","CSS","JavaScript"]
    },

    {
        title:"Application Todo",

        image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

        description:
        "Gestionnaire de tâches avec ReactJS.",

        technologies:["ReactJS","CSS","JavaScript"]
    }

];

function ProjectCard(props){

    return(

        <div className="project-card">

            <img src={props.image} />

            <div className="project-content">

                <h3>{props.title}</h3>

                <p>{props.description}</p>

                <div className="techs">

                    {
                        props.technologies.map((tech,index)=>

                            <span key={index}>
                                {tech}
                            </span>

                        )
                    }

                </div>

            </div>

        </div>

    );

}

function App(){

    return(

        <div className="projects">

            {
                projects.map((project,index)=>

                    <ProjectCard
                    key={index}
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    technologies={project.technologies}
                    />

                )
            }

        </div>

    );

}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);