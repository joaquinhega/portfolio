document.addEventListener('DOMContentLoaded', () => {
    const proyectosData = {
        'besttrip': {
            titulo: 'Pagina Web Best Trip',
            problema: '<strong>Problema:</strong>La empresa debia mostrar sus destinos de viajes.',
            solucion: '<strong>Solución:</strong> Una web simple completamente personalizada respetando la identidad de la marca.',
            resultado: '<strong>Resultado:</strong> Los clientes observan mediante filtros y palabras claves los posibles destinos a visitar, teniendo contacto directo con el Whatsapp de la empresa.',
            testimonio: '"Con esta pagina, puedo comercializar mis servicios facilmente, mis clientes estan contentos con la facilidad que tienen para buscar destinos de viaje"<br>— Juan, dueño de Best Trip.',
            imagenes: [
                { src: 'assets/besttrip/besttrip1.png', epigrafe: 'HERO' },
                { src: 'assets/besttrip/besttrip2.png', epigrafe: 'SECCIÓN DESTINOS' },
                { src: 'assets/besttrip/besttrip3.png', epigrafe: 'QUIENES SOMOS' },
                { src: 'assets/besttrip/besttrip4.png', epigrafe: 'POR QUÉ ELEGIRNOS' },
                { src: 'assets/besttrip/besttrip5.png', epigrafe: 'CONTACTO' }
            ]
        },
        'newharvest': {
            titulo: 'Sistema de Gestion New Harvest',
            problema: '<strong>Problema:</strong> Anotaban viajes en papel y el control de los choferes era muy engorroso.',
            solucion: '<strong>Solución:</strong> Aplicacion de telefono para choferes, con capacidad de cargar viajes sin conexion a internet. Ademas de una pagina Web para administracion por reportes y generacion de PDFs.',
            resultado: '<strong>Resultado:</strong> Reduccion de trabajo administrativo y control total de los viajes y choferes. Todo en un solo lugar y sin esperar a los choferes a llegar fisicamente a la oficina.',
            testimonio: '"Nos simplificó toda la logica del negocio, lo que antes hacia en una jornada completa ahora lo hago en menos de una hora"<br>— Juan Pablo, administrador de New Harvest.',
            imagenes: [
                { src: 'assets/newharvest/newharvest1.png', epigrafe: 'INICIO/VOUCHERS ENVIADOS POR CHOFERES' },
                { src: 'assets/newharvest/newharvest2.png', epigrafe: 'EMPRESAS CREADAS' },
                { src: 'assets/newharvest/newharvest3.png', epigrafe: 'GESTION DE EMPRESAS' },
                { src: 'assets/newharvest/newharvest4.png', epigrafe: 'VOUCHERS ASIGNADOS A UNA EMPRESA' },
                { src: 'assets/newharvest/newharvest5.png', epigrafe: 'REPORTE DE VOUCHER EN PDF' },
                { src: 'assets/newharvest/mobnewharvest.png', epigrafe: 'LADO CHOFER / APP MOBILE' },

            ]
        },
        'twinpack': {
            titulo: 'Modificación en sistema Twinpack',
            problema: '<strong>Problema:</strong> La empresa había adquirido un sistema de gestión personalizado que no cubría todo su flujo de trabajo, lo que generaba ineficiencias y confusión.',
            solucion: '<strong>Solución:</strong> Se modificó la lógica del sistema, agregando reportes en las órdenes de compra y renovando la interfaz para que sea más intuitiva.',
            resultado: '<strong>Resultado:</strong> Ahorro de tiempo y mayor eficiencia. Ahora el equipo utiliza un sistema que comprenden y que se adapta a sus necesidades reales.',
            testimonio: '"El sistema ahora es mucho más fácil de usar y realmente se ajusta a lo que necesitamos día a día. Nos ahorra tiempo y problemas."<br>— Gerónimo, dueño de Twinpack.',
            imagenes: [
                { src: 'assets/twinpack/twinpack1.jpeg', epigrafe: 'INICIO/ATAJO PARA VER PROXIMAS ENTREGAS' },
                { src: 'assets/twinpack/twinpack2.jpeg', epigrafe: 'FILTROS DE BUSQUEDA DE ORDENES' },
                { src: 'assets/twinpack/twinpack3.jpeg', epigrafe: 'LINEA DE TIEMPO/ESTADOS DE UNA ORDEN' },
                { src: 'assets/twinpack/twinpack4.jpeg', epigrafe: 'PRESUPUESTO AUTOMATICO EN PDF PARA UN TERCERO' },
                { src: 'assets/twinpack/twinpack5.png', epigrafe: 'ADMINISTRACIÓN DE USUARIOS, CLIENTES, PROVEEDORES Y CATEGORIAS' }
            ]
        }
    };
    
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            // Cierra el menú en móviles después de hacer clic en un enlace
            if (menuToggle.classList.contains('is-active')) {
                menuToggle.classList.remove('is-active');
                navMenu.classList.remove('is-active');
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
    currentCarruselImages.forEach(imgObj => {
        const figure = document.createElement('figure');
        figure.style.margin = '0';
        figure.style.width = '100%';
        figure.style.textAlign = 'center';

        const img = document.createElement('img');
        img.src = imgObj.src;
        img.alt = projectData.titulo;

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = imgObj.epigrafe;
        figcaption.className = 'modal-epigrafe';

        figure.appendChild(img);
        figure.appendChild(figcaption);
        modalCarrusel.appendChild(figure);
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