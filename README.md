# hours-and-minutes

PULL GUIDE:

1. git pull origin main

2. Update .env file

3. Create hours_and_minutes database if it does not exist

4. npm run migrate:prisma

5. npm run build:dev

6. cd client && npm run dev

NOTE: localhost:5173 will update with every saved change. This is the vite server and is looking from the front end. Localhost:3009 is our express.js server and will only update when the dist file is updated. You can do this by running npm run build:dev

PUSH GUIDE:

1. Test everything. Don't push bugs or bad code

2. Make sure no unwanted comments or console.logs are present

3. Make sure you have made no changes to any files outside of your task. If unsure what files you are working on, ask Slack

4. Change .env url name back to "user"

5. Change branches

6. Push to your branch that is not main branch

7. After pushing, inform the rest of the team and have SOMEBODY ELSE review and merge your code