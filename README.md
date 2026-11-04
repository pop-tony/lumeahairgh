
# LUMEAHAIRGH

Luxury hair styling and collections from Accra, Ghana.

## Local development

Install dependencies and run the Vite frontend:

```powershell
cd frontend
npm install
npm run dev
```

The frontend is available at `http://localhost:5173`.

The optional Express API can be started separately:

```powershell
cd backend
npm install
npm run dev
```

The API listens at `http://localhost:5000`.

## Deploy to Vercel

Create two Vercel projects from this repository:

- **Frontend:** Set the project root directory to `frontend`. Its `vercel.json` builds the Vite app, publishes `dist`, and routes application paths to the SPA entry point.
- **Backend:** Set the project root directory to `backend`. Its `vercel.json` deploys the Express API as a Vercel Node function. The API entry point is `/api/health`.

The backend continues to listen on port 5000 when run locally.
