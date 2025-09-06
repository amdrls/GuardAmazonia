document.addEventListener('DOMContentLoaded', function(){
    
    const datetimeElement = document.getElementById('datetime');

    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        datetimeElement.textContent = now.toLocaleDateString('pt-BR', options);
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
                alert('Por favor, preencha todos os campos do formulário.');
            } else {
                alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
                contactForm.reset();
            }
        });
    }

    // URLs de cada capital da Amazônia Legal
    const mapas = {
    acre: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4031282.0073489417!2d-74.85710747001355!3d-9.093876221568768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926cf11b1899b67f%3A0x77f39f8b8c9db59a!2sRio%20Branco%2C%20AC!5e0!3m2!1spt-BR!2sbr!4v1693826123456",
    amapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4027481.258234543!2d-54.857221317640165!3d1.4133360032396887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1a2c5d1f23af%3A0x86a81a9b7dd3c7c9!2sMacap%C3%A1%2C%20AP!5e0!3m2!1spt-BR!2sbr!4v1693826167890",
    amazonas: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4033853.032923656!2d-64.99308317602972!3d-3.1190274944915945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c054b4d49a31%3A0x6e2e5c8a9ffb1cd7!2sManaus%2C%20AM!5e0!3m2!1spt-BR!2sbr!4v1693826200000",
    maranhao: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4026740.1717575486!2d-45.26713587808482!3d-2.538742874190869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68edb7da9e03f%3A0xc51d1c056a5d3b41!2sS%C3%A3o%20Lu%C3%ADs%2C%20MA!5e0!3m2!1spt-BR!2sbr!4v1693826254321",
    matogrosso: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4026715.151118632!2d-56.09652312588536!3d-15.601410305243364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db07777e72f73%3A0x963c52912353f3b!2sCuiab%C3%A1%2C%20MT!5e0!3m2!1spt-BR!2sbr!4v1693826298765",
    para: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4033833.0700149033!2d-48.484894174623924!3d-1.4558330153977977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48bdf2335dbb5%3A0xd9d44f4a8932e8e!2sBel%C3%A9m%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1693826334567",
    rondonia: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4033866.933727994!2d-64.76888624791261!3d-8.76116048281284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926bcea5c62a3e67%3A0x7d8c6a38dfd2c9ef!2sPorto%20Velho%2C%20RO!5e0!3m2!1spt-BR!2sbr!4v1693826367890",
    roraima: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4033855.1442007553!2d-61.31096194136448!3d2.8195263465787467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d93044e4b69a4a3%3A0x9d91c3f3e66302d1!2sBoa%20Vista%2C%20RR!5e0!3m2!1spt-BR!2sbr!4v1693826401234",
    tocantins: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4026795.4978235676!2d-48.35538280272663!3d-10.249091348711243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d90db1c38502bb%3A0xf1dfc8e7f5f6b35!2sPalmas%2C%20TO!5e0!3m2!1spt-BR!2sbr!4v1693826437890"
    };

    // Função para trocar o mapa
    function carregarMapa(estado) {
    const iframe = document.getElementById("mapaFrame");
        if (iframe && mapas[estado]) {
            iframe.src = mapas[estado];
        }
    }

    const mapButtons = document.querySelectorAll('.mapa-botoes button[data-estado]');
    mapButtons.forEach(button => {
        button.addEventListener('click', function() {
            carregarMapa(this.dataset.estado);
        });
    });

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    const quizForm = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("quiz-result");

    const correctAnswers = {
        q1: "c",
        q2: "a",
        q3: "b",
    };

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let score = 0;
        const userAnswers = new FormData(quizForm);

        for (const [question, answer] of userAnswers.entries()) {
        if (correctAnswers[question] === answer) {
            score++;
        }
        }

        let message = "";
        if (score === 3) {
        message = `Excelente! Você acertou ${score} de 3 perguntas.`;
        } else if (score === 2) {
        message = `Muito bom! Você acertou ${score} de 3 perguntas.`;
        } else {
        message = `Continue estudando! Você acertou ${score} de 3.`;
        }

        resultDiv.textContent = message;
        resultDiv.style.display = "block";
    });
});