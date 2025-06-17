import 'dotenv/config';
// DB 
import connectedToMongoDB from './config/dbConfig/databaseConfig.db';
import express, { Application } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
// Routes
import authRoute from './controller/auth/auth.controller';
import profileRoute from './controller/profile/profile.controller';
import activityRoute from './controller/activity/activity.controller';
import goalRoute from './controller/goal/goal.controller';
import nutritionRoute from './controller/nutrition/nutrition.controller';
import sleepingCalendarRoute from './controller/sleep/sleep.controller';
import workoutPlanRoute from './controller/workoutPlan/workoutPlan.controller';
import challengeRoute from './controller/challenge/challenge.controller';
import deviceRoute from './controller/device/device.controller';
import reminderRoute from './controller/reminder/reminder.controller';
import notificationRoute from './controller/notification/notification.controller';
import settingRoute from './controller/setting/setting.controller';
const app: Application = express();
// General Application Built-in Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//security middleware packages
app.use(cors());
app.use(helmet());
app.use(compression());

// Custom Application Middleware 
import { serverError } from './middleware/serverError/serverError.middle';
import { notFoundRoute } from './middleware/notFound/404.middle';
if (process.env.NODE_ENV as string === 'development') {
  app.use(morgan('dev'));
}
app.use(serverError);
app.use(notFoundRoute);

// Routes
app.use(`/api/${process.env.API_VERSION as string}/auth`, authRoute);
app.use(`/api/${process.env.API_VERSION as string}/profile`, profileRoute);
app.use(`/api/${process.env.API_VERSION as string}/activity`, activityRoute);
app.use(`/api/${process.env.API_VERSION as string}/goal`, goalRoute);
app.use(`/api/${process.env.API_VERSION as string}/nutrition`, nutritionRoute);
app.use(`/api/${process.env.API_VERSION as string}/sleep`, sleepingCalendarRoute);
app.use(`/api/${process.env.API_VERSION as string}/workoutPlan`, workoutPlanRoute);
app.use(`/api/${process.env.API_VERSION as string}/challenge`, challengeRoute);
app.use(`/api/${process.env.API_VERSION as string}/device`, deviceRoute);
app.use(`/api/${process.env.API_VERSION as string}/reminder`, reminderRoute);
app.use(`/api/${process.env.API_VERSION as string}/notification`, notificationRoute);
app.use(`/api/${process.env.API_VERSION as string}/setting`, settingRoute);


// Socket.io connection
const server = http.createServer(app);
const io = new Server(server);
// Listen for socket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
  // Send a notification to a specific user
  socket.on('sendNotification', (notification) => {
    io.to(socket.id).emit('notification', notification);
  });
});

const APP_NAME: string = process.env.APP_NAME || 'NodeFitnessTracker'
const APP_PORT: number | string = parseInt(process.env.APP_PORT || '3030', 10);
const API_VERSION: string | number = process.env.API_VERSION || 'v1';
const APP_HOST: string | number = process.env.APP_HOST || 'localhost';
async function serve() {
  try {
    await connectedToMongoDB(),
      app.listen(APP_PORT, () => {
        console.log(`Server is running on ${APP_HOST} port ${APP_PORT} on api ${API_VERSION} owned by ${APP_NAME}`)
      })
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
}

serve();