import React, { useState } from "react";
import { Input, Layout, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import GameList from "./GameList";
import { games } from "./data";
const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (value) => {
    setSearchValue(value);

    const searchedGame = games.filter(
      (game) =>
        searchValue.length > 0 &&
        game.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    // Replace the following code with your actual search logic
    // For demonstration purposes, we are using a dummy search result array

    // Filter the dummy search results based on the search value
    // const filteredResults = searchedGame.filter((result) =>
    //   result.toLowerCase().includes(value.toLowerCase())
    // );

    setSearchResults(searchedGame);
  };
  return (
    <Layout>
      <Content
        style={{
          padding: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "32px" }}
          >
            Search Game
          </Title>
          <Search
            size="large"
            placeholder="Enter your game name"
            prefix={<SearchOutlined />}
            style={{ width: "400px", height: "64px", fontSize: "24px" }}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={handleSearch}
          />
        </div>
      </Content>
      {searchResults.length > 0 && <GameList gameList={searchResults} />}
    </Layout>
  );
};

export default SearchBar;
