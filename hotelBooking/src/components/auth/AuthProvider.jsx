import React, { createContext, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode"; // ✅ Correct import

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				return jwtDecode(token); // ✅ Use jwtDecode instead of jwt_decode
			} catch (error) {
				console.error("Invalid stored token:", error);
				return null;
			}
		}
		return null;
	});

	const handleLogin = (token) => {
		try {
			const decodedUser = jwtDecode(token); // ✅ Use jwtDecode
			localStorage.setItem("userId", decodedUser.sub);
			localStorage.setItem("userRole", JSON.stringify(decodedUser.roles));
			localStorage.setItem("token", token);
			setUser(decodedUser);
		} catch (error) {
			console.error("Invalid token:", error);
		}
	};

	const handleLogout = () => {
		localStorage.removeItem("userId");
		localStorage.removeItem("userRole");
		localStorage.removeItem("token");
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
