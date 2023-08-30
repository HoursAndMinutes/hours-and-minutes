import PurchaseHistory from "../components/PurchaseHistory";

const Profile = ({user}) => {
    //TO DO: Replace user with user's first name
    return (
        <section>
            <h1>Welcome, {user.firstName}!</h1>
            <PurchaseHistory user={user}/>
        </section>
    )
};

export default Profile