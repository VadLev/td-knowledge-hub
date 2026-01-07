<<<<<<< HEAD
# TD Knowledge Hub

A knowledge base application for targeted display campaigns built with Next.js and Supabase.

## Setup Instructions

### 1. Supabase Setup (Manual Step)
1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your Supabase dashboard, go to Settings → API
3. Copy your project URL and anon key

### 2. Environment Variables
Create a `.env.local` file in the root directory with:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Database Schema (Manual Step)
In your Supabase dashboard, go to the SQL Editor and run:

```sql
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  owner TEXT NOT NULL,
  editors TEXT
);
```

### 4. Install Project Dependencies

Now, let's install all the necessary libraries and packages that your Next.js project relies on. These are listed in a file called `package.json`.

1.  **Open your terminal (Command Pёrompt, PowerShell, or Git Bash)**:
    *   **Important**: Make sure you open a *new* terminal window after installing Node.js (if you just did that) to ensure all the new commands are recognized.
2.  **Navigate to your project directory**: You need to be inside the `td-knowledge-hub` folder where your project's `package.json` file is located.
    ```bash
    cd C:\Users\VadimLevitsky\Downloads\CRUD web app\td-knowledge-hub
    ```
    *   **What this command does**: `cd` stands for "change directory". It tells your terminal to move into the specified folder.
3.  **Run the installation command**:
    ```bash
    npm install
    ```
    *   **What this command does**:
        *   `npm` is the Node Package Manager, which came with your Node.js installation.
        *   `install` tells `npm` to look at your `package.json` file.
        *   `npm` will then automatically download all the required external libraries and tools (like React, Next.js, Tailwind CSS, Supabase client, etc.) from the internet.
        *   These downloaded packages will be stored in a new folder called `node_modules` inside your `td-knowledge-hub` directory. This folder contains all the code your project needs to run, but it's generally ignored by Git (you won't push it to GitHub).
    *   **Expectation**: This process might take a few moments. You'll see various package names being downloaded and installed in your terminal. If there are no errors, it means everything was set up correctly!

### 5. Run Development Server
```bash
npm run dev
```

### 6. Deployment (Manual Step)
1. Create a GitHub repository and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/td-knowledge-hub.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your GitHub repository
4. In the project settings, add these environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
5. Click "Deploy" and wait for the build to complete
6. Your app will be live at a Vercel-provided URL!

## Features
- Create knowledge base articles
- View all articles
- Edit existing articles
- Delete articles
- Markdown support for content
=======
# TD Knowledge Hub

A knowledge base application for targeted display campaigns built with Next.js and Supabase.

## Setup Instructions

### 1. Supabase Setup (Manual Step)
1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your Supabase dashboard, go to Settings → API
3. Copy your project URL and anon key

### 2. Environment Variables
Create a `.env.local` file in the root directory with:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Database Schema (Manual Step)
In your Supabase dashboard, go to the SQL Editor and run:

```sql
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  owner TEXT NOT NULL,
  editors TEXT
);
```

### 4. Install Project Dependencies

Now, let's install all the necessary libraries and packages that your Next.js project relies on. These are listed in a file called `package.json`.

1.  **Open your terminal (Command Prompt, PowerShell, or Git Bash)**:
    *   **Important**: Make sure you open a *new* terminal window after installing Node.js (if you just did that) to ensure all the new commands are recognized.
2.  **Navigate to your project directory**: You need to be inside the `td-knowledge-hub` folder where your project's `package.json` file is located.
    ```bash
    cd C:\Users\VadimLevitsky\Downloads\CRUD web app\td-knowledge-hub
    ```
    *   **What this command does**: `cd` stands for "change directory". It tells your terminal to move into the specified folder.
3.  **Run the installation command**:
    ```bash
    npm install
    ```
    *   **What this command does**:
        *   `npm` is the Node Package Manager, which came with your Node.js installation.
        *   `install` tells `npm` to look at your `package.json` file.
        *   `npm` will then automatically download all the required external libraries and tools (like React, Next.js, Tailwind CSS, Supabase client, etc.) from the internet.
        *   These downloaded packages will be stored in a new folder called `node_modules` inside your `td-knowledge-hub` directory. This folder contains all the code your project needs to run, but it's generally ignored by Git (you won't push it to GitHub).
    *   **Expectation**: This process might take a few moments. You'll see various package names being downloaded and installed in your terminal. If there are no errors, it means everything was set up correctly!

### 5. Run Development Server
```bash
npm run dev
```

### 6. Deployment (Manual Step)
1. Create a GitHub repository and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/td-knowledge-hub.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your GitHub repository
4. In the project settings, add these environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
5. Click "Deploy" and wait for the build to complete
6. Your app will be live at a Vercel-provided URL!

## Features
- Create knowledge base articles
- View all articles
- Edit existing articles
- Delete articles
- Markdown support for content
>>>>>>> 880ffae15bffb6e6095a4913c0e271703b12f0ac
