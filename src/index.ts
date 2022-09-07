import VConsole from 'vconsole';
import './styles/global.less';
const vConsole = new VConsole();
const canUseDom = !!(
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window.document &&
  window.document.createElement
);
if (canUseDom) {
  document.addEventListener('touchstart', () => {}, true);
}
export { default as Switch } from './components/Switch';
export { default as Button } from './components/Button';
