import { DataBase } from "./storage";
import { createProjectBox } from "./append-project";

let allProjects = [];

const showProjects = () => {
  allProjects = DataBase.getProjects();
  if (allProjects === null) {
    allProjects = [];
  } else {
    allProjects.forEach((element) => {
      createProjectBox(element);
    });
  }
};

export { showProjects };