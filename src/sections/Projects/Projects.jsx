import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://rizkyardiansah-movieapp.netlify.app/"
          h3="Movie Search"
          p="Movie Search App"
        />
        <ProjectCard
          src={fitLift}
          link="https://rizkyardiansah-uas.netlify.app/"
          h3="SehatKu AI"
          p="Saran Kesehatan"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Coming Soon"
          p="Coming Soon"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Coming Soon"
          p="Coming Soon"
        />
      </div>
    </section>
  );
}

export default Projects;
