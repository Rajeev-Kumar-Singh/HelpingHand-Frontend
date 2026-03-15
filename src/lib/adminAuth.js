const ADMIN_USERS_KEY = "helpinghand_admin_users";
const ADMIN_SESSION_KEY = "helpinghand_admin_session";

const readJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getAdminUsers = () => readJson(ADMIN_USERS_KEY, []);

export const getCurrentAdmin = () => readJson(ADMIN_SESSION_KEY, null);

export const isAdminLoggedIn = () => Boolean(getCurrentAdmin());

export const registerAdmin = ({ fullName, email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getAdminUsers();

  const exists = users.some((user) => user.email === normalizedEmail);
  if (exists) {
    throw new Error("Admin already exists with this email.");
  }

  const newUser = {
    id: `admin-${Date.now()}`,
    fullName: fullName.trim(),
    email: normalizedEmail,
    password,
    createdAt: new Date().toISOString(),
    role: "Admin",
  };

  writeJson(ADMIN_USERS_KEY, [...users, newUser]);
  return newUser;
};

export const loginAdmin = ({ email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getAdminUsers();

  const user = users.find(
    (admin) => admin.email === normalizedEmail && admin.password === password,
  );

  if (!user) {
    throw new Error("Invalid admin email or password.");
  }

  const session = {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    loggedInAt: new Date().toISOString(),
  };

  writeJson(ADMIN_SESSION_KEY, session);
  return session;
};

export const logoutAdmin = () => {
  localStorage.removeItem(ADMIN_SESSION_KEY);
};
