import axios from "axios";
import React, { useEffect, useState } from "react";

const search = { Search1 : function () {
    const [search1, setSearch1] = useState();
    const [search, setSearch] = useState();
    return (
      <div className="search1">
        <form>
          <input
            value={search}
            type="text"
            placeholder="Tapez ???"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <div className="btn">
          <button
            onClick={async () => {
              const res = await axios(`http://localhost:4000/total/${search}`);
              setSearch1(res.data);
            }}
          >
            Rechercher
            <br />
          </button>
        </div>
        <div className="result"></div>
      </div>
    );
},

// ligne 32 dans la div avec la classe result il faudra rajouter l'affichage du resultat de la requete

Search2 : function () {
  const [search2, setSearch2] = useState();
  const [search, setSearch] = useState();
  return (
    <div className="search1">
      <form>
        <input
          value={search}
          type="text"
          placeholder="Tapez le nom d'une localisation"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <div className="btn">
        <button
          onClick={async () => {
            const res = await axios(
              `http://localhost:4000/Localisation/${search}`
            );
            setSearch2(res.data);
          }}
        >
          Rechercher
          <br />
        </button>
      </div>
    </div>
  );
},

Search3 : function () {
  const [search3, setSearch3] = useState();
  const [search, setSearch] = useState();
  return (
      <div className="search1">
            <form>
                <input
                    value={search}
                    type="text"
                    placeholder="Tapez le nom d'une ressource"
                    onChange={(e) => {
                    setSearch(e.target.value);
                    }}
                />
            </form>
        <div className="btn">
            <button
                onClick={async () => {
                const res = await axios(`http://localhost:4000/Ressource/${search}`);
                setSearch3(res.data);
                }}
            >
                Rechercher
                <br />
            </button>
        </div>
      </div>
  );
}
}

export default search;