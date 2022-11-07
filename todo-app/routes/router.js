const router =  require('express').Router();
const {GetAllActivity,GetOneActivity,AddDataActivity,UpdateDataActivity,DeleteOneActivity} =  require('../controllers/activity.controller')
const {GetAllTodoItems,GetOneTodoItems,AddDataTodoItems,UpdateDataTodoItems,DeleteOneTodoItems} =  require('../controllers/todo.controller')


//ACTIVITY
router.get('/activity-groups',GetAllActivity);
router.get('/activity-groups/:id',GetOneActivity);
router.post('/activity-groups',AddDataActivity);
router.delete('/activity-groups/:id',DeleteOneActivity);
router.patch('/activity-groups/:id',UpdateDataActivity);

//TODO
router.get('/todo-items',GetAllTodoItems);
router.get('/todo-items/:id',GetOneTodoItems);
router.post('/todo-items',AddDataTodoItems);
router.delete('/todo-items/:id',DeleteOneTodoItems);
router.patch('/todo-items/:id',UpdateDataTodoItems);

module.exports = router