![image](https://user-images.githubusercontent.com/48612594/188833132-dd6c90a7-a113-474c-815e-411b0e91c3b4.png)


📌 About Movieland

Movieland is a web application that allows users to explore and discover information about movies and TV shows in one place. It provides detailed insights such as ratings, release dates, plots, and trending popularity, making it easy for users to stay updated with their favorite titles.

The platform features a search functionality for finding movies or series instantly, along with a curated list of popular content. It also integrates external APIs to deliver real-time data and enhance user experience.


🚀 Key Features \
🔍 Search movies and TV shows \بسهولة
⭐ View ratings (IMDb, Rotten Tomatoes, Metacritic) \
📅 Access release dates and plot summaries \
📈 View popularity trends over time \
🎬 Browse popular and trending titles \

🛠️ Tech Stack
Backend: Node.js, Express.js\
Frontend: HTML, CSS, Bootstrap \
Templating: EJS \
APIs: MovieDB, OMDb, Google Trends API \
Others: Chart.js, jQuery \

💡 Purpose

This project aims to provide a simple yet powerful platform for movie enthusiasts to discover, analyze, and track trends in movies and TV shows using real-time data.


## Getting Started

```bash
npm install       # Install dependencies
npm start         # Run development server on http://localhost:3000
npm run build     # Production build to ./build
npm test          # Run tests
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Set the environment variable in Vercel project settings:

   | Name | Value |
   |------|-------|
   | `REACT_APP_OMDB_API_KEY` | `2c8ad7fc` |

4. Deploy — Vercel will auto-detect the framework from `vercel.json`.
