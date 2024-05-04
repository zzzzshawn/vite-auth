# Appwrite Authentication System

This is a simple authentication system built using [Appwrite](https://appwrite.io/), an open-source platform for building web and mobile applications.

## Features

- User registration with email and password
- User login
- User logout
- Protected routes
- Authentication persistence using Appwrite sessions

## Technologies Used

- Vitejs for the frontend
- Appwrite SDK for authentication and user management
- React Router for routing

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Appwrite server running or access to the Appwrite cloud

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zzzzshawn/Vite-Auth.git
   ```

2. Navigate to the project directory:

   ```bash
   cd vite-auth
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your Appwrite environment variables:
   
   - Create a `.env` file in the root of your project.
   - Add the following environment variables:
   
     ```
     VITE_APPWRITE_URL=https://your-appwrite-endpoint/api
     VITE_PROJECT_ID=your-appwrite-project-id
     ```

   Replace `https://your-appwrite-endpoint/api` with the URL of your Appwrite server API and `your-appwrite-project-id` with your Appwrite project ID.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

- Register: Sign up for an account with your email and password.
- Login: Log in to your account with your credentials.
- Logout: Log out of your account.
- Protected Routes: Access protected routes after successful login.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
