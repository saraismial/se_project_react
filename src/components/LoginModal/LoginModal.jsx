import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  isOpen,
  onClose,
  onLogin,
  isLoading,
  error,
  onSwitchToRegister,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  const switchElement = (
    <button
      type="button"
      className="modal__switch-btn"
      onClick={onSwitchToRegister}
    >
      or Sign up
    </button>
  );

  return (
    <ModalWithForm
      name="login"
      title="Log in"
      buttonText={isLoading ? "Logging in..." : "Log in"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      secondaryAct={switchElement}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="8"
          placeholder="Password"
          required
        />
      </label>

      {error && <span className="modal__error">{error}</span>}
    </ModalWithForm>
  );
}

export default LoginModal;
