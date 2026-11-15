(() => {
  const root = document.documentElement;
  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const themeButton = document.querySelector("[data-theme-control]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menuPanel = document.querySelector("[data-menu-panel]");
  const dialog = document.querySelector("[data-image-dialog]");
  const dialogImageFrame = document.querySelector("[data-dialog-image-frame]");
  const dialogCaption = document.querySelector("[data-dialog-caption]");

  const copy = {
    id: {
      homeLabel: "Tyopoetra — beranda",
      navLabel: "Navigasi utama",
      navAbout: "Tentang",
      navExperience: "Pengalaman",
      navExpertise: "Keahlian",
      navCertificates: "Sertifikat",
      navContact: "Kontak",
      edition: "PORTOFOLIO PERSONAL <i>·</i> 2026",
      languageLabel: "Pilih bahasa",
      menuOpen: "Buka menu",
      menuClose: "Tutup menu",
      themeSetting: "Tema",
      themeLight: "Ganti ke mode terang",
      themeDark: "Ganti ke mode gelap",
      fieldLabel: "FOOD &amp; BEVERAGE <b>·</b> DAPUR",
      headline: "Cooker Profesional <span>/</span> Kitchen Operations",
      intro: "Berpengalaman dalam persiapan makanan dan operasional dapur, dengan perhatian pada kebersihan serta konsistensi kerja. Latar SMK Kelistrikan dan pembelajaran Akuntansi menjadi bagian dari perjalanan saya.",
      skillsLabel: "Bidang kompetensi",
      visualLabel: "Foto profil dan sertifikat",
      skillPrep: "Food Preparation",
      skillKitchen: "Kitchen Operations",
      skillHygiene: "Food Hygiene &amp; Sanitation",
      skillTeamwork: "Teamwork",
      whatsapp: "Hubungi via WhatsApp",
      cvButton: "Lihat CV",
      email: "Email",
      educationLabel: "LATAR PENDIDIKAN",
      vocational: "SMK Tunas Harapan",
      electrical: "Kelistrikan · 2019—2022",
      accounting: "Akuntansi · 4 semester, belum selesai",
      portraitLabel: "POTRET",
      portraitIndex: "PROFIL",
      portraitPending: "Foto asli akan ditambahkan",
      profileAlt: "Foto profil Tyopoetra",
      certHeading: "SERTIFIKASI",
      scanPending: "SCAN ASLI<br>BELUM TERSEDIA",
      pdamTitle: "Praktik Kerja Lapangan <i>PDAM</i>",
      electricalTitle: "Kompetensi Instalasi <i>Kelistrikan</i>",
      officeCertificate: "Uji Kompetensi Microsoft Office · Word, PowerPoint, Excel",
      pdamAlt: "Sertifikat Praktik Kerja Lapangan PDAM",
      electricalAlt: "Sertifikat Kompetensi Instalasi Penerangan 1 Fasa dan Instalasi Kelistrikan",
      pdamDialogLabel: "Sertifikat Praktik Kerja Lapangan — PDAM",
      electricalDialogLabel: "Sertifikat Kompetensi Instalasi Kelistrikan",
      experienceLabel: "Ringkasan pengalaman kerja",
      experienceTitle: "PENGALAMAN",
      roleCooker: "Cooker · 2025—sekarang",
      roleOperations: "Staff operasional · sekitar 1 tahun",
      roleIntern: "Magang · 6 bulan",
      footer: "Dibuat dengan ketelitian.",
      dialogLabel: "Pratinjau sertifikat",
      closeLabel: "Tutup pratinjau",
      aboutRail: "TENTANG SAYA",
      aboutTitle: "Belajar dari setiap<br><em>ruang kerja.</em>",
      aboutCopy: "Perjalanan saya mencakup pendidikan Kelistrikan, pembelajaran Akuntansi, serta pengalaman kerja di bidang operasional dan dapur. Saya terbiasa beradaptasi, bekerja sama, dan menjalankan tanggung jawab dengan disiplin.",
      valueAdapt: "Adaptif",
      valueTeam: "Kerja sama",
      valueDiscipline: "Disiplin",
      valueCare: "Tanggung jawab",
      experienceRail: "PENGALAMAN KERJA",
      experienceHeading: "Pengalaman",
      experienceLead: "Tiga pengalaman kerja dengan pembelajaran yang berbeda.",
      periodCurrent: "AWAL 2025 — SEKARANG",
      periodOneYear: "KURANG LEBIH 1 TAHUN",
      periodSixMonths: "6 BULAN",
      cookTask1: "Melaksanakan persiapan dan pengolahan makanan sesuai prosedur kerja.",
      cookTask2: "Menjaga kualitas, konsistensi masakan, serta kebersihan area dapur.",
      cookTask3: "Bekerja sama dengan tim dapur dalam kegiatan operasional.",
      opsTask1: "Menjalankan tugas operasional sesuai tanggung jawab.",
      opsTask2: "Menjaga kedisiplinan dan kualitas pekerjaan serta berkoordinasi dengan rekan kerja.",
      internTask1: "Mempelajari sistem dan prosedur operasional di lingkungan instansi.",
      internTask2: "Mengembangkan kedisiplinan, tanggung jawab, dan kemampuan bekerja sama.",
      expertiseRail: "KEAHLIAN &amp; PENDIDIKAN",
      expertiseHeading: "Bekal kerja &amp; pembelajaran",
      skillsHeading: "Keahlian",
      kitchenSkills: "OPERASIONAL DAPUR",
      workSkills: "CARA BEKERJA",
      supportSkills: "PENGETAHUAN PENDUKUNG",
      teamwork: "Kerja sama tim",
      timeManagement: "Manajemen waktu",
      problemSolving: "Pemecahan masalah",
      adaptability: "Adaptabilitas",
      communication: "Komunikasi",
      discipline: "Disiplin &amp; tanggung jawab",
      electricalBasic: "Dasar kelistrikan",
      plcBasic: "Dasar pengoperasian Panel PLC",
      basicAccounting: "Dasar akuntansi",
      educationHeading: "Pendidikan",
      fourSemesters: "4 SEMESTER",
      accountingStudy: "Pembelajaran online · Akuntansi · belum selesai",
      electricalStudy: "Jurusan Kelistrikan",
      completed2016: "LULUS 2016",
      organizationLabel: "KEGIATAN ORGANISASI",
      organizationCopy: "Anggota OSIS · Pasukan Khusus Perkemahan",
      certificateRail: "DOKUMEN KOMPETENSI",
      certificateHeading: "Sertifikat",
      certificateLead: "Bukti pelatihan dan kompetensi yang tercatat.",
      electricalCertificate: "Sertifikat Kompetensi Instalasi Penerangan 1 Fasa &amp; Kelistrikan",
      contactKicker: "TERHUBUNG",
      contactHeading: "Mari berbincang.",
      contactCopy: "Untuk pertanyaan atau percakapan profesional, silakan hubungi saya melalui kanal berikut."
    },
    en: {
      homeLabel: "Tyopoetra — home",
      navLabel: "Main navigation",
      navAbout: "About",
      navExperience: "Experience",
      navExpertise: "Skills & Education",
      navCertificates: "Certificates",
      navContact: "Contact",
      edition: "PERSONAL PORTFOLIO <i>·</i> 2026",
      languageLabel: "Choose language",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      themeSetting: "Theme",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
      fieldLabel: "FOOD &amp; BEVERAGE <b>·</b> KITCHEN",
      headline: "Professional Cooker <span>/</span> Kitchen Operations",
      intro: "Experienced in food preparation and kitchen operations, with care for hygiene and consistent work. My vocational studies in electrical engineering and four semesters of Accounting study are part of my journey.",
      skillsLabel: "Areas of competence",
      visualLabel: "Profile photo and certificates",
      skillPrep: "Food Preparation",
      skillKitchen: "Kitchen Operations",
      skillHygiene: "Food Hygiene &amp; Sanitation",
      skillTeamwork: "Teamwork",
      whatsapp: "Contact me on WhatsApp",
      cvButton: "View CV",
      email: "Email",
      educationLabel: "EDUCATION",
      vocational: "Tunas Harapan Vocational School",
      electrical: "Electrical Studies · 2019—2022",
      accounting: "Accounting · 4 semesters, not completed",
      portraitLabel: "PORTRAIT",
      portraitIndex: "PROFILE",
      portraitPending: "Original photo to be added",
      profileAlt: "Tyopoetra's profile photo",
      certHeading: "CERTIFICATES",
      scanPending: "ORIGINAL<br>SCAN PENDING",
      pdamTitle: "Internship <i>PDAM</i>",
      electricalTitle: "Electrical Installation <i>Competency</i>",
      officeCertificate: "Microsoft Office Competency Test · Word, PowerPoint, Excel",
      pdamAlt: "PDAM internship certificate",
      electricalAlt: "Single-Phase Lighting and Electrical Installation Competency Certificate",
      pdamDialogLabel: "Internship Certificate — PDAM",
      electricalDialogLabel: "Electrical Installation Competency Certificate",
      experienceLabel: "Work experience summary",
      experienceTitle: "EXPERIENCE",
      roleCooker: "Cooker · 2025—present",
      roleOperations: "Operations staff · about 1 year",
      roleIntern: "Internship · 6 months",
      footer: "Made with care.",
      dialogLabel: "Certificate preview",
      closeLabel: "Close preview",
      aboutRail: "ABOUT ME",
      aboutTitle: "Learning from every<br><em>kind of work.</em>",
      aboutCopy: "My path includes vocational studies in electrical engineering, Accounting studies, and work experience in operations and kitchen roles. I bring adaptability, teamwork, and a disciplined approach to my responsibilities.",
      valueAdapt: "Adaptability",
      valueTeam: "Teamwork",
      valueDiscipline: "Discipline",
      valueCare: "Responsibility",
      experienceRail: "WORK EXPERIENCE",
      experienceHeading: "Experience",
      experienceLead: "Three work experiences, each with its own lessons.",
      periodCurrent: "EARLY 2025 — PRESENT",
      periodOneYear: "ABOUT 1 YEAR",
      periodSixMonths: "6 MONTHS",
      cookTask1: "Prepare and cook food according to work procedures.",
      cookTask2: "Maintain food quality and consistency, as well as kitchen cleanliness.",
      cookTask3: "Work with the kitchen team on day-to-day operations.",
      opsTask1: "Carry out operational duties according to assigned responsibilities.",
      opsTask2: "Maintain work discipline and quality while coordinating with colleagues.",
      internTask1: "Learned operational systems and procedures in an institutional workplace.",
      internTask2: "Developed discipline, responsibility, and the ability to work with others.",
      expertiseRail: "SKILLS &amp; EDUCATION",
      expertiseHeading: "Skills for the work ahead",
      skillsHeading: "Skills",
      kitchenSkills: "KITCHEN OPERATIONS",
      workSkills: "WORKING STYLE",
      supportSkills: "ADDITIONAL KNOWLEDGE",
      teamwork: "Teamwork",
      timeManagement: "Time Management",
      problemSolving: "Problem Solving",
      adaptability: "Adaptability",
      communication: "Communication",
      discipline: "Discipline &amp; Responsibility",
      electricalBasic: "Electrical Basics",
      plcBasic: "Basic PLC Panel Operation",
      basicAccounting: "Basic Accounting",
      educationHeading: "Education",
      fourSemesters: "4 SEMESTERS",
      accountingStudy: "Online study · Accounting · not completed",
      electricalStudy: "Electrical studies",
      completed2016: "COMPLETED 2016",
      organizationLabel: "ORGANIZATIONAL ACTIVITIES",
      organizationCopy: "Student council member · Special Camping Unit",
      certificateRail: "COMPETENCY RECORDS",
      certificateHeading: "Certificates",
      certificateLead: "Training and competency records on file.",
      electricalCertificate: "Electrical Installation Competency Certificate · Single-Phase Lighting",
      contactKicker: "GET IN TOUCH",
      contactHeading: "Let’s talk.",
      contactCopy: "For questions or professional conversations, reach me through the channels below."
    }
  };

  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* Storage may be unavailable. */ } }
  };
  let selectedLanguage = "id";

  function setTheme(theme) {
    const value = theme === "light" ? "light" : "dark";
    root.dataset.theme = value;
    const label = copy[selectedLanguage][value === "dark" ? "themeLight" : "themeDark"];
    themeButton.setAttribute("aria-label", label);
    themeButton.title = label;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", value === "dark" ? "#111110" : "#f1f0ec");
    storage.set("tyopoetra-theme", value);
  }

  function setLanguage(language) {
    selectedLanguage = copy[language] ? language : "id";
    root.lang = selectedLanguage;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const translation = copy[selectedLanguage][element.dataset.i18n];
      if (translation !== undefined) element.innerHTML = translation;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const translation = copy[selectedLanguage][element.dataset.i18nAria];
      if (translation !== undefined) element.setAttribute("aria-label", translation.replace(/<[^>]+>/g, ""));
    });
    if (menuToggle) menuToggle.setAttribute("aria-label", copy[selectedLanguage][menuToggle.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen"]);
    languageButtons.forEach((button) => {
      const active = button.dataset.language === selectedLanguage;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const pageTitle = selectedLanguage === "en" ? "Tyopoetra — Cooker & Kitchen Operations" : "Tyopoetra — Cooker Profesional & Operasional Dapur";
    document.title = pageTitle;
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", pageTitle);
    const description = selectedLanguage === "en"
      ? "Tyopoetra — professional cooker with experience in kitchen operations and food preparation."
      : "Tyopoetra — cooker profesional dengan pengalaman di operasional dapur dan persiapan makanan.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelectorAll("[data-image-frame] img").forEach((image) => {
      const frame = image.closest("[data-image-frame]");
      const key = frame?.dataset.imageAltKey;
      if (key) image.alt = copy[selectedLanguage][key];
      const captionKey = frame?.dataset.dialogLabelKey;
      if (captionKey && frame.getAttribute("role") === "button") {
        const label = copy[selectedLanguage][captionKey] || image.alt;
        frame.setAttribute("aria-label", `${label} — ${selectedLanguage === "en" ? "open preview" : "buka pratinjau"}`);
      }
    });
    if (dialog?.open && dialog.dataset.captionKey) dialogCaption.textContent = copy[selectedLanguage][dialog.dataset.captionKey];
    setTheme(root.dataset.theme);
    storage.set("tyopoetra-language", selectedLanguage);
  }

  function openCertificate(frame, image) {
    if (!dialog || typeof dialog.showModal !== "function") return;
    const preview = document.createElement("img");
    preview.src = image.currentSrc || image.src;
    preview.alt = image.alt;
    dialogImageFrame.replaceChildren(preview);
    const captionKey = frame.dataset.dialogLabelKey;
    if (captionKey) dialog.dataset.captionKey = captionKey;
    dialogCaption.textContent = captionKey ? copy[selectedLanguage][captionKey] : image.alt;
    dialog.showModal();
  }

  languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
  themeButton.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
  function setMenuOpen(open) {
    if (!menuToggle || !menuPanel) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", copy[selectedLanguage][open ? "menuClose" : "menuOpen"]);
    menuPanel.classList.toggle("is-open", open);
  }
  menuToggle?.addEventListener("click", () => setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true"));
  menuPanel?.querySelectorAll(".primary-nav a").forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
  document.querySelector("[data-dialog-close]")?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener("close", () => dialogImageFrame.replaceChildren());

  document.querySelectorAll("[data-image-frame]").forEach((frame) => {
    const source = frame.dataset.imageSrc;
    const loader = new Image();
    loader.onload = () => {
      const image = document.createElement("img");
      image.src = source;
      image.alt = copy[selectedLanguage][frame.dataset.imageAltKey] || "";
      image.className = frame.classList.contains("portrait-stage") ? "portrait-photo" : "certificate-photo";
      image.loading = "lazy";
      frame.replaceChildren(image);
      frame.classList.add("has-photo");
      if (!frame.classList.contains("portrait-stage")) {
        const label = copy[selectedLanguage][frame.dataset.dialogLabelKey] || image.alt;
        frame.setAttribute("role", "button");
        frame.setAttribute("tabindex", "0");
        frame.setAttribute("aria-label", `${label} — ${selectedLanguage === "en" ? "open preview" : "buka pratinjau"}`);
        frame.addEventListener("click", () => openCertificate(frame, image));
        frame.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openCertificate(frame, image);
          }
        });
      }
    };
    loader.src = source;
  });

  setLanguage(storage.get("tyopoetra-language") || "id");
  setTheme(storage.get("tyopoetra-theme") || "dark");
})();
