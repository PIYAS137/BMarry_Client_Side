import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import UserCard from "../../Components/UserCard/UserCard"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


const BioDataPage = () => {
  const [division, setDivision] = React.useState('');
  const [ageValue, setAgeValue] = React.useState([20, 30]);
  const [genderValue, setGenderValue] = React.useState('male');

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
    console.log({ ageValue, genderValue, division });
  }, [ageValue, genderValue, division])





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
                  max={50}
                  min={18}
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
                <InputLabel id="demo-simple-select-label">Select Division</InputLabel>
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
        <div className="p-5 bg-green-500 flex-1 overflow-y-scroll">
          <div className=" flex flex-wrap  justify-around">
            {
              arr.map((one, i) => <UserCard key={i} data={one} />)
            }
          </div>
          <div className=" bg-red-600">
            Pagination
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioDataPage