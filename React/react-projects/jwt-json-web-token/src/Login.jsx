import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./slice/authSlice";
import { api } from "./api/api";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [formValue, setFormValue] = useState({ username: "emilys", password: "emilyspass" });
  const dispatch = useDispatch();
  const token = useSelector(store => store.user.token)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", {...formValue, expiresInMins: 1});

      dispatch(
        login({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          user: data, // DummyJSON returns user info too
        })
      );
      alert("Login successful!");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials!");
    }
  };

  useEffect(() => {
    if(token){
      navigate("/dashboard")
    }
  }, [token])

  return (
    <div style={{ padding: "30px" }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username (ex: emilys)"
          value={formValue.username}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password (ex: emilyspass)"
          value={formValue.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
