
import cssClass from './App.module.css';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';


function App() {
  return (
    <div className={cssClass.App}>
     <Layout>
       <BurgerBuilder/>
     </Layout>
    </div>
  );
}

export default App;
