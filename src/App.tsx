
import { useState } from "react";
import type { FormEvent } from "react";

import { Button } from "./components/Button";
import { FormField } from "./components/FormField";
import { RiderCard } from "./components/RiderCard";

import "./App.css";

export default function App() {
  const [following, setFollowing] = useState(false);
  const [username, setUsername] = useState("trail_rider");
  const [savedUsername, setSavedUsername] = useState("trail_rider");
  const [triedSave, setTriedSave] = useState(false);
  const [message, setMessage] = useState("Try the buttons or update the username.");

  const validUsername = /^[a-zA-Z0-9_]{3,16}$/.test(username.trim());

  const usernameError = triedSave && !validUsername
    ? "Use 3–16 letters, numbers, or underscores."
    : undefined;

  function handleFollow() {
    const nextValue = !following;
    setFollowing(nextValue);
    setMessage(nextValue ? "Rider followed." : "Rider unfollowed.");
  }

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTriedSave(true);

    if (!validUsername) {
      setMessage("Please enter a valid username.");
      return;
    }

    setSavedUsername(username.trim());
    setMessage("Username updated.");
  }

  return (
    <div className="page">
      <header className="site-header">
        <p className="brand">ROIL / UI COMPONENTS</p>
        <h1>Simple, reusable components.</h1>
        <p>
          A React and TypeScript project exploring buttons,
          forms, and accessible interface design.
        </p>
      </header>

      <main className="content">
        <section className="panel" aria-labelledby="buttons-heading">
          <h2 id="buttons-heading">Buttons</h2>
          <p>One component with different styles and states.</p>

          <div className="button-row">
            <Button onClick={handleFollow} aria-pressed={following}>
              Follow Rider
            </Button>

            <Button
              variant="secondary"
              onClick={() => {
                setFollowing(false);
                setMessage("Follow state reset.");
              }}
            >
              Reset
            </Button>

            <Button disabled>Unavailable</Button>
          </div>

          <p className="status" role="status">{message}</p>
        </section>

        <section className="panel" aria-labelledby="form-heading">
          <h2 id="form-heading">Form Field</h2>
          <p>Update the username in the Rider Card below.</p>

          <form onSubmit={handleSave} noValidate>
            <FormField
              label="Rider username"
              value={username}
              onChange={setUsername}
              hint="Use 3–16 letters, numbers, or underscores."
              error={usernameError}
            />

            <Button type="submit">Update Preview</Button>
          </form>
        </section>

        <section className="panel" aria-labelledby="card-heading">
          <h2 id="card-heading">Rider Card</h2>
          <RiderCard
            username={savedUsername}
            following={following}
          />
        </section>
      </main>

      <footer className="footer">
        Independent frontend portfolio project.
      </footer>
    </div>
  );
}
