# Topline News

A modern news aggregator built with Next.js and Tailwind CSS, displaying the latest news from various categories using the NewsData.io API.

## Features

- Browse news articles from multiple categories: business, science, technology, entertainment, health, and sports
- Responsive design that works on all devices
- Clean, modern UI built with Tailwind CSS
- Server-side data fetching for improved performance

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- A NewsData.io API key (get one at [https://newsdata.io/](https://newsdata.io/))

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file at the root of the project with your NewsData.io API key:

```
NEXT_PUBLIC_NEWSDATA_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [NewsData.io](https://newsdata.io/) - API for accessing news articles from various sources

## License

This project is open source and available under the [MIT License](LICENSE).
