/* ==========
  Estado (somente memória)
========== */
const state = {
    theme: "light",
    selectedId: null,
    profiles: [],
};

/* ==========
  Dados fictícios (8–12 perfis)
  Observação: imagens via URL pública (placeholder).
  Se preferir 100% offline, substitua por dataURL/base64.
========== */
const seedProfiles = [
    {
        id: "p1",
        name: "Jessica Rodrigues",
        role: "Mestra em Eng. Elétrica e de Computação • Professora EBTT",
        bio: "Atuação em pesquisa aplicada, docência e projetos acadêmicos com foco em sistemas e engenharia.",
        location: "Boa Viagem, Ceará",
        followers: 88,
        following: 100,
        skills: ["Python", "Pesquisa", "Sistemas"],
        skillsLine: "Python | Pesquisa | Sistemas",
        accent: "purple",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=70",
        workAddress: "Instituto Federal de Educação,\nCiência e Tecnologia do Ceará",
        achievementText: "Começou a ministrar a disciplina de Programação Web II",
        isFollowing: false,
    },
    {
        id: "p2",
        name: "Gabriely Morais",
        role: "Desenvolvimento Frontend",
        bio: "Criação de interfaces responsivas com foco em performance, acessibilidade e UX moderna.",
        location: "Sobral, CE",
        followers: 214,
        following: 184,
        skills: ["Node.js", "Angular", "TypeScript", "Python"],
        skillsLine: "Node.js | Angular | TypeScript | Python",
        accent: "green",
        avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=70",
        workAddress: "Estúdio de Software • Centro\nRua Exemplo, 123 • Sobral/CE",
        achievementText: "Publicou um novo portfólio com projetos completos e documentação.",
        isFollowing: false,
    },
    {
        id: "p3",
        name: "Renato William",
        role: "Doutor em Informática aplicada • Professor/Pesquisador",
        bio: "Interesses em ciência de dados, sistemas distribuídos e engenharia de software aplicada.",
        location: "Fortaleza, CE",
        followers: 531,
        following: 98,
        skills: ["Pesquisa", "IA", "Sistemas"],
        skillsLine: "Pesquisa | IA | Sistemas",
        accent: "purple",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=70",
        workAddress: "Instituição Federal\nDepartamento de Informática",
        achievementText: "Aprovou artigo em evento científico com classificação relevante.",
        isFollowing: true,
    },
    {
        id: "p4",
        name: "Kaella Salles",
        role: "Backend Developer • CodeLeap",
        bio: "Implementação de APIs robustas, autenticação e integrações com bancos e serviços.",
        location: "Teresina, PI",
        followers: 302,
        following: 221,
        skills: ["PostgreSQL", "Django REST", "NestJS"],
        skillsLine: "PostgreSQL | Django REST | NestJS",
        accent: "blue",
        avatarUrl: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=640&q=70",
        workAddress: "Remoto • Atendimento Nacional\nHorário comercial",
        achievementText: "Concluiu migração de base de dados com zero downtime.",
        isFollowing: false,
    },
    {
        id: "p5",
        name: "Lucas Andrade",
        role: "Product Designer",
        bio: "Design de produtos digitais: prototipação, design system e testes de usabilidade.",
        location: "Recife, PE",
        followers: 190,
        following: 310,
        skills: ["Figma", "UX", "Design System"],
        skillsLine: "Figma | UX | Design System",
        accent: "green",
        avatarUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=70",
        workAddress: "Studio Criativo\nAv. Principal, 500 • Recife/PE",
        achievementText: "Criou um novo design system completo para uma plataforma SaaS.",
        isFollowing: false,
    },
    {
        id: "p6",
        name: "Marina Vasconcelos",
        role: "QA Engineer",
        bio: "Automação de testes, garantia de qualidade e melhoria contínua de processos.",
        location: "Natal, RN",
        followers: 124,
        following: 87,
        skills: ["Cypress", "Jest", "Playwright"],
        skillsLine: "Cypress | Jest | Playwright",
        accent: "blue",
        avatarUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=640&q=70",
        workAddress: "Laboratório de Qualidade\nAtuação híbrida",
        achievementText: "Reduziu em 35% os bugs em produção com pipeline de testes.",
        isFollowing: false,
    },
    {
        id: "p7",
        name: "Gabriel Augusto",
        role: "Pleno Full Stack Developer",
        bio: "Desenvolvimento de software com foco em performance, escalabilidade e experiência do usuário.",
        location: "Sobral, CE",
        followers: 760,
        following: 412,
        skills: ["React", "Node.js", "TypeScript"],
        skillsLine: "React | Node.js | TypeScript",
        accent: "purple",
        avatarUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=70",
        workAddress: "Empresa de Tecnologia\nAtuação híbrida",
        achievementText: "Desenvolveu um novo sistema de gestão de estoque.",
        isFollowing: true,
    },
    {
        id: "p8",
        name: "Ana Beatriz Lima",
        role: "Mobile Developer",
        bio: "Aplicações Flutter com arquitetura limpa, offline-first e integrações REST.",
        location: "João Pessoa, PB",
        followers: 278,
        following: 199,
        skills: ["Flutter", "Dart", "SQLite"],
        skillsLine: "Flutter | Dart | SQLite",
        accent: "green",
        avatarUrl: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=640&q=70",
        workAddress: "Equipe Mobile\nAtendimento por sprint",
        achievementText: "Entregou app offline-first com sincronização incremental.",
        isFollowing: false,
    },
    {
        id: "p9",
        name: "Felipe Nogueira",
        role: "Full Stack Developer",
        bio: "Entrega ponta a ponta: UI, APIs, banco e deploy, com foco em escalabilidade.",
        location: "Curitiba, PR",
        followers: 412,
        following: 266,
        skills: ["React", "Node.js", "PostgreSQL"],
        skillsLine: "React | Node.js | PostgreSQL",
        accent: "blue",
        avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=640&q=70",
        workAddress: "Consultoria\nProjetos sob demanda",
        achievementText: "Implementou feature crítica com monitoramento e métricas.",
        isFollowing: false,
    },
    {
        id: "p10",
        name: "Camila Ribeiro",
        role: "Data Analyst",
        bio: "Análises e dashboards com foco em decisões orientadas por dados e métricas.",
        location: "Belo Horizonte, MG",
        followers: 356,
        following: 145,
        skills: ["SQL", "Power BI", "Python"],
        skillsLine: "SQL | Power BI | Python",
        accent: "purple",
        avatarUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=640&q=70",
        workAddress: "Analytics\nRelatórios semanais",
        achievementText: "Publicou dashboard executivo com KPIs unificados.",
        isFollowing: false,
    },
    {
        id: "p11",
        name: "Bruno Azevedo",
        role: "Backend Engineer",
        bio: "Arquitetura de serviços, performance, filas e integrações em ambiente produtivo.",
        location: "Salvador, BA",
        followers: 604,
        following: 302,
        skills: ["NestJS", "Redis", "PostgreSQL"],
        skillsLine: "NestJS | Redis | PostgreSQL",
        accent: "green",
        avatarUrl: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=640&q=70",
        workAddress: "Backend Team\nObservabilidade e SLAs",
        achievementText: "Reduziu latência média em 28% com otimizações de cache.",
        isFollowing: true,
    },
    {
        id: "p12",
        name: "Letícia Souza",
        role: "Frontend Engineer",
        bio: "Componentização, acessibilidade, design tokens e interfaces de alta fidelidade.",
        location: "Florianópolis, SC",
        followers: 295,
        following: 321,
        skills: ["TypeScript", "Next.js", "A11y"],
        skillsLine: "TypeScript | Next.js | A11y",
        accent: "blue",
        avatarUrl: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=640&q=70",
        workAddress: "Equipe Web\nEntrega contínua",
        achievementText: "Padronizou componentes com foco em acessibilidade.",
        isFollowing: false,
    },
];

