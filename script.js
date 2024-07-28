document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection.innerHTML = `
        <h2>Repositorio de Cursos de PIT UNI (Universidad Nacional de Ingeniería - Perú)</h2>
        <p>Este repositorio contiene los materiales de los cursos que he llevado en la universidad. Lo he creado para tener fácil acceso a los recursos y para compartirlos con quienes los necesiten.</p>
        <h3>Cursos Incluidos</h3>
        <ul>
            <li><strong>Ciencia de Datos 1</strong></li>
            <li><strong>Ciencia de Datos 2</strong></li>
            <li><strong>Cloud Computing AWS-Azure-Google Cloud</strong></li>
            <li><strong>Deep Learning</strong></li>
            <li><strong>Machine Learning</strong></li>
            <li><strong>PowerBI - Básico</strong></li>
            <li><strong>PowerBI - Intermedio</strong></li>
            <li><strong>Ciberseguridad - Ethical Hacking</strong></li>
        </ul>
        <h3>Uso</h3>
        <p>Para acceder a los materiales, navega a través de las carpetas correspondientes a cada curso. Dentro de cada carpeta, encontrarás archivos organizados por sesiones, temas y tipos de recursos.</p>
        <h3>Contribuir</h3>
        <p>Si encuentras algún error o quieres agregar más recursos, siéntete libre de hacer un fork del repositorio y enviar un pull request con tus cambios.</p>
        <h3>Contacto</h3>
        <p>Si tienes alguna pregunta o necesitas ayuda con los materiales, no dudes en <a href="https://github.com/Karmatack">contactarme</a>.</p>
        <a href="https://wa.me/51902985139" target="_blank">
            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg" width="52" height="40" alt="whatsapp logo" />
        </a>
        <p><em>Disclaimer: Los materiales compartidos en este repositorio son solo para fines educativos y de referencia.</em></p>
    `;
});

function toggleAboutSection() {
    const aboutSection = document.getElementById('about-section');
    aboutSection.classList.toggle('hidden');
}
