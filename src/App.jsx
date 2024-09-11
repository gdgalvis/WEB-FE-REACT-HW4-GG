import './App.css'
import Header from './components/Header';
import Introduction from './components/Introduction';
import Dofa from './components/Dofa';
import OrganizationalIdentity from './components/OrganizationalIdentity';
import StrategicObjectives from './components/StrategicObjectives';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container max-w-screen-lg mx-auto p-4">
        <Introduction />
        <Dofa />
        <OrganizationalIdentity />
        <StrategicObjectives />
      </main>
      <Footer />
    </div>
  );
}

export default App;