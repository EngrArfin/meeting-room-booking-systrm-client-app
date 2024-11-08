import { useGetUsersQuery } from "../../../../redux/api/api";

const Dashboard = () => {
  // Fetch user data using the generated hook
  const { data: users, error, isLoading } = useGetUsersQuery(undefined);

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error fetching users: {error.message}</div>;
  }

  // Render user data
  return (
    <div>
      <h2>User List</h2>
      {users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <div>No users found.</div>
      )}
    </div>
  );
};

export default Dashboard;
