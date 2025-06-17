// src/tests/auth.test.ts
import request from 'supertest';
import app from '../server'; // Adjust the path to your Express app

describe('Authentication API', () => {
    it('should log in and return a token', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ firstName: 'johnsmith@gmail.com', password: 'Password123!' });

        // Assert the response
        if (res.status !== 200) {
            throw new Error(`Expected status 200 but got ${res.status}`);
        }
        if (!res.body.token) {
            throw new Error('No token returned');
        }
    });

    it('should not log in with invalid credentials', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ username: 'wrong', password: 'credentials' });

        // Assert the response
        if (res.status !== 401) {
            throw new Error(`Expected status 401 but got ${res.status}`);
        }
        if (res.body.message !== 'Invalid credentials') {
            throw new Error(`Unexpected message: ${res.body.message}`);
        }
    });
});