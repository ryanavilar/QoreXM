import {useRouter} from 'next/router';

const Brands = () => {
    const router = useRouter();
    const {id} = router.query;

    return <p>Brand ID: {id}</p>;
};

export default Brands;
