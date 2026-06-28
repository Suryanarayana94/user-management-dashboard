import { useState, useEffect } from "react";

function UserForm({ selectedUser, onSave }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (selectedUser) {
      setUser({
        name: selectedUser.name,
        email: selectedUser.email,
        department: selectedUser.company?.name || "",
      });
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email) {
      alert("Please fill all fields");
      return;
    }

    onSave(user);

    setUser({
      name: "",
      email: "",
      department: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-3">
      <input
        className="form-control mb-2"
        placeholder="Name"
        value={user.name}
        onChange={(e) =>
          setUser({ ...user, name: e.target.value })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Email"
        value={user.email}
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Department"
        value={user.department}
        onChange={(e) =>
          setUser({ ...user, department: e.target.value })
        }
      />

      <button className="btn btn-primary">
        {selectedUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;