import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import NavBar from "../components/navBar";
import FormProfil from "../components/formProfil";
import EditProfil from "../components/editProfil";
import MyList from "../components/myListContainer";
import Footer from "../components/footer";

const Profil = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("/assets/poto-profil.png"); // hanya untuk Profil Saya

  // Foto berlangganan tetap fix
  const [subscribePhoto] = useState("/assets/Belum-berlangganan.png");

  const navigate = useNavigate(); // ✅ inisialisasi navigate

  // Ambil data user dari localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUsername(savedUser.username || "");
      setEmail(savedUser.email || "");
      setPassword(savedUser.password || "");
      setPhoto(savedUser.photo || "/assets/poto-profil.png");
    }
  }, []);

  // Simpan data user
  const handleSave = () => {
    const updatedUser = { username, email, password, photo };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profil berhasil disimpan!");
  };

  // ➡️ Tombol Tambah Akun langsung ke halaman registrasi
  const handleAddAccount = () => {
    navigate("/register");
  };

  // Hapus akun
  const handleDeleteAccount = () => {
    localStorage.removeItem("user");
    alert("Akun berhasil dihapus!");
    navigate("/register"); // redirect ke register
  };

  const menuItems = [
    { name: "Series", path: "/#" },
    { name: "Film", path: "/#" },
    { name: "Daftar Saya", path: "/daftar-saya" },
  ];

  return (
    <>
      <NavBar menuItems={menuItems} />

      <div className="bg-[rgba(24,26,28,1)] w-full h-full pt-5">
        {/* Card Berlangganan */}
        <div className="flex w-[320px] h-[191px] font-lato text-white bg-[rgba(61,65,66,1)] rounded-[12px] mx-5 pt-6 md:absolute md:w-[558px] md:h-[193px] md:ml-200 md:mt-25">
          <img
            className="w-[78px] h-[78px] ml-5.5 rounded-full object-cover"
            src={subscribePhoto}
            alt="berlangganan"
          />

          <div className="w-[185px] pl-4 md:w-[412px]">
            <h4 className="text-[18px] font-bold ">Berlangganan</h4>
            <p className="text-sm mt-2.5 md:text-lg">
              Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
              Kamu!
            </p>
          </div>

          <button className="absolute bg-[rgba(47,51,52,1)] hover:bg-[rgba(9,20,122,1)] cursor-pointer w-[154px] h-[29px] text-xs rounded-full mt-30 ml-35 md:text-base md:w-[189px] md:h-[34px] md:ml-85">
            Mulai Berlangganan
          </button>
        </div>

        {/* Profil Saya */}
        <FormProfil />

        {/* Input Edit Profil */}
        <div className="w-full h-full bg-[rgba(24,26,28,1)] pb-4">
          <EditProfil
            type="text"
            label="Username"
            name="username"
            placeholder="Masukan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <EditProfil
            type="email"
            label="Email"
            name="Email"
            placeholder="Masukan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <EditProfil
            type="password"
            label="Password"
            name="Password"
            placeholder="Masukan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Tombol Simpan / Tambah / Hapus */}
          <div className="flex text-white font-lato mx-5 md:mx-20 ">
            <button
              onClick={handleSave}
              className="bg-[rgba(231,227,252,0.23)] cursor-pointer hover:bg-[rgba(9,20,122,1)] rounded-full mt-6.5 text-sm w-25 h-8 mr-2 md:text-base md:font-bold md:w-37.5 md:h-10.5 md:mr-4 md:mt-8"
            >
              Simpan
            </button>
            <button
              onClick={handleAddAccount} // ✅ langsung ke /register
              className="bg-[rgba(231,227,252,0.23)] cursor-pointer hover:bg-[rgba(9,20,122,1)]  rounded-full mt-6.5 text-sm w-25 h-8 mr-2 md:text-base md:font-bold md:w-37.5 md:h-10.5 md:mr-4 md:mt-8 "
            >
              Tambah Akun
            </button>
            <button
              onClick={handleDeleteAccount}
              className="bg-[rgba(231,227,252,0.23)] cursor-pointer hover:bg-[rgba(9,20,122,1)]  rounded-full mt-6.5 text-sm w-25 h-8 md:text-base md:font-bold md:w-37.5 md:h-10.5 md:mt-8 "
            >
              Hapus Akun
            </button>
          </div>
        </div>

        {/* Daftar Saya */}
        <div className="bg-[rgba(24,26,28,1)] w-full h-full">
          <h1 className="absolute font-lato font-bold text-white text-[20px] ml-4.5 md:text-[32px] md:mt-20 md:ml-20">
            Daftar Saya
          </h1>

          <div className="flex flex-wrap gap-4.5 pl-4.5 pt-10 pb-10 md:pl-20 md:pt-35">
            <MyList image="/assets/All-of-us.png" alt="trend" />
            <MyList image="/assets/My-hero.png" alt="trend" />
            <MyList image="/assets/Blue-lock.png" alt="trend" />
            <MyList image="/assets/Ted-laso.png" alt="trend" />
            <MyList image="/assets/Duty-after.png" alt="trend" />
            <MyList image="/assets/Suzume.png" alt="trend" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profil;
