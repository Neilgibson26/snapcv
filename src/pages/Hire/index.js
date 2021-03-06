import { Flex } from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import Card from "../../components/Card";
import SearchFilters from "../../components/SearchFilters/index.js";
import { getAllUsers } from "../../utils/firebaseFuncs";

function Hire() {
  const [allUsers, setAllUsers] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const callback = (data) => {
    if (data) {
      setAllUsers(data);
    }
  };

  useEffect(() => {
    getAllUsers(callback);
    return () => {};
  }, []);

  return allUsers ? (
    <Flex flexDir="column" w="100%" h="100%">
      <SearchFilters
        inputList={allUsers}
        setFilteredList={setFilteredList}
        setIsFilterActive={setIsFilterActive}
      />

      {filteredList.length > 0 ? (
        <Flex flexWrap="wrap" justify="center" align="center">
          {filteredList.map((user) => {
            return (
              <Card
                fname={user.name.fname}
                lname={user.name.lname}
                video={user.video}
                summary={user.summary}
                country={user.location.country}
                city={user.location.city}
                id={user.id}
                key={user.name.fname}
              />
            );
          })}
        </Flex>
      ) : isFilterActive ? (
        <Flex w="100%" minH="200px" justify="center" align="center">
          No Results
        </Flex>
      ) : (
        <Flex flexWrap="wrap" justify="center" align="center">
          {allUsers.map((user) => {
            return (
              <Card
                fname={user.name.fname}
                lname={user.name.lname}
                video={user.video}
                summary={user.summary}
                country={user.location.country}
                city={user.location.city}
                id={user.id}
                key={user.name.fname}
              />
            );
          })}
        </Flex>
      )}
    </Flex>
  ) : null;
}

export default Hire;
