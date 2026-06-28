import { FaEdit, FaTrash } from "react-icons/fa";

function UserTable({ users, onEdit, onDelete }) {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company?.name}</td>

            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(user)}
              >
                <FaEdit />
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(user.id)}
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;