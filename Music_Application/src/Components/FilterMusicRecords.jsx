import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export const FilterMusicRecords = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterVal, setFilterVal] = useState(
    searchParams.getAll('genre') || [],
  );

  const handleFilter = (e) =>{
    const option = e.target.name;

    const newArr = [...filterVal];

    if(newArr.includes(option)){
      newArr.splice(newArr.indexOf(option),1);
    } else{
      newArr.push(option);
    }
    setFilterVal(newArr);
  };

  useEffect(()=> {
    const Params = {};

    filterVal && (Params.genre = filterVal);

    setSearchParams(Params);
  },[filterVal, setSearchParams]);

  return(
    <>
    <h1>filter</h1>
    <div
    style={{
      display: 'flex',
      alignItems: 'start',
      flexDirection:'column',
    }}
    >
    <div>
      <input type="checkbox" 
      name="K-Pop" 
      onChange={handleFilter} 
      defaultChecked={filterVal.includes('K-Pop')}
      />
      <label>K-Pop</label>
    </div>

    <div>
      <input type="checkbox" 
      name="Holiday" 
      onChange={handleFilter} 
      defaultChecked={filterVal.includes('Holiday')}
      />
      <label>Holiday</label>
    </div>

    <div>
      <input type="checkbox" 
      name="Heavy Metal" 
      onChange={handleFilter} 
      defaultChecked={filterVal.includes('Heavy Metal')}
      />
      <label>Heavy Metal</label>
    </div>
    </div>

    {/* <h2>sort</h2> */}
    </>
  );
};