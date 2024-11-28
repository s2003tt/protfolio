import styles from './ProjectsStyles.module.css';
// import studio from '../../assets/studio.png';
import demo from '../../assets/demo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={demo}
          link="https://github.com/s2003tt"
          h3="WEB"
          p="Demo Website"
        />
        <ProjectCard
          src={demo}
          link="#"
          h3="Demo"
          p="Demo project"
        />
        <ProjectCard
          src={demo}
          link="#"
          h3="Demo"
          p="Demo project"
        />
        <ProjectCard
          src={demo}
          link="#"
          h3="Demo"
          p="Demo project"
        />
      </div>
    </section>
  );
}

export default Projects;
