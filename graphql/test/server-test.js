import request from 'supertest';
import { expect } from 'chai';

let server;

const nameQuery = 
`
{
    name
}
`;

const versionQuery = 
`
{
    version
}
`;

const combinedQuery =
`
{
    name
    version
}
`;

describe('Simple requests', () => {
    beforeEach(() => {
        // This prevents for other files to accidentally close the server unintentionally
        server = require('index').default;
    });

    afterEach(() => {
        server.close();
    });

    it('does not respond to /', (done) => {
        request(server)
            .get('/')
            .expect(404, done)
    });

    it('does not load graphiql outside of dev', (done) => {
        request(server)
            .get('/graphql')
            .expect(400, done)
    });

    it('allows asking for the project name', (done) => {
        request(server)
            .post('/graphql')
            .send({ query: nameQuery })
            .expect((res) => {
                expect(res.body).to.have.nested.property('data.name');
            })
            .expect(200, done)
    });

    it('allows asking for the project version', (done) => {
        request(server)
            .post('/graphql')
            .send({ query: versionQuery })
            .expect((res) => {
                expect(res.body).to.have.nested.property('data.version');
            })
            .expect(200, done);
    });

    
    it('allows asking for the project version and name', (done) => {
        request(server)
            .post('/graphql')
            .send({ query: combinedQuery })
            .expect((res) => {
                expect(res.body).to.have.nested.property('data.name');
                expect(res.body).to.have.nested.property('data.version');
            })
            .expect(200, done);
    });
});