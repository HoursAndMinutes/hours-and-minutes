//TO DO: Link to backend to add new product
import { useState } from "react";

const AdminProductForm = () => {

    return (
        <section>
            <form>
                <label>Name: <input /></label>
                <label>Brand: <input /></label>
                <label>Price: <input /></label>
                <label>Quantity in stock: <input /></label>
                <label>Description: <textarea></textarea></label>
                <label>Color: <input /></label>
                <label>Material<input /></label>
                <label>
                    Style: <input type="radio" id="digital" name="style" value="digital" /><label htmlFor="digital">Digital</label>
                    <input type="radio" id="mech" name="style" value="mech" /><label htmlFor="mech">Mechanical</label>
                </label>
                <label>
                    Gender: <input type="radio" id="male" name="gender" value="male" /><label htmlFor="male">Men's</label>
                    <input type="radio" id="female" name="gender" value="female" /><label htmlFor="female">Women's</label>
                </label>
                <button>Add Product</button>
            </form>
        </section>
    )
}

export default AdminProductForm;