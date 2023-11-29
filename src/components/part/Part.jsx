import { useState, useEffect } from "react";
import { useAppStore } from "../../store/app-store";

const Part = ({ id, image, width, height, x, y, all, activeImage }) => {
  const {
    setLocalMousePos,
    localMousePos,
    selectXY,
    setSelectXY,
    absArr,
    setAbsArr,
    setAbsArrAll,
    showActive,
    setShowActive,
  } = useAppStore();
  const [show, setShow] = useState(false);
  const x_start = x;
  const x_end = x + width;
  const y_start = y;
  const y_end = y + height;

  const checkXY = (mX, mY) => {
    if (mX >= x_start && mX <= x_end && mY >= y_start && mY <= y_end) {
      let check = false;
      let n = [];
      absArr.map((item) => {
        if (item.id === id) {
          if (item.show === true) {
            check = false;
          } else {
            check = true;
          }
          item.show = check;
          n.push(item);
        } else {
          n.push(item);
        }
      });
      setShow(check);
      setAbsArrAll(n);
      if (all !== undefined) {
        setAbsArrAll([]);
        let newAll = [];
        absArr.map((item) => {
          item.show = check;
          item.activeImage = false;
          newAll.push(item);
        });
        setAbsArrAll(newAll);
        setShowActive(false);
      } else {
        setShowActive(true);
      }
    }
  };

  useEffect(() => {
    setAbsArr({ id: id, show: false, activeShow: true });
  }, []);

  useEffect(() => {
    checkXY(selectXY.x, selectXY.y);
  }, [JSON.stringify(selectXY)]);

  useEffect(() => {
    absArr.map((item) => {
      if (item.id === id) {
        setShow(item.show);
      }
    });
  }, [JSON.stringify(absArr)]);

  return (
    <>
      {show === true && (
        <>
          <img src={image} className="item" />
          {showActive === true && <img src={activeImage} className="item" />}
        </>
      )}
    </>
  );
};

export default Part;
