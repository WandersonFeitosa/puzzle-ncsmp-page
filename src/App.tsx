import "./App.css";
import "./assets/css/main.min.css";
import { Route, Routes } from "react-router-dom";

import { P001 } from "./pages/P001";
import { P002 } from "./pages/P002";
import { P003 } from "./pages/P003";
import { P004 } from "./pages/P004";
import { P005 } from "./pages/P005";
import { P006 } from "./pages/P006";
import { P007 } from "./pages/P007";
import { P008 } from "./pages/P008";
import { P009 } from "./pages/P009";
import { P010 } from "./pages/P010";

// export const API_URL = "";
export const API_URL = "https://ncsmp-api.onrender.com";


function App() {
  return (
    <div>
      <Routes>
        <Route path="puzzle-ncsmp-page" element={<P001 />} />
        <Route path="fdcd-bd80-8202-9905" element={<P002 />} />
        <Route path="7f69-aaa4-7054-4ee6" element={<P003 />} />
        <Route path="7d14-3c68-ef0a-9ebf" element={<P004 />} />
        <Route path="nao-ta-aqui" element={<P005 />} />
        <Route path="1439-1d71-ecb8-d4fd" element={<P006 />} />
        <Route path="643f-701c-cb16-63ed" element={<P007 />} />
        <Route
          path="Kr4d105s25p5Rn5f46d17s2Ar3d64s2Xe4f145d66s2Kr4d75s1Ar3d54s2Ne3s23p2Ar4s2Ar3d104s24p3Rn5f146d107s27p6"
          element={<P008 />}
        />
        <Route path="0755-06c7-bdfe-eeda" element={<P009 />} />
        <Route path="descarte" element={<P010 />} />
      </Routes>
    </div>
  );
}

export default App;
