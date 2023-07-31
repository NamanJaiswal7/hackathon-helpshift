import React, { useState, useEffect, useRef } from "react";
import { Card, Layout, Button } from "antd";

const { Content } = Layout;
const GameList = ({ gameList }) => {
  const [showIframe, setShowIframe] = useState(false);
  const [link, setLink] = useState("");
  const iframeRef = useRef(null);

  const handleClick = (gameUrl) => {
    setShowIframe(true);
    setLink(gameUrl);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (iframeRef.current && !iframeRef.current.contains(event.target)) {
        setShowIframe(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Content style={{ padding: "24px" }}>
      <div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            {gameList.map((game, index) => (
              <Card
                key={index}
                title={game.name}
                onClick={() => handleClick(game.url)}
                cover={
                  <img
                    alt={game.name}
                    src={game.image}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover"
                    }}
                  />
                }
                style={{ width: 300 }}
              ></Card>
            ))}
            {showIframe && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 9999
                }}
              >
                <div
                  ref={iframeRef}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: 20
                  }}
                >
                  <iframe
                    title="Iframe Content"
                    src={link} // Replace with the URL of the iframe content
                    width="1200"
                    height="800"
                    frameBorder="0"
                    style={{
                      margin: "auto",
                      display: "block",
                      marginTop: "100px"
                    }}
                  />
                  <Button
                    type="primary"
                    onClick={() => setShowIframe(false)}
                    style={{ display: "flex", margin: "auto" }}
                  >
                    {" "}
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Content>
  );
};

export default GameList;
