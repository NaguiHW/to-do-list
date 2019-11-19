/* eslint-disable import/prefer-default-export */
import { showForm } from './partials/show-form';
import { showProjects } from './partials/show-projects';
import { showTaskForm } from './partials/show-task-form';
import { mockProject } from './partials/mock-project';

import 'bulma';
import './style/main.scss';

showForm();
showTaskForm();
mockProject();
showProjects();
