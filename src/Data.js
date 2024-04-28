const projectsFilePath = "/Projects/Projects.json";

let res = await fetch(projectsFilePath);
let projects = await res.json();

export default {
    async GetProject(index) {
        return await projects.Projects[index];
    }
}
 