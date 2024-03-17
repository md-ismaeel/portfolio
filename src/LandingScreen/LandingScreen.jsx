import { PersonalDetail } from "../Components/PersonalDetails/PersonalDetails";
import { About } from "../Components/ProfessionalDetails/About/About";
import "../LandingScreen/LandingScreen.css"


export const LandingScreen = () => {
    return (
        <div className="landing-container">
            <PersonalDetail />
            <About />
        </div>
    );
}