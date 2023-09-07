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
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Team Member"
          width={500}
          height={500}
        />
      </div>
      <div className={`${style.container} bg-slate-200`}>
        <Image
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
          alt="Team Member"
          width={500}
          height={500}
        />

        <div>
          <h1 className={`${style.title}`}>Pembina Utama</h1>
          <p className={`${style.description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Cras eget magna in purus vehicula tincidunt. Etiam euismod
            metus nec massa gravida, eget iaculis enim semper. Sed nec est
            lectus. Curabitur efficitur, sapien a aliquet lacinia, ex justo
            dictum mi, nec condimentum eros odio ut ipsum.
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
          src="https://images.unsplash.com/photo-1618043299395-fd8bae4709b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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
