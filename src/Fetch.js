import { useEffect, useState } from "react";

const Fetch = (url) => {
    let [items, setItems] = useState(null);
    useEffect(() => {
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw Error("fetch gagal gan");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setItems(data);
          });
      }, [url]);
    
    return (
        {items}
    )
}

export default Fetch
