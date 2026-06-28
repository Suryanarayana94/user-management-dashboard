import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../api/userApi";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleSave = async (user) => {
    if (selectedUser) {
      await updateUser(selectedUser.id, user);

      setUsers(
        users.map((u) =>
          u.id === selectedUser.id
            ? {
                ...u,
                name: user.name,
                email: user.email,
                company: {
                  name: user.department,
                },
              }
            : u
        )
      );

      setSelectedUser(null);
    } else {
      const res = await addUser(user);

      setUsers([
        ...users,
        {
          ...res.data,
          id: users.length + 1,
          company: {
            name: user.department,
          },
        },
      ]);
    }
  };

  const handleDelete = async (id) => {
    await deleteUser(id);

    setUsers(users.filter((u) => u.id !== id));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        User Management Dashboard
      </h2>

      <UserForm
        selectedUser={selectedUser}
        onSave={handleSave}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <UserTable
        users={filteredUsers}
        onEdit={setSelectedUser}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Dashboard;