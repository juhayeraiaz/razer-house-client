// import { useEffect, useState } from "react";

// const useItemDetail = id => {
//     const [item, setItem] = useState({});

//     useEffect(() => {
//         const url = `https://razer-house.onrender.com/inventory/${id}`;
//         console.log(url);
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setItem(data));

//     }, [id]);
//     return [item]
// }

// export default useItemDetail;