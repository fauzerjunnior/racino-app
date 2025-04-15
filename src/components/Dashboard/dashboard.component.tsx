import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebar.component';
import { DashboardContainer, MainContent } from './dashboard.styles';
import Footer from '../Footer/footer.components';

export default function Dashboard() {
  return (
    <>
      <DashboardContainer>
        <MainContent>
          <Sidebar />
          <Outlet />
        </MainContent>
      </DashboardContainer>
      <Footer />
    </>
  );
}
