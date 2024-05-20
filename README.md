## WELCOME TO K-NEST (KNOWLEDGE NEST)
K-nest is an online learnung management sytem that aims to mimic udemy. It was built following the youtube tutorial from `code with antonio's youtube page`.

This project follows the tutorial to understand the concepts of MUX and video control system especially the part that keep trak of the user's video tutorial progress and resumes back to the watching minutes they left off immediately they come back to the platform. This functionality is what i'm hoping to add to my own version of the project.
I also look forward to using custom authnetication handlers by writing my own API for authentication, middlewares and authorization logics rather than using `CLERK`.

Also, I would use `SQUADCO` rather than stripe to handle the payment.


## PROJECT INSPIRATION

I got the inspiration of following this tutorial to build my own verision of this concept/project because i was opportuned to interview for a job in a company that does Online learning and i was asked to share a project i have once worked on. Unfortunately i couldn't find one around learning and or management systems so i lost the job even though i was able to answer the interview questions well. So that pushd me to make my portfoloi more diverse and i opt for this project.

## LIBRARIES AND TOOLS

The project utilizes support from different libraries for faster development

1. Nextjs : This project utilizes the power of folder-routing system if nextjs and also its route handler and server components.

2. Clerk: It utilizes clerk for authentication and user management.

3. Shadcn-UI : it uses shadcn-UI for styling, theming and reusable components.

4. Vercel: It uses vercel for hosting and measurement of page analytics.

5. Squadco: It uses the squadco API / SDK for handling payment


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## HOW TO RUN THE APP

1. Make your copy of the project by cloning or by forking the repository. `git clone https://github.com/jybium/k-nest.git`

2. After successful clone action, Cd into the app. `Cd K-nest`

3. I the root folder of the project, Install project dependencies. `npm install`

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins and Atomic age, which are custom Google Font.


## FOLDER STRUCTURE

The project uses a combination of folder routing nad group routing to separate routes of same features in to it own folder hence keeping a very clean project structure and ease of navigation.

Most times, the folder name is already telling function a folder serves such as (dashboard) for evrything regarding the dashboard and (auth) for evrything regardig authentication pages. Likewise, api for server side codes.


## DEPLOYMENT

Thsi project is deployed using vercel to (https://k-nest-jybium.vercel.app)


## Gracias
