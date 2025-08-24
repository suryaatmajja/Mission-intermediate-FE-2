import NavBar from "../components/navBar";
import HeroBaner from "../components/heroBaner";
import LanjutTonton from "../components/lanjutTonton";
import ScrollRow from "../components/scrollRow";
import AllScroll from "../components/allScrollRow";
import AllMovie from "../components/allMovie";
import Footer from "../components/footer";

const Beranda = () => {
  const menuItems = ["Series", "Film", "Daftar Saya"];
  return (
    <>
      <NavBar menuItems={menuItems} />

      <HeroBaner
        image="/assets/movie-1.png"
        title="Duty After School"
        description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
      />

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[309px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Melanjutkan Tonton Film
        </h1>
        <div className="overflow-hidden mx-[20px]">
          <ScrollRow>
            <LanjutTonton
              image="/assets/image-1.png"
              title="Don't Look up"
              rating="4.5/5"
            />
            <LanjutTonton
              image="/assets/image-2.png"
              title="The Batman"
              rating="4.2/5"
            />
            <LanjutTonton
              image="/assets/image-3.png"
              title="Blue Lock"
              rating="4.6/5"
            />
            <LanjutTonton
              image="/assets/image-4.png"
              title="A Man Called Otto"
              rating="4.4/5"
            />
            <LanjutTonton
              image="/assets/image-1.png"
              title="Don't Look up"
              rating="4.5/5"
            />
            <LanjutTonton
              image="/assets/image-2.png"
              title="The Batman"
              rating="4.2/5"
            />
            <LanjutTonton
              image="/assets/image-3.png"
              title="Blue Lock"
              rating="4.6/5"
            />
            <LanjutTonton
              image="/assets/image-4.png"
              title="A Man Called Otto"
              rating="4.4/5"
            />
          </ScrollRow>
        </div>
      </div>

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[512px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Top Rating Film dan Series Hari ini
        </h1>

        <div className="overflow-hidden mx-[20px]">
          <AllScroll>
            <AllMovie
              image="/assets/Top-1.png"
              alt="Top 1"
              newEpisode="Episode Baru"
            />
            <AllMovie image="/assets/Top-2.png" alt="Top 2" />
            <AllMovie image="/assets/Top-3.png" alt="Top 3" />
            <AllMovie
              image="/assets/Top-4.png"
              hoverImage="/assets/Hover-Series.png"
              alt="Top 4"
            />
            <AllMovie image="/assets/Top-5.png" alt="Top 5" topTen="Top 10" />
            <AllMovie image="/assets/Top-2.png" alt="Top 2" />
            <AllMovie image="/assets/Top-3.png" alt="Top 3" />
          </AllScroll>
        </div>
      </div>

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[512px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Film Trending
        </h1>

        <div className="overflow-hidden mx-[20px]">
          <AllScroll>
            <AllMovie image="/assets/Trend-1.png" alt="Top 1" topTen="Top 10" />
            <AllMovie image="/assets/Trend-2.png" alt="Top 2" topTen="Top 10" />
            <AllMovie image="/assets/Trend-3.png" alt="Top 3" topTen="Top 10" />
            <AllMovie image="/assets/Trend-4.png" alt="Top 4" topTen="Top 10" />
            <AllMovie image="/assets/Trend-5.png" alt="Top 5" topTen="Top 10" />
            <AllMovie image="/assets/Trend-1.png" alt="Top 2" topTen="Top 10" />
            <AllMovie image="/assets/Trend-2.png" alt="Top 3" topTen="Top 10" />
          </AllScroll>
        </div>
      </div>

      <div className="flex bg-[rgba(24,26,28,1)] w-full h-[235px] md:h-[512px]">
        <h1 className="absolute font-lato font-bold text-white text-[20px] mt-[20px] ml-[20px] md:text-[32px] md:mt-[40px] md:ml-[80px]">
          Rilis Baru
        </h1>

        <div className="overflow-hidden mx-[20px]">
          <AllScroll>
            <AllMovie image="/assets/Trend-5.png" alt="Top 1" topTen="Top 10" />
            <AllMovie
              image="/assets/Rilis-2.png"
              alt="Top 2"
              newEpisode="Episode Baru"
            />
            <AllMovie image="/assets/Top-5.png" alt="Top 3" topTen="Top 10" />
            <AllMovie
              image="/assets/Top-4.png"
              alt="Top 4"
              newEpisode="Episode Baru"
            />
            <AllMovie image="/assets/Rilis-5.png" alt="Top 5" />
            <AllMovie image="/assets/Trend-1.png" alt="Top 2" topTen="Top 10" />
            <AllMovie image="/assets/Trend-2.png" alt="Top 3" topTen="Top 10" />
          </AllScroll>
        </div>
      </div>

      <div>
        <Footer />
      </div>

      {/* <div>
        <FooterDekstop />
      </div> */}
    </>
  );
};
export default Beranda;
