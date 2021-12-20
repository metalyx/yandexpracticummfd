import { sum } from './modules/sum';

const root = document.getElementById('root');
root.textContent = sum(6, -1).toString();
