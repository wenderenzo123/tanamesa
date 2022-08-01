import Menu from './pages/menu';
import Home from 'pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from 'components/menu';
import DefaultPage from 'components/defaultPage';
export default function AppRouter() {
    return (
        <main>
            <Router>
                <Pages/>
                <Routes>
                    <Route path="/"  element={<DefaultPage/>}>
                        <Route index element={<Menu/>}></Route>
                        <Route path="Cardapio"  element={<Home/>}/>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
} 