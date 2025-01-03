


function themeEvents() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    let currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        themeToggleBtn.textContent = 'Light Mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        let theme = 'dark';
        if (document.body.classList.contains('light-theme')) {
            theme = 'light';
            themeToggleBtn.textContent = 'Dark Mode';
        } else {
            themeToggleBtn.textContent = 'Light Mode';
        }
        localStorage.setItem('theme', theme);
    });
}




function scrollEvents() {
    let scrollUpBtn = document.getElementById("scroll-up-btn");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollUpBtn.style.display = "inline";
        } else {
            scrollUpBtn.style.display = "none";
        }
    });


    scrollUpBtn.addEventListener("click", function (event) {
        scrollTo({top: 0, behavior: "smooth"});
    });
}


const translations = {
    home : {
        en : {
            a1 : "Home",
            a2 : "About Us",
            a3 : "Services",
            a4 : "Contact Us",
            a5 : "FAQ",
            text1 : "Innovating the Future",
            text2 : "At TechNova, we build cutting-edge technology solutions that drive businesses forward.",
            text3 : "Explore Our Services",
            text4 : "Why Choose TechNova?",
            text5 : "We are a team of passionate innovators committed to delivering excellence in every project we undertake.",
            text6 : "Our expertise spans across multiple domains, including software development, artificial intelligence, data analytics, and cloud computing.",
            text7 : "We collaborate closely with our clients to understand their unique challenges and tailor solutions that meet their specific needs.",
            text8 : "At TechNova, we believe in continuous learning and staying ahead of industry trends to provide cutting-edge solutions.",
            text9 : "Our Achievements",
            text10 : "Over 500 successful projects delivered",
            text11 : "A global client base across 20+ countries",
            text12 : "Awarded \"Tech Company of the Year\" for three consecutive years",
            text13 : "Join us on this journey of innovation and let us help you transform your business.",
        },
        ru : {
            a1 : "Дом",
            a2 : "О нас",
            a3 : "Услуги",
            a4 : "Связаться с нами",
            a5 : "Часто задаваемые вопросы",
            text1 : "Инновации будущего",
            text2 : "В TechNova мы создаем передовые технологические решения, которые способствуют развитию бизнеса.",
            text3 : "Ознакомьтесь с нашими услугами",
            text4 : "Почему стоит выбрать TechNova?",
            text5 : "Мы — команда увлеченных новаторов, стремящихся к достижению совершенства в каждом проекте, за который мы беремся.",
            text6 : "Наши знания и опыт охватывают множество областей, включая разработку программного обеспечения, искусственный интеллект, аналитику данных и облачные вычисления.",
            text7 : "Мы тесно сотрудничаем с нашими клиентами, чтобы понять их уникальные проблемы и разработать индивидуальные решения, отвечающие их конкретным потребностям.",
            text8 : "В TechNova мы верим в необходимость постоянного обучения и опережения тенденций отрасли для предоставления передовых решений.",
            text9 : "Наши достижения",
            text10 : "Более 500 успешно реализованных проектов",
            text11 : "Глобальная клиентская база в более чем 20 странах",
            text12 : "Награждена званием «Технологическая компания года» три года подряд",
            text13 : "Присоединяйтесь к нам на этом пути инноваций и позвольте нам помочь вам преобразовать ваш бизнес.",
        }
    },
    about : {
        en : {
            a1 : "Home",
            a2 : "About Us",
            a3 : "Services",
            a4 : "Contact Us",
            a5 : "FAQ",
            text1 : "About TechNova",
            text2 : "TechNova was founded in 2010 with a mission to revolutionize the tech industry. Over the past decade, we have grown into a global leader in technological innovation.",
            text3 : "Our Mission",
            text4 : "To empower businesses with state-of-the-art technology solutions that enhance productivity and drive growth.",
            text5 : "Our Vision",
            text6 : "To be at the forefront of technological advancements, shaping the future through innovation.",
            text7 : "Our Values",
            text8 : "Innovation: We foster a culture of creativity and continuous improvement.",
            text9 : "Integrity: We conduct our business with the highest ethical standards.",
            text10 : "Collaboration: We believe in the power of teamwork to achieve extraordinary results.",
            text11 : "Customer Focus: We are dedicated to exceeding our clients' expectations.",
            text12 : "Our Team",
            text13 : "Our team comprises industry experts with years of experience in software development, AI, and data analytics. We are passionate about technology and committed to delivering excellence.",
            text14 : "Our Journey",
            text15 : "From humble beginnings, TechNova has expanded its operations across the globe, establishing offices in key technology hubs. Our journey is marked by milestones of innovation, customer satisfaction, and industry recognition.",
            text16 : "We are excited about the future and look forward to continuing our mission to innovate and inspire.",
        },
        ru : {
            a1 : "Дом",
            a2 : "О нас",
            a3 : "Услуги",
            a4 : "Связаться с нами",
            a5 : "Часто задаваемые вопросы",
            text1 : "О компании TechNova",
            text2 : "Компания TechNova была основана в 2010 году с целью произвести революцию в технологической отрасли. За последнее десятилетие мы стали мировым лидером в области технологических инноваций.",
            text3 : "Наша миссия",
            text4 : "Обеспечить предприятия передовыми технологическими решениями, повышающими производительность и стимулирующими рост.",
            text5 : "Наше Видение",
            text6 : "Быть на переднем крае технологических достижений, формируя будущее посредством инноваций.",
            text7 : "Наши ценности",
            text8 : "Инновации: мы развиваем культуру творчества и постоянного совершенствования.",
            text9 : "Честность: Мы ведем свой бизнес в соответствии с самыми высокими этическими стандартами.",
            text10 : "Сотрудничество: Мы верим в силу командной работы, позволяющей достигать выдающихся результатов.",
            text11 : "Ориентация на клиента: мы стремимся превзойти ожидания наших клиентов.",
            text12 : "Наша команда",
            text13 : "Наша команда состоит из экспертов отрасли с многолетним опытом в разработке ПО, ИИ и аналитике данных. Мы увлечены технологиями и стремимся к достижению совершенства.",
            text14 : "Наше путешествие",
            text15 : "Начиная скромно, TechNova расширила свою деятельность по всему миру, открыв офисы в ключевых технологических центрах. Наш путь отмечен вехами инноваций, удовлетворенности клиентов и признания в отрасли.",
            text16 : "Мы с энтузиазмом смотрим в будущее и с нетерпением ждем продолжения нашей миссии по внедрению инноваций и вдохновению.",
        }
    },
    contact : {
        en : {
            a1 : "Home",
            a2 : "About Us",
            a3 : "Services",
            a4 : "Contact Us",
            a5 : "FAQ",
            text1 : "Contact Us",
            text2 : "We'd love to hear from you! Please fill out the form below or reach us using the contact information provided.",
            text3 : "Our Office",
            text4 : "Email",
            text5 : "Phone",
            text6 : "Name:",
            text7 : "Email:",
            text8 : "Subject:",
            text9 : "Message:",
            text10 : "Send Message",
        },
        ru : {
            a1 : "Дом",
            a2 : "О нас",
            a3 : "Услуги",
            a4 : "Связаться с нами",
            a5 : "Часто задаваемые вопросы",
            text1 : "Связаться с нами",
            text2 : "Мы будем рады услышать от вас! Пожалуйста, заполните форму ниже или свяжитесь с нами, используя предоставленную контактную информацию.",
            text3 : "Наш офис",
            text4 : "Электронная почта",
            text5 : "Телефон",
            text6 : "Имя:",
            text7 : "Электронная почта:",
            text8 : "Тема:",
            text9 : "Сообщение:",
            text10 : "Отправить сообщение",
        }
    },
    faq : {
        en : {
            a1 : "Home",
            a2 : "About Us",
            a3 : "Services",
            a4 : "Contact Us",
            a5 : "FAQ",
            text1 : "Frequently Asked Questions",
            text2 : "What services does TechNova offer?",
            text3 : "We offer a range of services including software development, AI solutions, data analytics, and cloud computing.",
            text4 : "How can I contact TechNova?",
            text5 : "You can reach us via the contact form on our page or email us at contact@technova.com.",
            text6 : "Where is TechNova located?",
            text7 : "Our headquarters are located in San Francisco, CA, with offices worldwide.",
            text8 : "Do you provide customized solutions?",
            text9 : "Yes, we tailor our solutions to meet the specific needs of each client.",
            text10 : "What industries do you serve?",
            text11 : "We serve a wide range of industries including finance, healthcare, retail, and manufacturing.",
            text12 : "How long does a typical project take?",
            text13 : "The duration varies depending on the project scope. We work closely with clients to establish timelines that meet their needs.",
            text14 : "Do you offer post-implementation support?",
            text15 : "Yes, we provide ongoing support and maintenance services.",
        },
        ru : {
            a1 : "Дом",
            a2 : "О нас",
            a3 : "Услуги",
            a4 : "Связаться с нами",
            a5 : "Часто задаваемые вопросы",
            text1 : "Часто задаваемые вопросы",
            text2 : "Какие услуги предлагает TechNova?",
            text3 : "Мы предлагаем широкий спектр услуг, включая разработку программного обеспечения, решения на основе искусственного интеллекта, аналитику данных и облачные вычисления.",
            text4 : "Как я могу связаться с TechNova?",
            text5 : "Вы можете связаться с нами через контактную форму на нашей странице или написать нам по адресу contact@technova.com.",
            text6 : "Где находится TechNova?",
            text7 : "Наша штаб-квартира находится в Сан-Франциско, штат Калифорния, а офисы расположены по всему миру.",
            text8 : "Предоставляете ли вы индивидуальные решения?",
            text9 : "Да, мы адаптируем наши решения к конкретным потребностям каждого клиента.",
            text10 : "Какие отрасли вы обслуживаете?",
            text11 : "Мы обслуживаем широкий спектр отраслей, включая финансы, здравоохранение, розничную торговлю и производство.",
            text12 : "Сколько времени занимает типичный проект?",
            text13 : "Продолжительность варьируется в зависимости от масштаба проекта. Мы тесно сотрудничаем с клиентами, чтобы установить сроки, которые соответствуют их потребностям.",
            text14 : "Предлагаете ли вы поддержку после внедрения?",
            text15 : "Да, мы предоставляем постоянную поддержку и обслуживание.",
        }
    },
    services : {
        en : {
            a1 : "Home",
            a2 : "About Us",
            a3 : "Services",
            a4 : "Contact Us",
            a5 : "FAQ",
            text1 : "Our Services",
            text2 : "We offer a comprehensive suite of services designed to meet the diverse needs of our clients.",
            text3 : "Software Development",
            text4 : "Custom software solutions tailored to your business needs, using the latest technologies and best practices.",
            text5 : "Artificial Intelligence",
            text6 : "Implement AI to automate processes, enhance decision-making, and gain valuable insights.",
            text7 : "Data Analytics",
            text8 : "Unlock the power of data with our analytics services, helping you make data-driven decisions.",
            text9 : "Cloud Computing",
            text10 : "Scalable cloud solutions for growing businesses, ensuring flexibility and security.",
            text11 : "Consulting Services",
            text12 : "Our experts provide strategic consulting to help you navigate the complexities of technology adoption.",
            text13 : "Support and Maintenance",
            text14 : "We offer ongoing support and maintenance services to ensure your technology solutions remain up-to-date and effective.",
        },
        ru : {
            a1 : "Дом",
            a2 : "О нас",
            a3 : "Услуги",
            a4 : "Связаться с нами",
            a5 : "Часто задаваемые вопросы",
            text1 : "Наши услуги",
            text2 : "Мы предлагаем комплексный пакет услуг, призванный удовлетворить разнообразные потребности наших клиентов.",
            text3 : "Разработка программного обеспечения",
            text4 : "Индивидуальные программные решения, разработанные с учетом потребностей вашего бизнеса и использующие новейшие технологии и передовой опыт.",
            text5 : "Искусственный интеллект",
            text6 : "Внедряйте ИИ для автоматизации процессов, улучшения процесса принятия решений и получения ценной информации.",
            text7 : "Аналитика данных",
            text8 : "Раскройте потенциал данных с помощью наших аналитических услуг, которые помогут вам принимать решения на основе данных.",
            text9 : "Облачные вычисления",
            text10 : "Масштабируемые облачные решения для растущего бизнеса, обеспечивающие гибкость и безопасность.",
            text11 : "Консалтинговые услуги",
            text12 : "Наши эксперты предоставляют стратегические консультации, которые помогут вам разобраться в сложностях внедрения технологий.",
            text13 : "Поддержка и обслуживание",
            text14 : "Мы предлагаем постоянную поддержку и обслуживание, чтобы гарантировать актуальность и эффективность ваших технологических решений.",
        }
    }
}


