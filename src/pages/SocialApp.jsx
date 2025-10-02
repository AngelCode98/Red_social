import SidebarProfile from "../components/SidebarProfile";
import MainContent from "../components/MainContent";
import RightSidebar from "../components/RightSidebar";

export default function SocialApp() {
  return (
    <div className="w3-container w3-content" style={{ maxWidth: "1400px", marginTop: "80px" }}>
      <div className="w3-row">
        {/* Sidebar izquierdo */}
        <SidebarProfile />

        {/* Contenido principal */}
        <MainContent />

        {/* Sidebar derecho */}
        <RightSidebar />
      </div>
    </div>
  );
}
