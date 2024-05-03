const projectsFilePath = "/Projects/Projects.json";

let res = await fetch(projectsFilePath);
let projects = await res.json();

export default {
    async GetProject(index) {
        return await projects.Projects[index];
    },

    async GetAllProjects(){
      return await projects.Projects;
    },

    async GetIndexBySlug(slug) {
      const project = await projects.Projects.find(project => project.slug === slug);
        if (project) {
            return projects.Projects.indexOf(project);
        } else {
            return -1; // Indicates slug not found
        }
    },

    async IsIndexValid(index) {
        return index >= 0 && index < projects.Projects.length;
    }
}
 