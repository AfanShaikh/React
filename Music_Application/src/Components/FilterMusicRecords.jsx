import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import data from "../../db.json";

export const FilterMusicRecords = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterVal, setFilterVal] = useState(
    searchParams.getAll("genre") || []
  );

  const [sort, setSort] = React.useState(searchParams.get("_sort") || "");

  const [keys] = React.useState(() => {
    return data.albums
      .map((el) => {
        let value = Object.values(el.genre).join("");
        return value;
      })
      .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
  });

  const handleFilter = (e) => {
    const option = e.target.name;

    const newArr = [...filterVal];

    if (newArr.includes(option)) {
      newArr.splice(newArr.indexOf(option), 1);
    } else {
      newArr.push(option);
    }

    setFilterVal(newArr);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    const params = {};

    filterVal && (params.genre = filterVal);

    sort && (params._sort = sort);

    setSearchParams(params);
  }, [sort, filterVal, setSearchParams]);

  return (
    <>
      <h1>filter</h1>

      {Object.keys(keys).map((el, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <div>
              <input
                type="checkbox"
                name={el}
                onChange={handleFilter}
                defaultChecked={filterVal.includes(el)}
              />
              <label>{el}</label>
            </div>
          </div>
        );
      })}

      <h2>sort</h2>

      <div onChange={handleSort}>
        <div>
          <label>asc</label>
          <input
            type="radio"
            value="asc"
            name="sort"
            defaultChecked={sort.includes("asc")}
          />
        </div>

        <div>
          <label>desc</label>
          <input
            type="radio"
            value="desc"
            name="sort"
            defaultChecked={sort.includes("desc")}
          />
        </div>
      </div>
    </>
  );
};