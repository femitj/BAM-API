import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server'; // Replace with the path to your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('Create a Bank Account Endpoint', () => {
  it('should create a new bank account', (done) => {
    chai
      .request(app)
      .post('/api/v1/create-account')
      .send({
        holderName: 'John Doe',
        dob: '1990-01-01',
        accountType: 'Savings',
        initialBalance: 1000,
      })
      .end((err, res) => {
        console.log(res);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body.data.accountNumber).to.be.a('string').with.length(10);
        expect(res.body.data.holderName).to.equal('John Doe');
        // Add more assertions as needed
        done();
      });
  });

  it('should return an error if account number does not exist', (done) => {
    chai
      .request(app)
      .get(`/api/v1/account/${2929182732}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.eql('Account not found');
        done(err);
      });
  });

  it('should return an success to get all account datas', (done) => {
    chai
      .request(app)
      .get(`/api/v1/accounts`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.eql('Account retrieved successfully');
        done();
      });
  });

  it('should return an error if account number is less than 10', (done) => {
    chai
      .request(app)
      .get(`/api/v1/account/${292918273}`)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.eql('Validation Error!');
        expect(res.body.data.accountNumber).to.eql(
          'Account number is invalid, 10 digit required'
        );
        done(err);
      });
  });
});

it('should return an error if account number is more than 10', (done) => {
  chai
    .request(app)
    .get(`/api/v1/account/${29291827388}`)
    .end((err, res) => {
      expect(res).to.have.status(400);
      expect(res.body).to.be.an('object');
      expect(res.body.message).to.eql('Validation Error!');
      expect(res.body.data.accountNumber).to.eql(
        'Account number is invalid, 10 digit required'
      );
      done(err);
    });
});
