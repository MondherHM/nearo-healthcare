# NearO HealthCare

A comprehensive, geo-location-based medical directory for Tunisia.

## Project Structure

When saving the files, arrange them like this on your computer:

```text
nearo-healthcare/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── index.tsx
├── App.tsx
├── types.ts
├── constants.ts
├── services/
│   └── geminiService.ts
└── components/
    ├── ProviderCard.tsx
    └── AIAssistant.tsx
```

## How to Publish for Free

This project is configured to be deployed easily on free hosting platforms like **Netlify** or **Vercel**.

### Prerequisites
1. Create an account on [GitHub](https://github.com).
2. Create an account on [Netlify](https://www.netlify.com) or [Vercel](https://vercel.com).
3. Obtain a Google Gemini API Key.

### Steps to Deploy

1. **Create the files** locally using the structure above.
2. **Push your code to a GitHub repository.**
3. **Connect your repository to Netlify or Vercel.**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. **Environment Variables:**
   - In your hosting dashboard, add a new environment variable:
     - Key: `API_KEY`
     - Value: `[Your Google Gemini API Key]`
5. **Deploy!**

### Local Development

1. Open a terminal in the folder and install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root directory:
   ```
   API_KEY=your_api_key_here
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```