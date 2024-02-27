import Module from './modules';
import './App.scss';

(function() {
    try {
        if( document.readyState === 'complete') {
            Module.init();
        } else { 
            window.addEventListener('load', ()=> Module.init());
        }
    } catch(e) {
        console.error('error in the page init', e);
    }
})();

