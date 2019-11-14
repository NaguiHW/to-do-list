/* eslint-disable import/prefer-default-export */
import { showForm } from './partials/show-form';
import { showProjects } from './partials/show-projects';
import { showTaskForm } from './partials/show-task-form';

import 'bulma';
import './style/main.scss';

showProjects();
showForm();
showTaskForm();
