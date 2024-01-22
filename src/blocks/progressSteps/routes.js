import React from 'react';

// Building blocks progressSteps components
import {
  IndexView as ProgressStepsIndexView,
  LinearSteps as LinearStepsView,
  WithNumbersOnly as WithNumbersOnlyView,
  VerticalStepper as VerticalStepperView,
} from 'blocks/progressSteps';

const routes = [
  {
    path: '/blocks/progress-steps',
    renderer: (params = {}) => <ProgressStepsIndexView {...params} />,
  },
  {
    path: '/blocks/progress-steps/linear-steps',
    renderer: (params = {}) => <LinearStepsView {...params} />,
  },
  {
    path: '/blocks/progress-steps/with-numbers-only',
    renderer: (params = {}) => <WithNumbersOnlyView {...params} />,
  },
  {
    path: '/blocks/progress-steps/vertical-stepper',
    renderer: (params = {}) => <VerticalStepperView {...params} />,
  },
];

export default routes;
