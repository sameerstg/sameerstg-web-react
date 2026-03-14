
function Scroll(id: string){
    window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { id: 'home' } }));
}
export default Scroll;