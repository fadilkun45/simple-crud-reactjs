import { useHistory } from "react-router-dom";
import Edit from "./Edit";
import Fetch from "./Fetch";
import { useEffect, useState } from "react";

const Table = () => {
  let history = useHistory()

  let [items, setItems] = useState(null);

  // fetch awal
  useEffect(() => {
    fetch('http://localhost:4000/items')
      .then((res) => {
        if (!res.ok) {
          throw Error("fetch gagal gan");
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  // edit data
  let editHandle = (id) => {
      history.push('/edit/' + id)
  };

  let DeleteHandle = (id) => {
    fetch("http://localhost:4000/items/" + id, {
      method: "DELETE",
    }).then(() => {
      // fetch ulang
      fetch('http://localhost:4000/items')
      .then((res) => {
        if (!res.ok) {
          throw Error("fetch gagal gan");
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
      });
    });
  };

  return (
    <table>
      <thead>
        <th>No</th>
        <th>Nama Item</th>
        <th>jumlah Item</th>
        <th>edit</th>
        <th>hapus</th>
      </thead>
      <tbody>
        {items &&
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.item}</td>
              <td>{item.jumlah}</td>
              <td onClick={() => {
                  editHandle(item.id)
              }}>
                <ion-icon name="create-outline"></ion-icon>
              </td>
              <td
                onClick={() => {
                  DeleteHandle(item.id);
                }}
              >
                <ion-icon name="close-circle-outline"></ion-icon>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
