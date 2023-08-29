import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AdminProductForm from "../components/AdminProductForm";
import AdminUserList from "../components/AdminUserList";
import AdminWatchList from "../components/AdminWatchList"

const Admin = () => {
    return (
        <section>
            <header><NavBar />Admin Page</header>
            <section id="container">
                <AdminProductForm />
                <AdminUserList />
                <AdminWatchList />
            </section>
            <footer><Footer /></footer>
        </section>
    )
};

export default Admin


