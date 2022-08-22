import { SafeAreaView } from "react-native";
import Home from "./components/Home";
import { NativeRouter, Route, Routes } from "react-router-native";
import UserProfile from "./components/UserProfile";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import HakimStadion from "./components/HakimStadion";
import Odenis from "./components/Odenis";
import RealGame from "./components/RealGame";
import Sidebar from "./components/Sidebar";
import Stadion from "./components/Stadion";
import Feed from "./components/Feed";
import FootballerProfile from "./components/FootballerProfile";
import PlayerDetail from "./components/PlayerDetail";
import ClubScreen from "./components/ClubScreen";
import ClubDetail from "./components/ClubDetail";
import ManagerProfile from "./components/ManagerProfile";
import ManagerProfileDetail from "./components/ManagerProfileDetail";
import RandomGame from "./components/RandomGame";
import RandomGameDetail from "./components/RandomGameDetail";
import InviteGame from "./components/InviteGame";
import ChempionGame from "./components/ChempionGame";
import ChempionClubTable from "./components/ChempionClubTable";

import OdenisChempion from "./components/OdenisChempion";
import OdenisInvite from "./components/OdenisInvite";

export default function App() {
  return (
    <SafeAreaView>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/side" element={<Sidebar />}></Route>
          <Route path="/realgame" element={<RealGame />}></Route>
          <Route path="/hakim" element={<HakimStadion />}></Route>
          <Route path="/odenis" element={<Odenis />}></Route>
          <Route path="/creategame" element={<CreateGame />}></Route>
          <Route path="/stadion" element={<Stadion/>}></Route>
          <Route path="/feed" element={<Feed/>}></Route>
          <Route path="/playprofile" element={<FootballerProfile/>}></Route>
          <Route path="/playerDetail" element={<PlayerDetail/>}></Route>
          <Route path="/clubscreen" element={<ClubScreen/>}></Route>
          <Route path="/clubdetail" element={<ClubDetail/>}></Route>
          <Route path="/managerProfile" element={<ManagerProfile/>}></Route>
          <Route path="/managerProfileDetail" element={<ManagerProfileDetail/>}></Route>
          <Route path="/random" element={<RandomGame/>}></Route>
          <Route path="/randomgamedetail" element={<RandomGameDetail/>}></Route>
          <Route path="/invite" element={<InviteGame/>}></Route>
          <Route path="/chempion" element={<ChempionGame/>}></Route>
          <Route path="/chempiondetail" element={<ChempionClubTable/>}></Route>
          <Route path="/odenisInvite" element={<OdenisInvite/>}></Route>
          <Route path="/odenischempion" element={<OdenisChempion/>}></Route>
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}
