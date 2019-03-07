const expect = require('expect');
const request = require('supertest');

//nodemon and mocha don't need to be required
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//makes sure the DB is empty, since code below assumes the Todos start at zero
beforeEach((done) => {
  Todo.remove({}).then(() => done());
});

//describe block to quickly glance the routes
describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test Todo Test';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text)
    })
    .end((err, res) => {
      if(err) {
        //will stop any processes below this action
        return done(err);
      }
      Todo.find().then((todos) => {
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
  });

it('should not create todo with invalid body data', (done) => {
  request(app)
   .post('./todos')
   .send({})
   .expect(400)
   .end((err, res) => {
     if (err) {
       return done(err);
     }
     Todo.find().then((todos) => {
       expect(todos.length).toBe(0);
       done();
    }).catch((e) => done(e));
   });
 });
});
