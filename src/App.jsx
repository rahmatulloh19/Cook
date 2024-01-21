import { Route, Routes } from "react-router-dom";
import { MainNavbar } from "./components/MainNavbar/MainNavbar";
import {
	Dashboard,
	Discount,
	Home,
	Message,
	Notification,
	Setting,
	Soup,
	Grill,
	Appetizer,
	Dessert,
	HotDishes,
	ColdDishes,
} from "./pages";

function App() {
	return (
		<div className="grid grid-cols-12 flex-grow">
			<MainNavbar />
			<Routes>
				<Route path="home" element={<Home />}>
					<Route path="hot-dishes" element={<HotDishes />} />
					<Route path="cold-dishes" element={<ColdDishes />} />
					<Route path="soup" element={<Soup />} />
					<Route path="grill" element={<Grill />} />
					<Route path="appetizer" element={<Appetizer />} />
					<Route path="dessert" element={<Dessert />} />
				</Route>
				<Route path="discount" element={<Discount />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="message" element={<Message />} />
				<Route path="notification" element={<Notification />} />
				<Route path="setting" element={<Setting />} />
			</Routes>
		</div>
	);
}

export default App;
