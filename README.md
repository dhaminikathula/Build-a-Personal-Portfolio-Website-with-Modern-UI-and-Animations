<div align="center">
  <h1 align="center">Personal Portfolio Website</h1>
  <p align="center">
    A modern, high-performance, and fully responsive personal portfolio built with React, Vite, and Tailwind CSS.
    <br />
    <a href="#features"><strong>Explore the features »</strong></a>
    <br />
    <br />
    <a href="https://your-live-deployment-link.com">View Demo</a>
    ·
    <a href="https://github.com/yourusername/portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/yourusername/portfolio/issues">Request Feature</a>
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#performance--accessibility">Performance & Accessibility</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This project is a bespoke, non-template personal portfolio designed to showcase projects, skills, and professional experience. It utilizes a modern frontend stack to deliver an exceptional user experience, combining striking aesthetics with high performance. 

The UI includes sophisticated scroll-triggered animations and deep parallax effects, providing a dynamic feel without compromising on accessibility or performance metrics.

## Features

- ✨ **Custom Modern UI**: A unique, meticulously crafted design system utilizing Tailwind CSS, stepping away from generic templates.
- 🚀 **Lightning Fast**: Powered by Vite and React, ensuring rapid development hot-reloads and highly optimized production bundles.
- 🎭 **Dynamic Animations**: 
  - **Parallax Backgrounds**: Utilizing `react-scroll-parallax` for immersive depth.
  - **On-Scroll Entrances**: Graceful element reveals triggered by scroll position using `framer-motion`.
- 📱 **Fully Responsive**: Flawless viewing experience across mobile phones, tablets, and wide desktop monitors.
- ♿ **Accessibility First**: Implements `prefers-reduced-motion` CSS media queries to gracefully disable animations for users who prefer minimal movement.

## Performance & Accessibility

This portfolio is built with best practices in mind, aiming for a **Lighthouse Score of 90+** across all categories:
- **Performance**: Code-splitting, optimized asset delivery, and efficient React rendering.
- **Accessibility**: Semantic HTML, ARIA attributes where necessary, and strict adherence to `prefers-reduced-motion`.
- **SEO**: Meta tags and descriptive HTML structures for optimal search engine visibility.

## Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Parallax**: [React Scroll Parallax](https://react-scroll-parallax.damnthat.tv/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need Node.js installed on your machine.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yourusername/portfolio.git
   ```
2. Navigate to the project directory
   ```sh
   cd portfolio
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

## Project Structure

```text
├── src/
│   ├── assets/            # Images, SVGs, and other static assets
│   ├── components/        # Reusable React components (Hero, About, Projects, etc.)
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles, Tailwind directives, and accessibility rules
│   └── main.jsx           # React entry point and Context Providers (ParallaxProvider)
├── public/                # Public assets (favicon, etc.)
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## Deployment

This portfolio is optimized for zero-config deployments on modern edge networks.

### Vercel (Recommended)
1. Push your code to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Vercel will automatically detect Vite and set the build command to `npm run build` and output directory to `dist`.
4. Deploy!

### Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Set the Build Command to `npm run build` and the Publish directory to `dist`.
3. Deploy!

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
