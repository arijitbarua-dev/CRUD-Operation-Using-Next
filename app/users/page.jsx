import UsersCard from "../../components/UsersCard";


const UsersPage = async () => {
    const res = await fetch(`http://localhost:5000/users`);
    const users = await res.json();

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <UsersCard key={user._id} user={user}></UsersCard>)
                }
            </div>
        </div>
    );
};

export default UsersPage;