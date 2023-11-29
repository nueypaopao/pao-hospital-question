import { useEffect, useState } from "react";
import { AreaSelector } from "@bmunozg/react-image-area";
import { useAppStore } from "../../store/app-store";
import Part from "../part/Part";
import DefaultAbs from "../../assets/images/abs/default-abs.png"
import EpigastriumHighlight from "../../assets/images/abs/epigastrium-highlight.png"
import EpigastriumActive from "../../assets/images/abs/epigastrium-active.png"
import LuqHighlight from "../../assets/images/abs/luq-highlight.png"
import LuqActive from "../../assets/images/abs/luq-active.png"
import LlqHighlight from "../../assets/images/abs/llq-highlight.png"
import LlqActive from "../../assets/images/abs/llq-active.png"
import SuprapubicHighlight from "../../assets/images/abs/suprapubic-highlight.png"
import SuprapubicActive from "../../assets/images/abs/suprapubic-active.png"
import RlqHighlight from "../../assets/images/abs/rlq-highlight.png"
import RlqActive from "../../assets/images/abs/rlq-active.png"
import RuqHighlight from "../../assets/images/abs/ruq-highlight.png"
import RuqActive from "../../assets/images/abs/ruq-active.png"
import UmbilicusHighlight from "../../assets/images/abs/umbilicus-highlight.png"
import UmbilicusActive from "../../assets/images/abs/umbilicus-active.png"
import AllOverHighlight from "../../assets/images/abs/all-over-highlight.png"

const Body = () => {
    const { setLocalMousePos, localMousePos, selectXY, setSelectXY, absArr } =
      useAppStore();
  
    const [areas, setAreas] = useState([]);
  
    const onChangeHandler = (areas) => {
      let n = areas.length - 1;
      setSelectXY({ x: areas[n].x, y: areas[n].y });
    };
  
    return (
      <>
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
            <img src={DefaultAbs} />
            <Part
              id="EpigastriumHighlight"
              image={EpigastriumHighlight}
              activeImage={EpigastriumActive}
              width={104}
              height={117}
              x={345}
              y={344}
            />
            <Part
              id="LuqHighlight"
              image={LuqHighlight}
              activeImage={LuqActive}
              width={82}
              height={97}
              x={445}
              y={417}
            />
            <Part
              id="LlqHighlight"
              image={LlqHighlight}
              activeImage={LlqActive}
              width={86}
              height={86}
              x={444}
              y={529}
            />
            <Part
              id="SuprapubicHighlight"
              image={SuprapubicHighlight}
              activeImage={SuprapubicActive}
              width={73}
              height={80}
              x={363}
              y={588}
            />
            <Part
              id="RlqHighlight"
              image={RlqHighlight}
              activeImage={RlqActive}
              width={91}
              height={77}
              x={267}
              y={535}
            />
            <Part
              id="RuqHighlight"
              image={RuqHighlight}
              activeImage={RuqActive}
              width={84}
              height={78}
              x={272}
              y={426}
            />
            <Part
              id="UmbilicusHighlight"
              image={UmbilicusHighlight}
              activeImage={UmbilicusActive}
              width={63}
              height={60}
              x={368}
              y={487}
            />
            <Part
              id="AllOverHighlight"
              image={AllOverHighlight}
              width={200}
              height={75}
              x={264}
              y={857}
              all
            />
          </AreaSelector>
        </div>
      </>
    );
  };
  
  export default Body;