/* ==========
  Elementos
========== */
const gridEl = document.getElementById("profilesGrid");

const sidebarEl = document.getElementById("sidebar");
const backdropEl = document.getElementById("backdrop");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");

const sidebarAvatar = document.getElementById("sidebarAvatar");
const sidebarName = document.getElementById("sidebarName");
const sidebarCounts = document.getElementById("sidebarCounts");
const sidebarRole = document.getElementById("sidebarRole");
const sidebarBio = document.getElementById("sidebarBio");
const sidebarLocation = document.getElementById("sidebarLocation");
const sidebarWorkAddress = document.getElementById("sidebarWorkAddress");
const sidebarAchievementText = document.getElementById("sidebarAchievementText");

const avatarWrap = document.getElementById("avatarWrap");
const editAvatarBtn = document.getElementById("editAvatarBtn");
const avatarFileInput = document.getElementById("avatarFileInput");

const themeToggleBtn = document.getElementById("themeToggleBtn");

/* ==========
  Utilidades
========== */
function accentToCssVar(accent) {
    if (accent === "green") return "var(--accent-green)";
    if (accent === "blue") return "var(--accent-blue)";
    return "var(--accent-purple)";
}

function isMobile() {
    return window.matchMedia("(max-width: 720px)").matches;
}

function setTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
}

