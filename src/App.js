import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './RoleLogin.js'; 
import Register from './Register.js';
import AdminRegister from './adminregister.js';
import Productpage from './Productpage.js';
import ForgetPassword from './ForgetPassword.js';
import Mainpage from './mainpage.js';
import AboutUs from './aboutus.js';
import ContactPage from './contact.js';
import CartPage from './Addtocart.js';
import DeliveryPersonnelPage from './delivery.js';
import CheckoutPage from './payment.js';
import PrivacyPolicy from './privacy.js';
import FAQPage from './FAQ.js';
import SalePage from './sale.js';
import NewArrivalsPage from './newarrival.js';
import ProductDetail from './productdetail.js';
import TermsOfSale from './termsofsale.js';
import FeedbackDashboard from './feedbackadmin.js';
import ProductDetailSecond from './productdetailsecond.js';
import CheckoutPagepayment from './payments.js';
import ReceiptPage from './Receipt.js';
import TermsConditions from './Condition.js';
import Shipping from './shipping.js';
import WishlistPage from './favourite.js';
import RideOnsPage from './ride.js';
import BarbiePage from './barbie.js';
import BabiesPage from './babiespage.js';
import AdminPage from './AdminPage.js';
import PaymentForm from './payment.js';
import SalesStaffPage from './SalesStaffPage.js';
import ViewOrder from './vieworder.js';
import StoryTell from './story.js';
import WoodenToys from './WoodenToys.js';
import SecondYear from './secondyear.js';
import EducationalToys from './EducationalToys.js';
import ThirdYear from './thirdyear.js';
import FunToys from './FunToys.js';
import Rubsili from './Rubsili.js';
import SportsToys from './SportsToys.js';
import SoftToys from './SoftToys.js';
import FourthYear from './fourthyear.js';
import FifthYear from './fifthyear.js';
import SixthYear from './sixthyear.js';
import ProductDetail2 from './pro2.js';
import HomePage from './homepage.js';
import ReligiousToys from './Religiondetail.js';
import MyProfile from './editprofile.js';
import WoodenToysDetail from './Woodendetail.js';

// New Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './components/NotFound.jsx';
import { Receipt } from 'lucide-react';

export default function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/RoleLogin" element={<Login />} />
        <Route path="/Productpage" element={<Productpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Addtocart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/delivery" element={<DeliveryPersonnelPage />} />
        <Route path="/payment" element={<CheckoutPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/newarrival" element={<NewArrivalsPage />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/termsofsale" element={<TermsOfSale />} />
        <Route path="/feedbackadmin" element={<FeedbackDashboard />} />
        <Route path="/pro2" element={<ProductDetail2 />} />
        <Route path="/product/:id" element={<ProductDetailSecond />} />
        <Route path="/ride" element={<RideOnsPage />} />
        <Route path="/Religiondetail/:id" element={<ReligiousToys />} />

        <Route path="/payments" element={<CheckoutPagepayment />} />
        <Route path="/Receipt" element={<ReceiptPage />} />
        <Route path="/Condition" element={<TermsConditions />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/favourite" element={<WishlistPage />} />
        <Route path="/babiespage" element={<BabiesPage />} />
        <Route path="/ride" element={<RideOnsPage />} />
        <Route path="/barbie" element={<BarbiePage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/deliverpayment" element={<PaymentForm />} />
        <Route path="/SalesStaffPage" element={<SalesStaffPage/>} />
        <Route path="/vieworder" element={<ViewOrder />} />
        <Route path="/story" element={<StoryTell />} />
        <Route path="/WoodenToys" element={<WoodenToys />} />
        <Route path="/Woodendetail/:id" element={<WoodenToysDetail />} />

        <Route path="/secondyear" element={<SecondYear />} />
        <Route path="/educationaltoys" element={<EducationalToys />} />
        <Route path="/thirdyear" element={<ThirdYear />} />
        <Route path="/FunToys" element={<FunToys />} />
        <Route path="/Rubsili" element={<Rubsili />} />
        <Route path="/SportsToys" element={<SportsToys />} />
        <Route path="/SoftToys" element={<SoftToys />} />
        <Route path="/fourthyear" element={<FourthYear />} />
        <Route path="/fifthyear" element={<FifthYear />} />
        <Route path="/sixthyear" element={<SixthYear />} />
        <Route path="/Religiondetail" element={<ReligiousToys />} />
        <Route path="/editprofile" element={<MyProfile />} />

      </Routes>
      <Footer></Footer>
    </>
  );
}