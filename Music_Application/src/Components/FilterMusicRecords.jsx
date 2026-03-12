import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import data from "../../db.json";
export const FilterMusicRecords = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("🚀 ~ setSearchParams:", setSearchParams);
  console.log("🚀 ~ searchParams:", searchParams);

  const [filterVal, setFilterVal] = useState([]);

  let genre = [];
  data.albums.map((el) => {
    genre.push(el.genre);
  });
  console.log("🚀 ~ genre:", genre);

  let obj = {};

  genre.reduce((curr, acc) => {
    curr[acc] = (curr[acc] || 0) + 1;
    return curr;
  }, obj);
  console.log("🚀 ~ obj:", obj);

  // for(let i = 0; i < arr.length; i++){
  //     let isGenre = arr[i]
  //     if(obj[isGenre]){
  //         obj[isGenre]++
  //     }
  //     else{
  //         obj[isGenre] = 1
  //     }
  // }
  // console.log("🚀 ~ obj:", obj);

  const handleFilter = (e) => {
    const option = e.target.name;
    console.log("🚀 ~ option:", option);

    const newArr = [...filterVal];

    if (filterVal.includes(option)) {
      newArr.splice(filterVal.indexOf(option), 1);
    } else {
      newArr.push(option);
    }
    console.log("🚀 ~ newArr:", newArr);
    setFilterVal(newArr);
  };

  return (
    <>
      <h1>Filter</h1>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        {Object.keys(obj).map((el) => {
          return (
            <div key={el}>
              <input
                type="checkbox"
                name={el}
                onChange={handleFilter}
              />
              <label>{el}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};