/* ==========
  Render grid
========== */
function renderGrid() {
    gridEl.innerHTML = "";

    state.profiles.forEach((p) => {
        const card = document.createElement("article");
        card.className = "profileCard" + (p.id === state.selectedId ? " is-active" : "");
        card.setAttribute("data-id", p.id);

        const stroke = document.createElement("div");
        stroke.className = "cardStroke";
        stroke.style.background = accentToCssVar(p.accent);

        const inner = document.createElement("div");
        inner.className = "cardInner";

        const img = document.createElement("img");
        img.className = "cardImg";
        img.alt = `Avatar de ${p.name}`;
        img.src = p.avatarUrl;

        const overlay = document.createElement("div");
        overlay.className = "cardOverlay";

        const name = document.createElement("div");
        name.className = "cardName";
        name.innerHTML = `
  <span>${escapeHtml(p.name)}</span>
  <span class="verifiedBadge" aria-label="Perfil verificado" title="Verificado">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.7 2.1 2.7.3 1.1 2.5 2.4 1.2-.7 2.7 1.6 2.2-1.6 2.2.7 2.7-2.4 1.2-1.1 2.5-2.7.3L12 22l-1.7-2.1-2.7-.3-1.1-2.5-2.4-1.2.7-2.7L3.2 12l1.6-2.2-.7-2.7 2.4-1.2 1.1-2.5 2.7-.3L12 2z"
            fill="currentColor"/>
      <path d="M9.6 12.2l1.7 1.7 3.9-4"
            fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
`;


        const role = document.createElement("div");
        role.className = "cardRole";
        role.textContent = p.role.split("•")[0].trim();

        const skills = document.createElement("div");
        skills.className = "cardSkills";
        skills.textContent = p.skillsLine;

        const followBtn = document.createElement("button");
        followBtn.className = "followBtn" + (p.isFollowing ? " is-following" : "");
        followBtn.type = "button";
        followBtn.textContent = p.isFollowing ? "Unfollow" : "Follow +";
        followBtn.addEventListener("click", (ev) => {
            ev.stopPropagation();
            toggleFollow(p.id);
        });

        overlay.appendChild(name);
        overlay.appendChild(role);
        overlay.appendChild(skills);

        inner.appendChild(img);
        inner.appendChild(overlay);
        inner.appendChild(followBtn);

        stroke.appendChild(inner);
        card.appendChild(stroke);

        card.addEventListener("click", () => selectProfile(p.id));

        gridEl.appendChild(card);
    });
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (m) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[m]));
}

