import style from "@/app/about/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className={`${style.container}`}>
        <div>
          <h1 className={`${style.title}`}>About Us</h1>
          <p className={`${style.description}`}>
            My-IPond adalah proyek inovatif yang kami bangun dengan tujuan untuk
            memudahkan petambak ikan dalam memonitoring suhu, pH, dan kekeruhan
            air. Tim kami terdiri dari mahasiswa Telkom University yang
            berkomitmen untuk mempermudah pekerjaan petambak indonesia.
          </p>
        </div>

        <Image
          src="/data/istockphoto-1346125184-1024x1024_waifu2x_photo_noise3 1.png"
          alt="Team Member"
          width={500}
          height={500}
        />
      </div>

      <div className={`${style.container} bg-slate-200`}>
        <Image
          src="/data/Nyoman-Karna_waifu2x_photo_noise3 1.png"
          alt="Team Member"
          width={500}
          height={500}
        />

        <div>
          <h1 className={`${style.title}`}>Pembina Utama</h1>
          <p className={`${style.description}`}>
            <b>Dr. Nyoman Bogi Aditya Karna, S.T., M.T.</b> adalah seorang
            akademisi berpengalaman dengan jabatan akademik sebagai Lektor di
            Prodi S1 Teknik Telekomunikasi Universitas Telkom. Beliau juga
            merupakan pembina Laboratorium MBC, untuk mengetahui penelitian dan
            pengalaman akademik beliau dapat mengunjungi website nyomankarna.id
          </p>
        </div>
      </div>

      <div className={`${style.container}`}>
        <div>
          <h1 className={`${style.title}`}>Dosen Peneliti</h1>
          <p className={`${style.description}`}>
            <b>Sussi, S.Si., M.T.</b> adalah seorang akademisi yang memiliki
            jabatan sebagai Asisten Ahli di Prodi S1 Teknik Telekomunikasi
            Universitas Telkom. Beliau merupakan dosen di kelompok keahlian
            Networking, Cybernetics, and Engineering Management dengan area
            riset berfokus pada jaringan dan multimedia. Beliau juga merupakan
            salah satu pembina di Laboratorium MBC
          </p>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1741&q=80"
          alt="Team Member"
          width={500}
          height={500}
        />
      </div>

      <div className={`${style.container} bg-slate-200`}>
        <Image
          src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1834&q=80"
          alt="Team Member"
          width={500}
          height={500}
        />

        <div>
          <h1 className={`${style.title}`}>Dosen Peneliti</h1>
          <p className={`${style.description}`}>
            <b>Retno Hendryanti, Ph. D.</b> adalah seorang akademisi yang
            memiliki jabatan sebagai Lektor di Prodi S1 Teknik Telekomunikasi
            Universitas Telkom. Beliau merupakan dosen di kelompok keahlian
            Networking, Cybernetics, and Engineering Management dengan area
            riset berfokus pada online learning.
          </p>
        </div>
      </div>

      <div className={`${style.container}`}>
        <div>
          <h1 className={`${style.title}`}>Misi Kami</h1>
          <p className={`${style.description}`}>
            Misi kami adalah mempermudah pemantauan dan pengelolaan kolam,
            waduk, dan reservoir air dengan teknologi yang inovatif. Kami
            menyadari betapa pentingnya menjaga parameter air yang tepat,
            seperti suhu, pH, dan kekeruhan, untuk mendukung kehidupan akuatik
            dan berbagai aspek industri yang bergantung pada sumber daya air.
          </p>
        </div>

        <Image
          src="/data/download_waifu2x_photo_noise3 1.png"
          alt="Team Member"
          width={500}
          height={500}
        />
      </div>

      <div className="bg-slate-200">
        <p className={`${style.end_sentence}`}>
          Terima kasih telah mengunjungi My-IPond. Kami berharap Anda menemukan
          solusi yang Anda butuhkan di sini dan bergabunglah dalam perjalanan
          kami menuju keberlanjutan air yang lebih baik. Jika Anda memiliki
          pertanyaan atau saran, silahkan hubungi kami di media sosial kami.
        </p>
      </div>
    </>
  );
}
