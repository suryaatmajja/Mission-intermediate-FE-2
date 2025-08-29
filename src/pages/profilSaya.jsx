import NavBar from "../components/navBar";

const Profil = () => {
  const menuItems = [
    { name: "Series", path: "/#" },
    { name: "Film", path: "/#" },
    { name: "Daftar Saya", path: "/daftar-saya" },
  ];
  return (
    <>
      <NavBar menuItems={menuItems} />
    </>
  );
};

export default Profil;
