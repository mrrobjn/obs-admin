import './App.css';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest'
import Products, { editProducts, createProducts } from './components/Products.jsx'
import Categories, { editCategories, createCategories } from './components/Categories';
import Users, { editUsers } from './components/Users';
import Orders,{editOrders} from './components/Orders';
function App() {
  return (
    <div className='App'>
      <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
        <Resource name='products' list={Products} edit={editProducts} create={createProducts} />
        <Resource name='categories' list={Categories} edit={editCategories} create={createCategories} />
        <Resource name='users' list={Users} edit={editUsers} />
        <Resource name='orders' list={Orders} edit={editOrders}/>
      </Admin>
    </div>
  );
}

export default App;
