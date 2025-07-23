# Clerk Authentication Integration

## Changes Made

### 1. Environment Variables
- Created `.env.local` in the project root with the Clerk publishable key:
  ```
  VITE_CLERK_PUBLISHABLE_KEY=pk_test_ZXhhY3QtZWZ0LTE5LmNsZXJrLmFjY291bnRzLmRldiQ
  ```
  Note: The `VITE_` prefix is required for Vite to expose environment variables to client-side code.

### 2. Main Entry File
- Modified `src/main.jsx` to wrap the application with `ClerkProvider`:
  - Imported `ClerkProvider` from `@clerk/clerk-react`
  - Added code to access the publishable key from environment variables
  - Added error handling for missing keys
  - Wrapped the `App` component with `ClerkProvider`
  - Set `afterSignOutUrl` to "/"

### 3. Navbar Component
- Updated `src/components/Navbar.jsx` to use Clerk's authentication components:
  - Imported `SignedIn`, `SignedOut`, `SignInButton`, `SignUpButton`, and `UserButton` from `@clerk/clerk-react`
  - Added conditional rendering using `SignedOut` and `SignedIn` components
  - Replaced the placeholder "sign in" with proper authentication buttons
  - Added `SignInButton` and `SignUpButton` for unauthenticated users
  - Added `UserButton` for authenticated users with `afterSignOutUrl` set to "/"

## How It Works

1. When the application starts, it checks for the Clerk publishable key in the environment variables.
2. The entire application is wrapped with `ClerkProvider` to provide authentication context.
3. The Navbar displays different UI elements based on the user's authentication state:
   - For unauthenticated users: Sign In and Sign Up buttons
   - For authenticated users: User Button (profile dropdown)
4. After signing out, users are redirected to the home page.

## Testing

To test the authentication functionality:
1. Run the application with `npm run dev`
2. Click on the Sign In or Sign Up button to authenticate
3. After authentication, the User Button should appear
4. Click on the User Button and select Sign Out to log out

## Notes

- The Clerk React SDK is already installed in the project (`@clerk/clerk-react@^5.35.3`)
- Authentication state is managed by Clerk and accessible throughout the application
- Protected routes can be implemented using the `SignedIn` and `SignedOut` components or the `useAuth` hook