# Singapore-China Friendship Association Website Redesign

 This is the new source code for the SCFA website, built with Next.js 14, React, TypeScript, and Tailwind CSS.

 ## Project Structure

 - `src/app`: Main application pages (Home, Layout).
 - `src/components`: Reusable UI components (Header, Footer).
 - `public`: Static assets (Logo, images).
 - `scripts`: Migration tools.

 ## Getting Started

 ### Prerequisites
 You need to have Node.js installed on your machine. [Download Node.js](https://nodejs.org/)

 ### Installation

 1. Open your terminal in this directory.
 2. Install dependencies:
    ```bash
    npm install
    ```

 ### Running locally

 1. Start the development server:
    ```bash
    npm run dev
    ```
 2. Open [http://localhost:3000](http://localhost:3000) in your browser.

 ## Data Migration

 A Python script is provided in `scripts/migrate_content.py` to help scrape content from the old website.
 To run it:
 ```bash
 python3 scripts/migrate_content.py
 ```
 The data will be saved to `src/data/events.json`.

 ## Design Notes

 - **Colors**:
   - Primary Red: `#C8102E` (SCFA Red)
   - Primary Navy: `#00205B` (Navy Blue from Logo)
 - **Typography**: Inter (Google Fonts)

 ---
 Developed by Antigravity
