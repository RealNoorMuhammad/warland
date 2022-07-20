import React from "react";

function SlideCard1({ smallScreen }) {
  return (
    <div style={{ width: "100%", color: "#FFF" }}>
      {/* This is used Changing the Color and Size og the First Slide Top Text*/}
      <h1 className="c1Head  fw900" style={{ color: "#FFD700" }}>
        ROADMAP{" "}
      </h1>
      <h1 className="c1Head">
        {/* This is used Changing the Color and Size og the First Slide Top Text*/}
      </h1>
      <p
        className="py-1 px-2   fw900"
        style={{ fontSize: "14px", fontWeight: "800" }}
      >
        <b style={{ color: "#FFD700" }}>1 :</b> NFT & Game Development
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>2 :</b> Website & Social Media
        <br data-reactroot />
        {/* This is used for changing the Gradient Color*/}
        <b style={{ color: "#FFD700" }}>3 :</b> Community Growth
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>4 :</b> Mint of 600 Swords
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>5 :</b>Giveaway Rewards & FREE NFT
        Airdrop for every minted sword (Full body armour NFT which you will be
        able to use in the game)
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>6 :</b>Token Airdrop (WAR Token) | DEX
        Listing & Staking (only for holders)
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>7 :</b>Mint of 300 exclusive lands This
        will be your own exclusive house or a castle. If you own one, you can
        have access to exclusive drops, more weapons, armour and other game
        items for free. This will be a nice home for your pet too, it will give
        him more strength and other powers which will give you an advantage in
        the game.
        <br data-reactroot />
        <br data-reactroot />
      </p>
      {!smallScreen && (
        <p style={{ display: "flex", fontSize: "20px", fontWeight: "800" }}>
          <span>ROADMAP 1</span>
          <span className="Opacity10">//</span>
          {/*This is used for the Button on the First Slide of the Park Page*/}
          <a href="#s2" className="weDidBtn py-1 px-3 ml-2">
            More We Have ↓
          </a>
        </p>
      )}
    </div>
  );
}

export default SlideCard1;
