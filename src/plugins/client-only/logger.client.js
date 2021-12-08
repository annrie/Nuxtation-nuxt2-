export default ({ app }) => {
  app.router.beforeEach((to, next) => {
    console.log(`[ROUTER] move to '${to.fullPath}'`);
    next();
  });
};
