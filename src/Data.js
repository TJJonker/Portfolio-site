const projectsFilePath = "/Projects/Projects.json";

let res = await fetch(projectsFilePath);
let projects = await res.json();

export default {
    async GetProject(index) {
        return await projects.Projects[index];
    },

    async GetProjectBySlug(slug){
      return await projects.Projects.find(project => project.slug === slug);
    }
}
 