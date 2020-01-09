const chai = require('chai')
const request = require('supertest')
const should = chai.should()
const app = require('../app')

describe('# CRUD', () => {

  context('# Request', () => {

    describe('POST http://Server-IP:3000/', () => {

      it('Return { name: Archer } ', (done) => {
        request(app)
          .post('/')
          .send({
            name: 'Archer'
          })
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            res.body.should.be.an('object')
            res.body.should.include.keys('name')
            res.body.name.should.equal('Archer')
            return done()
          })
      })

    })

    describe('GET http://Server-IP:3000/', () => {

      it('Return name: archer, job: engineer', (done) => {
        request(app)
          .get('/')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            res.text.should.equal('Hello World')
            return done()
          })
      })

    })

    describe('GET http://Server-IP:3000/?name=archer&job=engineer', () => {

      it('Return name: archer, job: engineer', (done) => {
        request(app)
          .get('/?name=archer&job=engineer')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            res.text.should.include('name: archer, job: engineer')
            return done()
          })
      })

    })

    describe('PUT http://Server-IP:3000/:id', () => {

      it('Return { id: 1024 } ', (done) => {
        request(app)
          .put('/1024')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            res.body.should.be.an('object')
            res.body.should.include.keys('id')
            res.body.id.should.equal('1024')
            return done()
          })
      })

    })

    describe('DELETE http://Server-IP:3000/:id', () => {

      it('Return { id: 1024 } ', (done) => {
        request(app)
          .delete('/1024')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            res.body.should.be.an('object')
            res.body.should.include.keys('id')
            res.body.id.should.equal('1024')
            return done()
          })
      })

    })

  })

})