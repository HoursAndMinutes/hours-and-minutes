import PurchaseHistory from "../components/PurchaseHistory";

const Profile = () => {
    const token = localStorage.getItem("logintoken")
    //TO DO: Replace user with user's first name
    return (
        <section>
            <h1>Welcome, User!</h1>
            <PurchaseHistory token = {token} />
        </section>
    )
};

export default Profile