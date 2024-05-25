import Navbar from "./components/Navbar";
import QualityQourses from "./components/QualityQourses";
import TrustedByOver from "./components/TrustedByOver";
import YearsOf from "./components/12YearsOf";
import TopclassNameCourses from "./components/TopClassCourses";
import LearnWithEffectivey from "./components/LearnWithEffectivey";
import UniqueCourses from "./components/10UniqueCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import OurInstructors from "./components/OurInstructors";
import ExpertInstructor from "./components/ExpertInstructor";
import WhatsOurReal from "./components/WhatsOurReal";
import BecomeAnInstructor from "./components/BecomeAnInstructor";
import AffordableOnline from "./components/AffordableOnline";
import TopArticles from "./components/TopArticles";
import AvailableOnAndroid from "./components/AvailableOnAndroid";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="w-full h-full flex flex-col  overflow-hidden">
        <Navbar></Navbar>
        <QualityQourses></QualityQourses>
        <TrustedByOver></TrustedByOver>
        <YearsOf></YearsOf>
        <TopclassNameCourses></TopclassNameCourses>
        <LearnWithEffectivey></LearnWithEffectivey>
        <UniqueCourses></UniqueCourses>
        <WhyChooseUs></WhyChooseUs>
        <OurInstructors></OurInstructors>
        <ExpertInstructor></ExpertInstructor>
        <WhatsOurReal></WhatsOurReal>
        <BecomeAnInstructor></BecomeAnInstructor>
        <AffordableOnline></AffordableOnline>
        <TopArticles></TopArticles>
        <AvailableOnAndroid></AvailableOnAndroid>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
