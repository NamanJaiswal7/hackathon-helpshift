import React, { useState } from "react";
import { Input, Layout, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { games } from "./data";
const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState();
  const [searchResults, setSearchResults] = useState(games);

  const handleSearch = (value) => {
    setSearchValue(value);

    const searchedGame = games.filter((game) =>
      game.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(searchedGame);
  };

  return (
    <Layout style={{ marginBottom: "1rem" }}>
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
            Search
          </Title>
          <Search
            size="large"
            placeholder="Enter your name or Roll No"
            prefix={<SearchOutlined />}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "64px",
              fontSize: "24px"
            }}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={handleSearch}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default SearchBar;