function updateLanguage(language) {
    const attr = document.body.getAttribute("data-page");

    for ([key, value] of Object.entries(translations[attr][language])) {
        const element = document.getElementById(key);

        element.textContent = value;
    }
}

function languageEvents() {
    let language = localStorage.getItem("preferredLanguage");

    if (language === null) {
        language = "en"
    }

    updateLanguage(language);

    const languageSelector = document.getElementById("language-selector");
    languageSelector.value = language;
    languageSelector.addEventListener("change", (e) => {
        const selectedLanguage = e.target.value;

        localStorage.setItem("preferredLanguage", selectedLanguage);

        updateLanguage(selectedLanguage);
    });
}

function linkEvents() {
    const tooltip = document.getElementById("tooltip");

    document.querySelectorAll(".ajax-link").forEach(link => {
        link.addEventListener("mouseenter", async (event) => {
            const url = link.dataset.url;

            try {
                const response = await fetch(url);
                const data = await response.text();

                tooltip.innerHTML = data.substring(1210, 1550) + '...';
                tooltip.style.display = "block";

                const rect = link.getBoundingClientRect();
                tooltip.style.left = `${rect.left + window.scrollX - (tooltip.offsetWidth - link.offsetWidth) / 2}px`;
                tooltip.style.top = `${rect.bottom + window.scrollY}px`;
            } catch (error) {
                tooltip.innerHTML = "Error loading preview.";
                tooltip.style.display = "block";
            }
        });

        link.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });
}

function changeSlide(num){
    previousSlideIndex = currentSlideIndex;
    showSlide(currentSlideIndex += num);
}

function nextSlide(){
    changeSlide(1);
}

function currentSlide(num){
    if(currentSlideIndex === num) return;
    previousSlideIndex = currentSlideIndex;
    showSlide(currentSlideIndex = num);
}

function showSlide(index){
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");

    if(currentSlideIndex >= slides.length){
        currentSlideIndex = 0;
    }
    else if(currentSlideIndex < 0){
        currentSlideIndex = slides.length - 1;
    }

    slides[previousSlideIndex].style.display = "none";
    slides[currentSlideIndex].style.display = "block";
    dots[previousSlideIndex].classList.remove("active-dot");
    dots[currentSlideIndex].classList.add("active-dot");
}

let currentSlideIndex = 0;
let previousSlideIndex = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    scrollEvents();
    themeEvents();
    languageEvents();
    linkEvents();

    showSlide(currentSlideIndex);
});

