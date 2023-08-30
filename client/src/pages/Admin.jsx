import AdminProductForm from "../components/AdminProductForm";
import AdminUserList from "../components/AdminUserList";
import AdminWatchList from "../components/AdminWatchList"

const Admin = () => {
    return (
        <section>
            <section id="container">
                <AdminProductForm />
                <AdminUserList />
                <AdminWatchList />
            </section>
        </section>
    )
};

export default Admin


