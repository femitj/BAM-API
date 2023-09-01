import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server'; // Replace with the path to your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('Handle incoming requests on routes', () => {
  it('should return 200 and success message for the / route', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(200);
        expect(res.body.message).to.equal('Welcome to BAM API');
        done(err);
      });
  });
});
