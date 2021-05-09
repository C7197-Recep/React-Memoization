/*MEMO 3 KULLANIMI ICIN*/
import React, {memo} from "react";
import cw from "../assets/cw_logo.png";

/*App.js içinde başka birşey değiştiğinde
Header yeniden render edilmemesi için
compenenti memo içine alıyoruz*/

//MEMO KULLANIM 1
// const Header = React.memo(({ img }) => {
//   console.log("Rendering: Header Comp!");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="CW_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });
// export default Header;

//MEMO KULLANIM 2
// const Header = ({ img }) => {
//   console.log("Rendering: Header Comp!");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="CW_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// };
// export default React.memo(Header);

//MEMO KULLANIM 3
const Header = ({ img }) => {
  console.log("Rendering: Header Comp!");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="CW_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};

export default memo(Header);
