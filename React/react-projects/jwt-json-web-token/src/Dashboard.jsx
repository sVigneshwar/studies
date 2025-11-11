import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./slice/authSlice";
import { api } from "./api/api";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get("/auth/me");
        setProfile(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Welcome {user?.firstName}</h2>
      {profile && (
        <div>
          <p>Email: {profile.email}</p>
          <p>Username: {profile.username}</p>
        </div>
      )}
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
