/* eslint-disable import/prefer-default-export */
import { showForm } from './partials/show-form';
import { createTask } from './partials/create-task';
import { createProject } from './partials/create-project-button';
import { showProjects } from './partials/show-projects';
import 'bulma';

import './style/main.scss';

showForm();
createTask();
createProject();
showProjects();
