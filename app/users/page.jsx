import UsersCard from "../../components/UsersCard";


const UsersPage = async () => {
    const res = await fetch(`http://localhost:5000/users`);
    const users = await res.json();

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    users.map(user => <UsersCard key={user._id} user={user}></UsersCard>)
                }
            </div>
        </div>
    );
};

export default UsersPage;