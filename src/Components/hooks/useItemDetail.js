// import { useEffect, useState } from "react";

// const useItemDetail = id => {
//     const [item, setItem] = useState({});

//     useEffect(() => {
//         const url = `https://vast-river-52657.herokuapp.com/inventory/${id}`;
//         console.log(url);
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setItem(data));

//     }, [id]);
//     return [item]
// }

// export default useItemDetail;