import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "../../hooks";
import { useEffect } from "react";

const DevSite = () => {
  const { getNFTs } = useDispatch(({ nftModel }) => ({
    getNFTs: nftModel.getNFTs,
  }));
  const { nfts } = useSelector(({ nftModel }) => ({
    nfts: nftModel.nfts,
  }));
  useEffect(() => {
    getNFTs();
  }, [getNFTs]);
  return (
    <React.Fragment>
      <div>NFTs are</div>
      <div>{JSON.stringify(nfts)}</div>
      <div className="lighter">
        To use the font for an HTML element, refer to the name of the font
        (myFirstFont) through the font-family property:
      </div>
      <div className="normal">
        To use the font for an HTML element, refer to the name of the font
        (myFirstFont) through the font-family property:
      </div>
      <div className="bold">
        To use the font for an HTML element, refer to the name of the font
        (myFirstFont) through the font-family property:
      </div>
      <div className="bolder">
        To use the font for an HTML element, refer to the name of the font
        (myFirstFont) through the font-family property:
      </div>

      <div className="lighter">Space Grotesk Lighter</div>
      <div className="normal">Space Grotesk Normal</div>
      <div className="bold">Space Grotesk Bold</div>
      <div className="bolder">Space Grotesk Bolder</div>
      <div className="fw-900">Space Grotesk Bolder</div>

      <div className="fw-100">Space Grotesk 100</div>
      <div className="fw-200">Space Grotesk 200</div>
      <div className="fw-300">Space Grotesk 300</div>
      <div className="fw-400">Space Grotesk 400</div>
      <div className="fw-500">Space Grotesk 500</div>
      <div className="fw-600">Space Grotesk 600</div>
      <div className="fw-700">Space Grotesk 700</div>
      <div className="fw-800">Space Grotesk 800</div>
      <div className="fw-900">Space Grotesk 900</div>

      <div className="lighter">Space Grotesk (lighter/fw-300)</div>
      <div className="normal">Space Grotesk (normal/fw-400)</div>
      <div className="bolder">Space Grotesk (bold/bolder/fw-700)</div>

      <div className="f-dm_mono lighter">
        Font DM Mono with font-weight is Lighter
      </div>
      <div className="f-dm_mono normal">
        Font DM Mono with font-weight is Normal
      </div>
      <div className="f-dm_mono bold">
        Font DM Mono with font-weight is Bold
      </div>
      <div className="f-dm_mono bolder">
        Font DM Mono with font-weight is Bolder
      </div>
      <div className="f-dm_mono fw-900">
        Font DM Mono with font-weight is Bolder
      </div>

      <div className="f-dm_mono fw-100">
        Font DM Mono with font-weight is 100
      </div>
      <div className="f-dm_mono fw-200">
        Font DM Mono with font-weight is 200
      </div>
      <div className="f-dm_mono fw-300">
        Font DM Mono with font-weight is 300
      </div>
      <div className="f-dm_mono fw-400">
        Font DM Mono with font-weight is 400
      </div>
      <div className="f-dm_mono fw-500">
        Font DM Mono with font-weight is 500
      </div>
      <div className="f-dm_mono fw-600">
        Font DM Mono with font-weight is 600
      </div>
      <div className="f-dm_mono fw-700">
        Font DM Mono with font-weight is 700
      </div>
      <div className="f-dm_mono fw-800">
        Font DM Mono with font-weight is 800
      </div>
      <div className="f-dm_mono fw-900">
        Font DM Mono with font-weight is 900
      </div>

      <div className="f-dm_mono lighter">DM Mono (lighter)</div>
      <div className="f-dm_mono normal">DM Mono (normal)</div>
      <div className="f-dm_mono fw-500">DM Mono (fw-500)</div>
      <div className="f-dm_mono bolder">DM Mono (bold/bolder)</div>

      <div className="f-poppins lighter">1 2 3 4 5 6 7 8 9 0</div>
      <div className="f-poppins normal">1 2 3 4 5 6 7 8 9 0</div>
    </React.Fragment>
  );
};

export default DevSite;
