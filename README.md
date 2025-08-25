# Flipkart Clone by Krishna Baviskar

~This is a modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS, replicating the core features and design of Flipkart. The project showcases a responsive user interface, state management for cart and wishlist, and integration with AI for product summaries.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React Framework)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **State Management**: React Context API

## Features

- **Product Discovery**: Browse products by category and view deals of the day.
- **Product Details**: View detailed product information, specifications, and customer reviews.
- **AI-Powered Summaries**: Generate concise AI summaries for product descriptions.
- **Shopping Cart**: Add products to the cart, update quantities, and proceed to a mock checkout.
- **Wishlist**: Save favorite products to a personal wishlist.
- **Order History**: View a list of past orders.
- **Responsive Design**: Fully responsive layout for seamless experience on desktop, tablet, and mobile devices.
- **Mock Authentication**: Basic sign-in and sign-up flows.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or later) and a package manager like `npm` or `yarn` installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1.  **Run the development server:**
    This command starts the Next.js application.
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

2.  **Run the Genkit AI server:**
    For AI features to work, you need to run the Genkit server in a separate terminal.
    ```bash
    npm run genkit:dev
    ```

## Project Structure

- `src/app/`: Contains the pages and layouts for the application (App Router).
- `src/components/`: Shared React components used across the application.
- `src/components/ui/`: UI components from Shadcn/ui.
- `src/ai/`: Houses the Genkit flows for AI functionality.
- `src/lib/`: Utility functions and static data (like the product list).
- `src/context/`: React context providers for global state management (Cart, Wishlist, Orders).
- `src/hooks/`: Custom React hooks for accessing context and other utilities.
- `public/`: Static assets like images.
