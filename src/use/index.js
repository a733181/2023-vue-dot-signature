import router from '@/router';
import pinia from '@/stores';

function appUse(app) {
  app.use(router);
  app.use(pinia);
}

export default appUse;
