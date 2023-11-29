import { useEffect, useState } from "react";
import { AreaSelector } from "@bmunozg/react-image-area";
import { useAppStore } from "../../store/app-store";
import Part from "../part/Part";
import DefaultFinger from "./../../assets/images/finger/default-finger.png";
import McpHighlight from "./../../assets/images/finger/mcp-highlight.png";
import McpActive from "./../../assets/images/finger/mcp-active.png";
import PipHighlight from "./../../assets/images/finger/pip-highlight.png";
import PipActive from "./../../assets/images/finger/pip-active.png";
import DipHighlight from "./../../assets/images/finger/dip-highlight.png";
import DipActive from "./../../assets/images/finger/dip-active.png";
import OthersHighlight from "./../../assets/images/finger/others-highlight.png";

const Hand = () => {
  const { setLocalMousePos, localMousePos, selectXY, setSelectXY, absArr } =
    useAppStore();

  const [areas, setAreas] = useState([]);

  const onChangeHandler = (areas) => {
    let n = areas.length - 1;
    setSelectXY({ x: areas[n].x, y: areas[n].y });
  };

  return (
    <div className="abs-body">
      <AreaSelector
        areas={areas}
        onChange={onChangeHandler}
        wrapperStyle={{ cursor: "pointer" }}
        globalAreaStyle={{
          border: "none",
          backgroundColor: "none",
          opacity: "0",
          cursor: "pointer",
        }}
      >
        <img src={DefaultFinger} />
        {/* ข้อโคนนิ้วมือ */}
        <Part
          id="McpHighlight"
          image={McpHighlight}
          activeImage={McpActive}
          width={74}
          height={48}
          x={223}
          y={391}
        />
        <Part
          id="McpHighlight"
          image={McpHighlight}
          activeImage={McpActive}
          width={66}
          height={48}
          x={298}
          y={359}
        />
        <Part
          id="McpHighlight"
          image={McpHighlight}
          activeImage={McpActive}
          width={62}
          height={37}
          x={371}
          y={345}
        />
        <Part
          id="McpHighlight"
          image={McpHighlight}
          activeImage={McpActive}
          width={64}
          height={46}
          x={450}
          y={340}
        />
        <Part
          id="McpHighlight"
          image={McpHighlight}
          activeImage={McpActive}
          width={64}
          height={48}
          x={564}
          y={509}
        />
        {/*  ข้อนิ้วมือส่วนต้น */}
        <Part
          id="PipHighlight"
          image={PipHighlight}
          activeImage={PipActive}
          width={57}
          height={34}
          x={196}
          y={305}
        />
        <Part
          id="PipHighlight"
          image={PipHighlight}
          activeImage={PipActive}
          width={49}
          height={31}
          x={280}
          y={229}
        />
        <Part
          id="PipHighlight"
          image={PipHighlight}
          activeImage={PipActive}
          width={55}
          height={32}
          x={364}
          y={196}
        />
        <Part
          id="PipHighlight"
          image={PipHighlight}
          activeImage={PipActive}
          width={58}
          height={37}
          x={456}
          y={207}
        />
        <Part
          id="PipHighlight"
          image={PipHighlight}
          activeImage={PipActive}
          width={49}
          height={40}
          x={633}
          y={400}
        />
        {/* ข้อนิ้วส่วนปาย  */}
        <Part
          id="DipHighlight"
          image={DipHighlight}
          activeImage={DipActive}
          width={52}
          height={33}
          x={168}
          y={235}
        />
        <Part
          id="DipHighlight"
          image={DipHighlight}
          activeImage={DipActive}
          width={48}
          height={30}
          x={271}
          y={131}
        />
        <Part
          id="DipHighlight"
          image={DipHighlight}
          activeImage={DipActive}
          width={56}
          height={33}
          x={357}
          y={86}
        />
        <Part
          id="DipHighlight"
          image={DipHighlight}
          activeImage={DipActive}
          width={56}
          height={29}
          x={456}
          y={113}
        />
        {/* All */}
        <Part
          id="OthersHighlight"
          image={OthersHighlight}
          activeImage={OthersHighlight}
          width={500}
          height={80}
          x={122}
          y={881}
          all
        />
      </AreaSelector>
    </div>
  );
};

export default Hand;