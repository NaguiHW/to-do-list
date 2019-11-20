/* eslint-disable import/prefer-default-export */
import { showForm , showTaskForm } from './partials/forms';
import { showProjects } from './partials/show-projects';
import { mockProject } from './partials/mock-project';

import 'bulma';
import './style/main.scss';

showForm();
showTaskForm();
mockProject();
showProjects();
