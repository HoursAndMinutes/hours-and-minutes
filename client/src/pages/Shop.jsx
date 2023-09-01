import ShopDetails from '../components/ShopDetails';
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
    const [searchParams] = useSearchParams();

    const type = searchParams.get('type');
    return (
        <section>
            <h1>All {
                type === 'men' ? "Men's" : type === 'women' ? "Women's" : "brand"
            } Watches</h1>
            <ShopDetails type={type} searchParams={searchParams}/>
        </section>
    )
};

export default Shop