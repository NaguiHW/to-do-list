/* eslint-disable import/prefer-default-export */
import { showProjects } from './partials/show-projects';
import { mockProject } from './partials/mock-project';

import 'bulma';
import './style/main.scss';
import { DOM_module } from './partials/DOM_module';

DOM_module.showForm();
DOM_module.showTaskForm();
mockProject();
showProjects();
