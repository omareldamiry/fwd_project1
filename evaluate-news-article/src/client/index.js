import handleSubmit from './js/formHandler'
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('button');
    const url = document.querySelector('input').value;
    console.log(url);
    submitButton.addEventListener('click', () => {
        handleSubmit(url);
    })
})
export { handleSubmit }
