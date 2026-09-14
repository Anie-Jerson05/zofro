import React, { useEffect, useState } from "react";
import ProdectCard from "./ProdectCard";
import "./menuItems.css";
import {useSearchParams} from 'react-router-dom'

const MenuItems = () => {
  const [prodect, setProdect] = useState([]);
  const [secrch, setSecrch] = useSearchParams()

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_API_URL + "/menu?"+secrch )
      .then((res) => res.json())
      .then((res) => setProdect(res.prodects))
      .catch((err) => console.log(err));
  }, [secrch]);

  return (
    <section>
      {prodect.map((prodect) => (
        <ProdectCard prodect ={prodect}/>
      ))}
    </section>
  );
};

export default MenuItems;
