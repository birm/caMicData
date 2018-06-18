const { expect } = require('chai');
const fetch = require('node-fetch');

const _ = require('lodash');
const globalVariables = _.pick(global, ['expect']);


okData = {
  "name":"Seedslide4",
  "location":"seed4.dzi",
  "mpp":.5
}

okOpt = {
    body: JSON.stringify(okData), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
}

badData = {
  "name":"Seedslide4",
  "location":"seed4.dzi"
}

badOpt = {
    body: JSON.stringify(badData), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
}

describe('caMicData', function(){
  it('should have seeded results', function(done){
    fetch("http://localhost:3001/slide").then(c=>c.json()).then(x=>{
      expect(x.length).to.equal(2);
      done()
    }).catch(e=>done(e))
  })

  it("should post a valid document", function(done){
    fetch("http://localhost:3001/slide", okOpt).then(c=>{
      expect(c.status).to.equal(200);
      done()
    }).catch((e)=>done(e))
  })

  it('should have a new result', function(done){
    fetch("http://localhost:3001/slide").then(c=>c.json()).then(x=>{
      expect(x.length).to.equal(3);
      done()
    }).catch(e=>done(e))
  })

  it("should reject an invalid document", function(done){
    fetch("http://localhost:3001/slide", badOpt).then(c=>{
      expect(c.status).to.equal(400)
      done()
    }).catch(e=>done(e))
  })

  it('should not have a new result', function(done){
    fetch("http://localhost:3001/slide").then(c=>c.json()).then(x=>{
      expect(x.length).to.equal(3);
      done()
    }).catch(e=>done(e))
  })
})
