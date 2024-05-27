import { createRoot } from 'react-dom/client';
import './index.css';
import HabitForm from './components/habitForm';
import reportWebVitals from './components/reportWebVitals';
//import App from './components/App';
//import WelcomeToHabit from './components/habitSingle';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<HabitForm />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
