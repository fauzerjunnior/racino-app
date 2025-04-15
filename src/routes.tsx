import { Routes, Route, Navigate } from 'react-router-dom';
import Leaderboard from './pages/Leaderboard/leaderboard.page';
import Dashboard from './components/Dashboard/dashboard.component';
import MyOffice from './pages/MyOffice/my-office.page';
import Giving from './pages/Giving/giving.page';
import Perks from './pages/Perks/perks.page';
import WheelSpin from './pages/WheelSpin/wheel-spin.page';
import Challenges from './pages/Challenges/challenges.page';
import Feed from './pages/Feed/feed.page';
import Settings from './pages/Settings/settings.page';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/leaderboard" />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="my-office" element={<MyOffice />} />
        <Route path="giving" element={<Giving />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="perks" element={<Perks />} />
        <Route path="wheel-spin" element={<WheelSpin />} />
        <Route path="challenges" element={<Challenges />} />
        <Route path="feed" element={<Feed />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
