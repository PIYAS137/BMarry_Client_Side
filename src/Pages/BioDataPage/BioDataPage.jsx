import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import UserCard from "../../Components/UserCard/UserCard"
import * as React from 'react';
import './BioData.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import usePublicAxiosHook from "../../hooks/publicAxiosDataFetchHook/usePublicAxiosHook";
import { useLoaderData } from "react-router-dom";


const BioDataPage = () => {
  const loaderData = useLoaderData()
  const publicAxios = usePublicAxiosHook()
  const [division, setDivision] = React.useState('');
  const [ageValue, setAgeValue] = React.useState([0, 70]);
  const [genderValue, setGenderValue] = React.useState('all');
  const [ItemsPerPage, setItemsPerPage] = React.useState(20);
  const [allBioDatas, setAllBioDatas] = React.useState([])
  const [permanentDatas, setPermanentDatas] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(0)
  const numberOfPages = Math.ceil(loaderData.length / ItemsPerPage);
  const pages = [...Array(numberOfPages).keys()]


  React.useEffect(() => {
    publicAxios.get(`/biodatas?page=${currentPage}&size=${ItemsPerPage}`)
      .then(res => {
        setAllBioDatas(res.data);
        setPermanentDatas(res.data)
      })
  }, [currentPage, ItemsPerPage])

  const handleChangeDivision = (event) => {
    setDivision(event.target.value);
  };
  const handleChangeAge = (event, newValue) => {
    setAgeValue(newValue);
  };
  const handleChangeGender = (event) => {
    setGenderValue(event.target.value);
  };







  React.useEffect(() => {
    let filteredData = [...permanentDatas];
    if (division !== "") {
      filteredData = filteredData.filter(one => one.parmanent_address.toLowerCase() === division.toLowerCase())
    }

    if (genderValue != 'all') {
      filteredData = filteredData.filter(one => one.gender === genderValue)
    }
    filteredData = filteredData.filter(one => {
      const age = one.age// 
      return age >= ageValue[0] && age <= ageValue[1];
    });


    setAllBioDatas(filteredData)
  }, [ageValue, genderValue, division])




















  const handleChangeSelect = (e) => {
    setItemsPerPage(parseInt(e.target.value))
    setCurrentPage(0)
  }
  const handleClickNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }
  const handleClickPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }







  return (
    <div className=" h-full">
      <div>
        <SectionHeader big={"Users Biodata"} small={'see all of our users biodata'} />
      </div>
      <div className=" flex gap-5 h-full flex-col lg:flex-row items-center lg:items-start">
        <div className="bg-red-200 p-5 rounded-lg w-[50%] lg:w-[30%]  h-full sticky top-3">
          <h1 className=" text-2xl text-center font-bold">Filter Result</h1>
          <div className=" flex space-x-5 mt-5">
            <div className=" text-lg text-gray-600">Age</div>
            <div className=" w-full">
              <Box sx={{ width: '100%' }}>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={ageValue}
                  max={70}
                  min={0}
                  onChange={handleChangeAge}
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
          </div>
          <div className=" flex space-x-5">
            <div>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group" className="text-xl font-bold">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={genderValue}
                  onChange={handleChangeGender}
                >
                  <div className=" flex">
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Division</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={division}
                  label="Division"
                  onChange={handleChangeDivision}
                >
                  <MenuItem value={'Dhaka'}>Dhaka</MenuItem>
                  <MenuItem value={'Barishal'}>Barishal</MenuItem>
                  <MenuItem value={'Chattogram'}>Chattogram</MenuItem>
                  <MenuItem value={'Khulna'}>Khulna</MenuItem>
                  <MenuItem value={'Rajshahi'}>Rajshahi</MenuItem>
                  <MenuItem value={'Rangpur'}>Rangpur</MenuItem>
                  <MenuItem value={'Mymensingh'}>Mymensingh</MenuItem>
                  <MenuItem value={'Sylhet'}>Sylhet</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="px-5 z-50 bg-white flex-1 ">
          <div className=" flex flex-wrap  justify-between">
            {
              allBioDatas?.map((one, i) => <UserCard key={i} data={one} />)
            }
          </div>
          <div className=" mt-5 space-x-3">
            <button onClick={handleClickPrev} className=" bg-red-400 text-white h-8 px-2 aspect-square rounded-lg">Prev</button>
            {
              pages.map(one => <button onClick={() => setCurrentPage(one)}
                className={`${currentPage == one ? 'activaPage' : ''} font-bold bg-red-400 text-white w-8 aspect-square rounded-lg`}
                key={one}>{one}</button>)
            }
            <button onClick={handleClickNext} className=" bg-red-400 text-white h-8 px-2 aspect-square rounded-lg">Next</button>
            <select value={ItemsPerPage} onChange={handleChangeSelect} className=" bg-red-700 px-3 py-1 rounded-lg text-white font-bold">
              <option value="9">9</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioDataPage