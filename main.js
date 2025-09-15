document.addEventListener('DOMContentLoaded', () => {
    const proyectosData = {
        'besttrip': {
            titulo: 'Pagina Web Best Trip',
            problema: '<strong>Problema:</strong>La empresa debia mostrar sus destinos de viajes.',
            solucion: '<strong>Solución:</strong> Una web simple completamente personalizada respetando la identidad de la marca.',
            resultado: '<strong>Resultado:</strong> Los clientes observan mediante filtros y palabras claves los posibles destinos a visitar, teniendo contacto directo con el Whatsapp de la empresa.',
            testimonio: '"Con esta pagina, puedo comercializar mis servicios facilmente, mis clientes estan contentos con la facilidad que tienen para buscar destinos de viaje"<br>— Juan, dueño de Best Trip.',
            imagenes: ['assets/besttrip/besttrip1.png', 'assets/besttrip/besttrip2.png', 'assets/besttrip/besttrip3.png']
        },
        'newharvest': {
            titulo: 'Sistema de Gestion New Harvest',
            problema: '<strong>Problema:</strong> Anotaban viajes en papel y el control de los choferes era muy engorroso.',
            solucion: '<strong>Solución:</strong> Aplicacion de telefono para choferes, con capacidad de cargar viajes sin conexion a internet. Ademas de una pagina Web para administracion por reportes y generacion de PDFs.',
            resultado: '<strong>Resultado:</strong> Reduccion de trabajo administrativo y control total de los viajes y choferes. Todo en un solo lugar y sin esperar a los choferes a llegar fisicamente a la oficina.',
            testimonio: '"Nos simplificó toda la logica del negocio, lo que antes hacia en una jornada completa ahora lo hago en menos de una hora"<br>— Juan Pablo, administrador de New Harvest.',
            imagenes: ['assets/newharvest/newharvest1.png', 'assets/newharvest/newharvest2.png', 'assets/newharvest/newharvest3.png', 'assets/newharvest/newharvest4.png', 'assets/newharvest/newharvest5.png']
        },
        '': {
            titulo: '',
            problema: '<strong>Problema:</strong> ',
            solucion: '<strong>Solución:</strong> ',
            resultado: '<strong>Resultado:</strong>',
            testimonio: '""<br>— ',
            imagenes: ['assets/', 'assets/', 'assets/']
        }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Validacion Formulario
    const contactForm = document.querySelector('#contacto form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const mail = document.getElementById('mail').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        if (nombre === '' || mail === '' || mensaje === '') {
            alert('Por favor, completa todos los campos del formulario.');
        } else {
            alert('¡Mensaje enviado con éxito! Te contactaré a la brevedad.');
            contactForm.reset();
        }
    });

    // Modal y Galeria
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const modalCarrusel = document.querySelector('.modal-carrusel');
    const modalNextBtn = document.querySelector('.modal-carrusel-btn.next');
    const modalPrevBtn = document.querySelector('.modal-carrusel-btn.prev');

    let currentImageIndex = 0;
    let currentCarruselImages = [];

    // Abrir el modal
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectKey = btn.closest('.caso-estudio').dataset.project;
            const projectData = proyectosData[projectKey];
            
            document.getElementById('modal-titulo').textContent = projectData.titulo;
            document.getElementById('modal-problema').innerHTML = projectData.problema;
            document.getElementById('modal-solucion').innerHTML = projectData.solucion;
            document.getElementById('modal-resultado').innerHTML = projectData.resultado;
            document.getElementById('modal-testimonio').innerHTML = projectData.testimonio;
            
            modalCarrusel.innerHTML = '';
            currentCarruselImages = projectData.imagenes;
            currentCarruselImages.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = projectData.titulo;
                modalCarrusel.appendChild(img);
            });
            
            modal.style.display = 'block';
            currentImageIndex = 0;
            updateModalCarrusel();
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    function updateModalCarrusel() {
        const offset = -currentImageIndex * 100;
        modalCarrusel.style.transform = `translateX(${offset}%)`;
    }

    modalNextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % currentCarruselImages.length;
        updateModalCarrusel();
    });

    modalPrevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + currentCarruselImages.length) % currentCarruselImages.length;
        updateModalCarrusel();
    });
});