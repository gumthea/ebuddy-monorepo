# Technical Test - [Hendra Cahyana]

## Overview
This repository contains the solution for the EBUDDY PTE. LTD. technical test, using a Turbo Monorepo to combine both the backend and frontend. The goal of this solution is to demonstrate proficiency in handling both server-side and client-side setups in a unified repo, while applying clean code principles and best practices.

### Monorepo Structure
This repository is managed using [Turborepo](https://turbo.build/), which optimizes the build and development process. The repo is organized as follows:

- **/apps/frontend-repo**: Contains the frontend setup using Next.js with React MUI, Redux, and Firebase Authentication.
- **/apps/backend-repo**: Contains the backend setup using Express.js, Firebase SDK, and Firebase Functions.
- **/packages/shared**: Contains shared logic and models used by both the frontend and backend (e.g., the `user.ts` model).

### Part 1: Backend Setup (Express.js + Firebase)
- **Framework**: Express.js
- **Firebase SDK**: Configured in `apps/backend`.
- **Endpoints**:
  - `update-user-data`: Updates Firestore data in the USERS collection.
  - `fetch-user-data`: Fetches data from the USERS collection.
- **Middleware**: Auth middleware to validate request tokens.
- **Directory Structure**:
  - `routes`: API route definitions.
  - `controller`: Contains logic for handling API requests.
  - `middleware`: Holds authentication middleware.
  - `config`: Firebase configuration.

### Part 2: Frontend Setup (Next.js + React MUI)
- **Framework**: Next.js with React MUI.
- **State Management**: Redux for state management, configured in `apps/frontend/store`.
- **Responsive Design**: Mobile-first design using React MUI for UI components.
- **API Integration**: Fetches data from the backend and manages state updates.
  
### Part 3: Monorepo Setup via Turborepo
- All code for the frontend and backend is contained within a single monorepo for efficient management.
- **Shared Logic**: Common models and utilities (e.g., `user.ts`) are stored in `/packages/shared` and used by both the frontend and backend.
- **Build & Caching**: Turborepo is used to optimize builds and caching, ensuring fast development cycles.

### Part 4: Bonus Firebase Technical Questions
- Answers to the technical questions have been included in the `ANSWERS.md` file, providing insights into my approach to problem-solving, learning, and project management.

### Part 5: Personality & Technical Questions
- Answers to the personality have been included in the `ANSWERS.md` file, providing insights into my approach to problem-solving, learning, and project management.

## Setup and Running Instructions

### Setup:
1. Clone the repository.
2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

### Running the Full Monorepo:
1. Ensure everything is set up in the Turbo monorepo.
2. Use the following command to run both apps in parallel:
   ```bash
   pnpm dev
   ```
   This will start both the backend and frontend apps simultaneously.

## License
This repository is submitted as part of a technical test and is not intended for any commercial use.