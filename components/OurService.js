import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceSlide from "./ServiceSlide";

const OurService = () => {
  return (
    <div id="ourservice" className="section-two text-slate-700  p-3 m-4">
      <div className="items-center flex flex-col">
        <h1 className="mb-3 pt-28">ផ្តល់ជម្រើសដ៏សំបូរបែបសម្រាប់អ្នក</h1>{" "}
        <p className="text-center text-base md:text-base lg:text-lg leading-loose w-4/6">
          ទទួលយកនូវបទពិសោធន៍ថ្មីពី ដើរលេង
          ដែលផ្តល់ជូននូវជម្រើសដ៏សំបូរបែបដល់អ្នកទេសចរកម្ពុជា
        </p>
      </div>
      <ServiceSlide />
    </div>
  );
};

export default OurService;