/* ==========
  Sidebar
========== */
function renderSidebar() {
    const p = state.profiles.find(x => x.id === state.selectedId);
    if (!p) return;

    sidebarAvatar.src = p.avatarUrl;
    sidebarName.textContent = p.name;
    sidebarCounts.textContent = `${p.followers} seguidores • ${p.following} seguindo`;
    sidebarRole.textContent = p.role;
    sidebarBio.textContent = p.bio;
    sidebarLocation.textContent = p.location;
    sidebarWorkAddress.textContent = p.workAddress;
    sidebarAchievementText.textContent = p.achievementText;

    /* anel do avatar acompanha accent do perfil */
    avatarWrap.style.borderColor = accentToCssVar(p.accent);

    /* dots: estado ativo */
    document.querySelectorAll(".dot").forEach((d) => {
        d.classList.toggle("is-active", d.getAttribute("data-accent") === p.accent);
    });
}

/* ==========
  Seleção
========== */
function selectProfile(id) {
    state.selectedId = id;
    renderGrid();
    renderSidebar();

    /* No mobile: abrir drawer ao selecionar card */
    if (isMobile()) openSidebar();
}

/* ==========
  Follow/Unfollow
========== */
function toggleFollow(profileId) {
    const p = state.profiles.find(x => x.id === profileId);
    if (!p) return;

    const wasFollowing = p.isFollowing;
    p.isFollowing = !p.isFollowing;

    /* Atualiza contador SOMENTE se o perfil clicado estiver selecionado */
    if (state.selectedId === p.id) {
        p.followers += p.isFollowing ? 1 : -1;
        if (p.followers < 0) p.followers = 0;
    }

    renderGrid();
    renderSidebar();
}

/* ==========
  Troca de cor (3 cores)
========== */
function setAccentForSelected(accent) {
    const p = state.profiles.find(x => x.id === state.selectedId);
    if (!p) return;
    p.accent = accent;
    renderGrid();
    renderSidebar();
}

/* ==========
  Troca de avatar (FileReader)
========== */
function openFilePicker() {
    avatarFileInput.value = "";
    avatarFileInput.click();
}

avatarFileInput.addEventListener("change", () => {
    const file = avatarFileInput.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        const p = state.profiles.find(x => x.id === state.selectedId);
        if (!p) return;
        p.avatarUrl = String(reader.result);
        renderGrid();
        renderSidebar();
    };
    reader.readAsDataURL(file);
});

/* ==========
  Tema Claro/Escuro
========== */
themeToggleBtn.addEventListener("click", () => {
    setTheme(state.theme === "dark" ? "light" : "dark");
});

/* ==========
  Drawer (mobile)
========== */
function openSidebar() {
    sidebarEl.classList.add("is-open");
    backdropEl.hidden = false;
}
function closeSidebar() {
    sidebarEl.classList.remove("is-open");
    backdropEl.hidden = true;
}

closeSidebarBtn.addEventListener("click", closeSidebar);
backdropEl.addEventListener("click", closeSidebar);

window.addEventListener("resize", () => {
    /* se voltar para desktop, garante sidebar “normal” */
    if (!isMobile()) {
        closeSidebar();
    }
});

/* ==========
  Eventos: dots e lápis
========== */
document.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", () => {
        const accent = dot.getAttribute("data-accent");
        if (!accent) return;
        setAccentForSelected(accent);
    });
});

editAvatarBtn.addEventListener("click", openFilePicker);

/* ==========
  Boot
========== */
function init() {
    state.profiles = seedProfiles.map(p => ({ ...p }));

    /* tema inicial (claro) */
    setTheme("light");

    /* seleciona o primeiro (como no protótipo) */
    state.selectedId = state.profiles[0].id;

    renderGrid();
    renderSidebar();
}

init();
