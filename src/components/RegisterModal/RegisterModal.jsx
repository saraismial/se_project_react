import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  onClose,
  onRegister,
  isLoading,
  error,
  onSwitchToLogin,
}) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setAvatar("");
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, avatar, email, password });
  };

  const switchElement = (
    <button
      type="button"
      className="modal__switch-btn"
      onClick={onSwitchToLogin}
    >
      or Log in
    </button>
  );

  return (
    <ModalWithForm
      name="register"
      title="Sign up"
      buttonText={isLoading ? "Signing up..." : "Sign up"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      secondaryAct={switchElement}
    >
      <label className="modal__label">
        Email*
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
        Password*
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
      <label className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          className="modal__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </label>
      <label className="modal__label">
        Avatar URL*
        <input
          type="url"
          name="avatar"
          className="modal__input"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="Avatar URL"
          required
        />
      </label>

      {error && <span className="modal__error">{error}</span>}
    </ModalWithForm>
  );
}

export default RegisterModal;
