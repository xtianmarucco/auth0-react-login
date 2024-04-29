import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import LogoutButton from "./components/LogOutButton";

function App() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated && (
          <>
            <h1>Welcome to My App!</h1>
            <LoginButton />
          </>
        )}

        {isAuthenticated && (
          <>
            <h1>Welcome, {user.name}!</h1>
            <Profile />
            <LogoutButton />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
