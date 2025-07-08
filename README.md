# Combined News Feed App

A Node.js web app that fetches multiple RSS news feeds, combines and sorts them, and displays them as modern cards using Tailwind CSS and EJS templates.

## Features

- Fetches multiple RSS feeds (BBC, CNN, NPR, etc.)
- Combines news items and sorts by publication date
- Modern UI with Tailwind CSS (via CDN)
- EJS templating with layouts using express-ejs-layouts
- Structured code with separation of concerns (routes, services, views)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

1. Clone the repo:

```bash
git clone https://github.com/dmunasingha/NewsFeeds
cd NewsFeeds
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser at:

```
http://localhost:3000
```

## Project Structure

```
src/
├── routes/
│   └── news.js           # Express routes
├── services/
│   └── rssService.js     # RSS fetching and parsing logic
├── views/
│   ├── layouts/
│   │   └── main.ejs      # Main layout template
│   └── news.ejs          # News list template
└── server.js             # Express app entry point
```

## Notes

- Uses native fetch API available in Node 18+  
- Tailwind CSS via CDN for ease of development (no build step required)  
- Can be extended with caching, pagination, or additional news sources

## License

MIT License
