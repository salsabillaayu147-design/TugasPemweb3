import "./App.css";
import Header from "../component/Header";
import Button from "../component/ui/Button";
import CardPembicara from "../component/ui/SpeakerCard";

function App() {
  return (
  <>
    <Header />
  
    <div className="py-20 px-10 bg-red-50">
      <h2 className="text-3xl font-bold text-red-900 mb-8">Tentang INVOFEST</h2>
      <p className="text-lg text-gray-700 max-w-4xl mb-6">
        Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema "Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow".
      </p>
      <div className="flex gap-4">
        <Button label="Info Selengkapnya" variant="primary"/>
        <Button label="Hubungi Panitia" variant="outline"/>
      </div>
    </div>

    <div className="py-20 px-10 bg-white">
      <h2 className="text-3xl font-bold text-red-900 mb-8">Kegiatan INVOFEST</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-900 mb-3">IT Seminar</h3>
          <p className="text-gray-700">Seminar nasional ini membahas "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif" untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-900 mb-3">IT Talkshow</h3>
          <p className="text-gray-700">Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan" membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-900 mb-3">IT Competition</h3>
          <p className="text-gray-700">Kompetisi "From Creation to Innovation" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa.</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-900 mb-3">IT Workshop</h3>
          <p className="text-gray-700">Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.</p>
        </div>
      </div>
    </div>

    <div id="pembicara" className="py-20 px-10 mt-10">
      <h2 className="text-5xl font-bold text-red-900 text-center mb-24">
        Temui Pembicara Khusus Kami
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <CardPembicara
          name="Dery Agung Triyadi"
          role="Aws Indonesia"
          imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"
        />
        <CardPembicara
          name="Sowam Habibi"
          role="Google Indonesia"
          imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"
        />
      </div>
    </div>
    
    <div className="py-20 px-10 bg-slate-50">
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto font-bold text-4xl">
        Punya Pertanyaan? Lihat Disini!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg border border-red-200">
          <h3 className="font-bold text-red-900 mb-2">Apa itu INVOFEST?</h3>
          <p className="text-gray-700">Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-red-200">
          <h3 className="font-bold text-red-900 mb-2">Bagaimana saya mengetahui pemenang kompetisi?</h3>
          <p className="text-gray-700">Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri.</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-red-200">
          <h3 className="font-bold text-red-900 mb-2">Kapan dan dimana INVOFEST dilaksanakan?</h3>
          <p className="text-gray-700">INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-red-200">
          <h3 className="font-bold text-red-900 mb-2">Apa yang didapat pemenang dalam kompetisi?</h3>
          <p className="text-gray-700">Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat.</p>
        </div>
      </div>
    </div>

  </>
  );
}

export default App;
