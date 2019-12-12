module.exports = (app) => {
  const groupController = require('../controllers/groupController');

  app.route('/group')
  .get(groupController.get_all_groups)
  .post(groupController.create_a_group);

  app.route('/group/:group_id')
  .get(groupController.get_a_group)
  .put(groupController.update_a_group)
  .delete(groupController.delete_a_group);
}