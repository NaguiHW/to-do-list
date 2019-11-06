import { showForm } from './partials/show-form'
import { createTask } from './partials/create-task'
import { createProject } from './partials/create-project-button';
import { showProjects } from './partials/show-projects';
//import { deleteProject } from './partials/delete-project';

import './style/main.scss'

showForm();
createTask();
createProject();
showProjects();
//deleteProject();