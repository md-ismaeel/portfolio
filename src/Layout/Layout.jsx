
import { Outlet } from 'react-router-dom';
import { PersonalDetail } from "../Components/PersonalDetails/PersonalDetails";
import "./Layout.css"

export const Layout = () => {

    return (
        <div className="landing-container">
            <div className='left-home'>
                <PersonalDetail />
            </div>
            <div className='right-home'>
                <Outlet />
            </div>
        </div>
    );
}