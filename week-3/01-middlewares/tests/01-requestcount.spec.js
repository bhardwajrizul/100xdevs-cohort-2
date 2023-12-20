const app = require("../01-requestcount");
const request = require('supertest');

describe('GET /user', function() {
  it('One request responds with 1', function(done) {
    // No changes in this test case
    request(app)
      .get('/requestCount')
      .then(response => {
        expect(response.body.requestCount).toBe(1);
        done();
      });
  });

  it('10 more requests log 12', function(done) {
    // Use Promise.all to wait for all requests to complete
    const requests = [];
    for (let i = 0; i < 10; i++) {
      requests.push(request(app).get('/user'));
    }

    Promise.all(requests)
      .then(() => {
        // Make the request to get the count after all requests are done
        return request(app).get('/requestCount');
      })
      .then(response => {
        expect(response.body.requestCount).toBe(12);
        done();
      })
      .catch(err => {
        done.fail(err);
      });
  });
});
