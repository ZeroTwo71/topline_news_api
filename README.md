# Topline News

A modern news aggregator built with Next.js and Tailwind CSS, displaying the latest news from various categories and countries using the NewsAPI.org API.

## Features

- Browse news articles from multiple categories: business, science, and technology
- Switch between news sources from different countries: US and Indonesia
- Responsive design that works on all devices
- Clean, modern UI built with Tailwind CSS
- Server-side data fetching for improved performance

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- A NewsAPI.org API key (get one at [https://newsapi.org/register](https://newsapi.org/register))

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file at the root of the project with your NewsAPI.org API key:

```
NEXT_PUBLIC_NEWS_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [NewsAPI.org](https://newsapi.org/) - API for accessing news articles from various sources

## License

This project is open source and available under the [MIT License](LICENSE).
