import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const search = { Search1 : function () {
    const [search1, setSearch1] = useState();
    return (
      <div className="search1">
        <p className="nameInput">Totale de Consommation</p>
        <div className="btn">
          <button
            onClick={async () => {
              const res = await axios(
                `https://yomathiapp.azurewebsites.net/total`
              );
              setSearch1(res.data);
            }}
          >
            Rechercher
            <br />
          </button>
        </div>
        <div className="result">{search1}</div>
      </div>
    );
},

// ligne 32 dans la div avec la classe result il faudra rajouter l'affichage du resultat de la requete

Search2 : function () {

    const options = [
      { value: "Nantes", val_sql: "Nantes" },
      { value: "Nancy", val_sql: "Simplon GDE Nancy IA1" },
      { value: "Strasbourg", val_sql: "Simplon GDE Strasbourg IA1" },
      { value: "Nantes GDO", val_sql: "Simplon GDO Nantes IA1" },
      { value: "Rennes", val_sql: "Simplon GDO Rennes IA1" },
      { value: "Aulnay Sous Bois", val_sql: "Simplon IDF Aulnay Cloud1" },
      { value: "Bordeaux", val_sql: "Simplon NAQ Bordeaux IA1" },
      {
        value: "Nouvelle-Aquitaine",
        val_sql: "Simplon Nouvelle-Aquitaine IA-1",
      },
      { value: "Castelnau", val_sql: "Simplon OCC Castelnau Cloud1" },
      { value: "Marseille", val_sql: "Simplon PACA Marseille IA1" },
      { value: "Rennes", val_sql: "Simplon Rennes" },
    ];
  const [result, setResult] = useState();
  const [search, setSearch] = useState();
  const onchangeSelect = (item) => {
    setSearch(item.val_sql);
  };
  return (
    <div className="search1">
      <Select
        value={search}
        onChange={onchangeSelect}
        options={options}
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.value}
      />
      <div className="btn">
        <button
          onClick={async () => {
            const res = await axios(
              `https://yomathiapp.azurewebsites.net/Localisation/${search}`
            );
            setResult(res.data);
          }}
        >
          Rechercher
          <br />
        </button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
},

Search3 : function () {

    const options = [
      { value: "Bandwidth" },
      { value: "Key Vault" },
      { value: "Storage" },
      { value: "Load Balancer" },
      { value: "Virtual Network" },
      { value: "Container Registry" },
      { value: "Virtual Machines" },
      {
        value: "Container Instances",
      },
      { value: "Log Analytics" }
    ];

  const [result2, setResult2] = useState();
  const [search2, setSearch2] = useState();
  const onchangeSelect = (item) => {
    setSearch2(item.value);
  };
  return (
    <div className="search1">
      <Select
        value={search2}
        onChange={onchangeSelect}
        options={options}
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.value}
      />
      <div className="btn">
        <button
          onClick={async () => {
            const res = await axios(
              `https://yomathiapp.azurewebsites.net/Ressource/${search2}`
            );
            setResult2(res.data);
          }}
        >
          Rechercher
          <br />
        </button>
      </div>
      <div className="result">{result2}</div>
    </div>
  );
}
}

export default search;