const projectsFilePath = "Projects/Projects.json";

let res = await fetch(projectsFilePath);
//console.log(res);
let projects = await res.json();

export default {
    async GetProject(index) {
        // console.log(projects.Projects[0]);
        return await projects.Projects[index];
    }
}