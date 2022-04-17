import { Flex, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AREAS, SKILLS } from "../../utils/Constants";

function SearchFilters({ inputList, setFilteredList }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState({ cities: [], countries: [] });
  const [filters, setFilters] = useState({
    country: "",
    city: "",
    skill: "",
    sector: "",
  });

  useEffect(() => {
    console.log(filters);
    if (inputList) {
      let newList = [];
      if (searchQuery !== "") {
        for (let i = 0; i < inputList.length; i++) {
          const item = inputList[i];
          const name = item.name.fname.toLowerCase();
          if (name.includes(searchQuery.toLowerCase())) {
            newList.push(item);
          }
        }
      } else {
        newList = [...inputList];
      }

      console.log("c", filters.country);
      // country
      if (filters.country !== "") {
        for (let i = 0; i < newList.length; i++) {
          const item = newList[i];
          if (!item.location.country.toUpperCase().includes(filters.country)) {
            newList.splice(i, 1);
          }
        }
      }

      // city
      if (filters.city !== "") {
        for (let i = 0; i < newList.length; i++) {
          const item = newList[i];
          if (!item.location.city.toUpperCase().includes(filters.city)) {
            newList.splice(i, 1);
          }
        }
      }

      // skill
      if (filters.skill !== "") {
        for (let i = 0; i < newList.length; i++) {
          const item = newList[i];
          let userHasSkill = false;

          for (let j = 0; j < item.skills.length; j++) {
            if (
              item.skills[j].selected &&
              item.skills[j].text.includes(filters.skill)
            ) {
              userHasSkill = true;
              break;
            }
          }

          if (!userHasSkill) {
            newList.splice(i, 1);
          }
        }
      }

      // sector
      if (filters.sector !== "") {
        for (let i = 0; i < newList.length; i++) {
          const item = newList[i];
          let userHasInterest = false;

          for (let j = 0; j < item.interests.length; j++) {
            if (
              item.interests[j].selected &&
              item.interests[j].text.includes(filters.sector)
            ) {
              userHasInterest = true;
              break;
            }
          }

          if (!userHasInterest) {
            newList.splice(i, 1);
          }
        }
      }

      setFilteredList(newList);
    }
  }, [searchQuery, filters]);

  useEffect(() => {
    if (inputList) {
      console.log("users", inputList);
      const countries = [];
      const cities = [];

      for (let i = 0; i < inputList.length; i++) {
        const loc = inputList[i].location;
        if (countries.indexOf(loc.country.toUpperCase()) === -1) {
          countries.push(loc.country.toUpperCase());
        }
        if (cities.indexOf(loc.city.toUpperCase()) === -1) {
          cities.push(loc.city.toUpperCase());
        }
      }

      setLocations({ countries, cities });
    }
  }, [inputList]);

  return (
    <Flex w="100%" my="10" flexWrap="wrap" justifyContent="space-evenly">
      <Input
        w="20vw"
        placeholder="Search for Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></Input>

      <Select
        placeholder="Country"
        w="110px"
        onChange={(e) => {
          const copy = { ...filters };
          copy.country = e.target.value;
          setFilters(copy);
        }}
      >
        {locations.countries.map((country) => {
          return (
            <option value={country}>
              {country[0] + country.substring(1).toLowerCase()}
            </option>
          );
        })}
      </Select>
      <Select
        placeholder="City"
        w="110px"
        onChange={(e) => {
          const copy = { ...filters };
          copy.city = e.target.value;
          setFilters(copy);
        }}
      >
        {locations.cities.map((city) => {
          return (
            <option value={city}>
              {city[0] + city.substring(1).toLowerCase()}
            </option>
          );
        })}

        <option value="India">India</option>
      </Select>
      <Select
        placeholder="Skills"
        w="110px"
        onChange={(e) => {
          const copy = { ...filters };
          copy.skill = e.target.value;
          setFilters(copy);
        }}
      >
        {SKILLS.map((skill) => {
          return <option value={skill}>{skill}</option>;
        })}
      </Select>
      <Select
        placeholder="Sector"
        w="110px"
        onChange={(e) => {
          const copy = { ...filters };
          copy.sector = e.target.value;
          setFilters(copy);
        }}
      >
        {AREAS.map((area) => {
          return <option value={area}>{area}</option>;
        })}
      </Select>
    </Flex>
  );
}

export default SearchFilters;
