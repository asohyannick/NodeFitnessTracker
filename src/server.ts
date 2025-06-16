import 'dotenv/config';
// DB 
import connectedToMongoDB from './config/dbConfig/databaseConfig.db';
import express, { Application} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
// Routes
import authRoute from './controller/auth/auth.controller';
import profileRoute from './controller/profile/profile.controller';
import activityRoute from './controller/activity/activity.controller';
const app: Application = express();
// General Application Built-in Middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//security middleware packages
app.use(cors());
app.use(helmet());
app.use(compression());
// Custom Application Middleware 
if (process.env.NODE_ENV as string === 'development') {
    app.use(morgan('dev'));
}

// Routes
app.use(`/api/${process.env.API_VERSION as string}/auth`, authRoute);
app.use(`/api/${process.env.API_VERSION as string}/profile`, profileRoute);
app.use(`/api/${process.env.API_VERSION as string}/activity`, activityRoute);


const APP_NAME: string = process.env.APP_NAME || 'NodeFitnessTracker'
const APP_PORT: number | string = parseInt(process.env.APP_PORT  || '8000', 10);
const API_VERSION: string | number = process.env.API_VERSION || 'v1';
const APP_HOST: string | number = process.env.APP_HOST || 'localhost';
async function serve() {
    try {
        await connectedToMongoDB(),
        app.listen(APP_PORT, () => {
        console.log(`Server is running on ${APP_HOST} port ${APP_PORT} on api ${API_VERSION} owned by ${APP_NAME}`)
    })
    } catch (error) {
        console.error('Failed to connect to the database');
    }
}

serve();