import { useState } from "react";

function FilterModal({ users, setFilteredUsers, setShow }) {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilter = () => {
    let filtered = users;

    if (filters.firstName) {
      filtered = filtered.filter((u) =>
        u.firstName.toLowerCase().includes(filters.firstName.toLowerCase())
      );
    }

    if (filters.lastName) {
      filtered = filtered.filter((u) =>
        u.lastName.toLowerCase().includes(filters.lastName.toLowerCase())
      );
    }

    if (filters.email) {
      filtered = filtered.filter((u) =>
        u.email.toLowerCase().includes(filters.email.toLowerCase())
      );
    }

    if (filters.department) {
      filtered = filtered.filter((u) =>
        u.department.toLowerCase().includes(filters.department.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
    setShow(false);
  };

  return (
    <div className="card p-3 mt-3 shadow">
      <h5>Filter Users</h5>

      <input
        className="form-control my-1"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
      />

      <input
        className="form-control my-1"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
      />

      <input
        className="form-control my-1"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />

      <input
        className="form-control my-1"
        placeholder="Department"
        name="department"
        onChange={handleChange}
      />

      <button className="btn btn-success mt-2" onClick={applyFilter}>
        Apply Filter
      </button>

      <button className="btn btn-secondary mt-2 ms-2" onClick={() => setShow(false)}>
        Close
      </button>
    </div>
  );
}

export default FilterModal;