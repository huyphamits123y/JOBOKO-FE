import CompanyDetailsPage from '../pages/CompanyDetailsPage/CompanyDetailsPage'
import FindJobPage from '../pages/FindJobPage/FindJobPage'
import HomePage from '../pages/HomePage/HomePage'
import JobByProvincePage from '../pages/JobByProvincePage/JobByProvincePage'
import JobDetailsPage from '../pages/JobDetailsPage/JobDetailsPage'
import ManagerCVPage from '../pages/ManagerCVPage/ManagerCVPage'
import ManagerPage from '../pages/ManagerPage/ManagerPage'
import ProfessionPage from '../pages/ProfessionPage/ProfessionPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import RecruitmentPage from '../pages/RecruitmentPage/RecruitmentPage'
import SearchJobFieldPage from '../pages/SearchJobPage/SearchJobPage'
import SearchJobPage from '../pages/SearchJobPage/SearchJobPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import UpdateProfilePage from '../pages/UpdateProfilePage/UpdateProfilePage'
import UpdateRequireJobPage from '../pages/UpdateRequireJobPage/UpdateRequireJobPage'

export const routes = [
    {
        path: '/',
        page: HomePage,


    },
    {
        path: '/sign-in',
        page: SignInPage,


    },
    {
        path: '/sign-up',
        page: SignUpPage,


    },
    {
        path: '/companydetails',
        page: CompanyDetailsPage,


    },
    {
        path: '/jobdetails',
        page: JobDetailsPage,


    },
    {
        path: '/searchjob',
        page: SearchJobFieldPage,


    },
    {
        path: '/profile',
        page: ProfilePage,


    },
    {
        path: '/updateprofile',
        page: UpdateProfilePage,


    },
    {
        path: '/updaterequirejob',
        page: UpdateRequireJobPage,


    },
    {
        path: '/manager',
        page: ManagerPage,


    },
    {
        path: '/recruitment',
        page: RecruitmentPage,


    },
    {
        path: '/findjobpage',
        page: FindJobPage,


    },
    {
        path: '/jobbyprovincepage',
        page: JobByProvincePage,


    },
    {
        path: '/professionPage',
        page: ProfessionPage,


    },
    {
        path: '/managercvpage',
        page: ManagerCVPage,


    },

]