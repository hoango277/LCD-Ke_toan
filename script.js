/**
 * Cấu hình dữ liệu giáo viên.
 * key: ID (mã định danh mảng)
 * name: Tên cô xuất hiện ở dropdown
 * title: Tiêu đề in hoa hiển thị ở Trang 4.
 * folder: Tên thư mục chứa ảnh
 * photos: mảng 3 tên file ảnh
 * wish: Lời chúc
 */
const TEACHERS_DATA = [
    {
        id: "1",
        name: "Cô Đặng Thị Việt Đức",
        title: "ĐẶNG THỊ VIỆT ĐỨC - ĐẤNG TỐI CAO",
        folder: "1",
        photos: ["đức1.jpg", "đức2.jpg", "đức3.jpg"],
        wish: "Cô luôn toát lên sự điềm tĩnh và vững vàng. Chính sự bản lĩnh ấy khiến chúng em thêm tin tưởng và yên tâm trong học tập hay rèn luyện. Nhân ngày 8/3, Liên Chi Đoàn kính chúc cô thật nhiều sức khỏe, luôn giữ được nguồn năng lượng tích cực và tiếp tục là điểm tựa tinh thần cho sinh viên trên hành trình trưởng thành.",
        text1: "Sự điềm tĩnh và vững vàng...",
        text2: "...luôn là điểm tựa tinh thần cho chúng em."
    },
    {
        id: "2",
        name: "Cô Lê Thị Ngọc Phương",
        title: "CÔ LÊ THỊ NGỌC PHƯƠNG",
        folder: "2",
        photos: ["phương1.jpg", "phương2.jpg", "phương3.jpg"],
        wish: "Sự nhẹ nhàng nhưng sâu sắc của cô khiến mỗi bài giảng không chỉ đơn thuần là kiến thức mà còn là sự truyền cảm hứng. Nhân ngày 8/3, Liên Chi Đoàn xin chúc cô luôn rạng rỡ, hạnh phúc và giữ mãi nụ cười ấm áp ấy để đồng hành cùng nhiều thế hệ sinh viên hơn nữa.",
        text1: "Nhẹ nhàng nhưng sâu sắc...",
        text2: "...luôn rạng rỡ, hạnh phúc và giữ mãi nụ cười ấm áp."
    },
    {
        id: "3",
        name: "Cô Nguyễn Thị Chinh Lam",
        title: "CÔ NGUYỄN THỊ CHINH LAM",
        folder: "3",
        photos: ["lam1.JPG", "lam2.JPG", "lam3.JPG"],
        wish: "Những giờ học của cô luôn nghiêm túc nhưng đầy nhiệt huyết, giúp chúng em hiểu rằng sự chỉn chu chính là cách thể hiện sự tôn trọng tri thức. Liên Chi Đoàn chúc cô ngày 8/3 luôn mạnh khỏe, giữ vững ngọn lửa đam mê và tiếp tục truyền động lực cho tuổi trẻ bằng chính sự tận tâm của mình.",
        text1: "Nghiêm túc nhưng đầy nhiệt huyết...",
        text2: "...giúp chúng em tôn trọng tri thức."
    },
    {
        id: "4",
        name: "Cô Nguyễn Thị Việt Lê",
        title: "CÔ NGUYỄN THỊ VIỆT LÊ",
        folder: "4",
        photos: ["Lê1.jpg", "Lê2.jpg", "Lê3.jpg"],
        wish: "Cô luôn mang đến cho sinh viên cảm giác gần gũi, thân thiện và sẵn sàng lắng nghe, thấu hiểu. Nhân ngày 8/3, Liên Chi Đoàn xin gửi đến cô những lời chúc tốt đẹp nhất, chúc cô luôn nhiều niềm vui, luôn giữ được nguồn năng lượng tích cực và tiếp tục truyền cảm hứng để sinh viên ngày càng tự tin, vững vàng hơn trên con đường học tập.",
        text1: "Gần gũi, thân thiện và sẵn sàng lắng nghe...",
        text2: "...truyền cảm hứng để sinh viên ngày càng tự tin."
    },
    {
        id: "5",
        name: "Cô Lê Thị Ánh",
        title: "CÔ LÊ THỊ ÁNH",
        folder: "5",
        photos: ["ánh1.jpg", "Ánh2.jpg", "ánh3.jpg"],
        wish: "Nhân ngày 8/3, chúng em xin gửi lời tri ân sâu sắc tới sự tận tụy của cô. Bọn em chúc cô luôn vui vẻ, rạng rỡ và đạt được nhiều thành công rực rỡ trong sự nghiệp, mãi là người thầy tận tâm mà chúng em kính trọng.",
        text1: "Tận tụy và luôn tràn đầy năng lượng...",
        text2: "...mãi là người thầy mà chúng em kính trọng."
    },
    {
        id: "6",
        name: "Cô Nguyễn Thị Vân Anh",
        title: "CÔ NGUYỄN THỊ VÂN ANH",
        folder: "6",
        photos: ["vanh1.jpg", "vanh2.jpg", "vanh3.jpg"],
        wish: "Chúc mừng ngày 8/3 sắp tới gần, chúng em kính chúc cô luôn tươi trẻ, hài hước và tràn đầy năng lượng. Cảm ơn cô đã luôn tạo ra không gian học tập thoải mái, dễ chịu, giúp chúng em tiếp nhận tri thức một cách hạnh phúc nhất. Trên tất cả, chính sự tâm huyết và hết lòng vì sinh viên đã trở thành nguồn động lực lớn lao đối với chúng em.",
        text1: "Tươi trẻ, hài hước và tràn đầy năng lượng...",
        text2: "...giúp chúng em tiếp nhận tri thức một cách hạnh phúc nhất."
    },
    {
        id: "7",
        name: "Cô Trần Thị Thanh Thúy",
        title: "CÔ TRẦN THỊ THANH THÚY",
        folder: "7",
        photos: ["thúy1.JPG", "Thúy2.jpg", "thúy3.jpg"],
        wish: "Ở cô là sự dịu dàng rất riêng, nhưng ẩn sau đó là chiều sâu và sự tận tâm đáng quý. Mỗi lời góp ý của cô đều nhẹ nhàng, khiến chúng em học được nhiều hơn cả những điều ghi trong sách vở. Nhân ngày 8/3, Liên Chi Đoàn xin gửi tới cô lời chúc sức khỏe và thật nhiều niềm vui, thật nhiều năng lượng để tiếp tục viết nên những dấu ấn đẹp trong lòng sinh viên.",
        text1: "Sự dịu dàng rất riêng cùng sự tận tâm đáng quý...",
        text2: "...viết nên những dấu ấn đẹp trong lòng sinh viên."
    },
    {
        id: "8",
        name: "Cô Phạm Thị Thu Phương",
        title: "CÔ PHẠM THỊ THU PHƯƠNG",
        folder: "8",
        photos: ["tphuong1.JPG", "tphuong2.JPG", "tphuong3.JPG"],
        wish: "Cô luôn mang một năng lượng nhiệt huyết nhưng lại toát lên nét hiền hậu và bao dung, khiến chúng em cảm nhận được sự ấm áp trong từng lời nhắc nhở. Nhân ngày 8/3, LCĐ Khoa TCKT1 kính chúc cô luôn rực rỡ nụ cười. Mong cô luôn giữ nét nhẹ nhàng, ân cần và sự nhiệt tình đáng quý, mãi là người thầy đồng hành tin cậy trên con đường chinh phục tri thức của chúng em.",
        text1: "Năng lượng nhiệt huyết cùng vẻ hiền hậu mến thương...",
        text2: "...người thầy đồng hành tin cậy trên con đường chinh phục tri thức."
    },
    {
        id: "9",
        name: "Cô Trần Phương Linh",
        title: "CÔ TRẦN PHƯƠNG LINH",
        folder: "9",
        photos: ["plinh1.JPG", "plinh2.jpg", "plinh3.JPG"],
        wish: "Sự trẻ trung và nguồn năng lượng tích cực mà cô mang đến luôn khiến sinh viên cảm nhận được tinh thần nhiệt huyết. Cô luôn khơi dậy trong sinh viên tinh thần chủ động, giúp chúng em tự tin hơn khi thể hiện quan điểm và chính mình. Nhân ngày Quốc tế Phụ nữ 8/3, Liên Chi Đoàn xin kính chúc cô luôn mạnh khỏe, giữ mãi sự nhiệt huyết và bản lĩnh của mình, để mỗi giờ học đều trở thành nguồn cảm hứng cho tuổi trẻ.",
        text1: "Sự trẻ trung và nguồn năng lượng tích cực...",
        text2: "...khơi dậy trong sinh viên tinh thần chủ động."
    },
    {
        id: "10",
        name: "Cô Phi Hải Yến",
        title: "CÔ PHI HẢI YẾN",
        folder: "10",
        photos: ["yến1.jpg", "Yến2.jpg", "yến3.jpg"],
        wish: "Cô luôn để lại trong chúng em ấn tượng bởi sự năng động và tinh thần trách nhiệm cao. Ở cô là sự cẩn thận trong từng công việc, phong thái nhẹ nhàng, từ tốn trong cách trao đổi và hỗ trợ, khiến chúng em luôn cảm thấy được lắng nghe và tôn trọng. Dù không trực tiếp giảng dạy, cô vẫn là điểm tựa đáng tin cậy và nguồn động viên lớn đối với chúng em.",
        text1: "Năng động và tinh thần trách nhiệm cao...",
        text2: "...điểm tựa đáng tin cậy và nguồn động viên vô giá."
    },
    {
        id: "11",
        name: "Cô Nguyễn Hương Anh",
        title: "CÔ NGUYỄN HƯƠNG ANH",
        folder: "11",
        photos: ["hanh1.jpg", "HAnh2.jpg", "hanh3.jpg"],
        wish: "Nhân ngày Quốc tế Phụ nữ 8/3, chúng em xin gửi tới cô – người sở hữu tâm hồn trẻ trung và rạng rỡ nhất của Khoa Tài chính - Kế toán 1 – những lời chúc nồng thắm nhất. Cảm ơn cô đã luôn dành sự tinh tế để thấu hiểu và chăm sóc sinh viên bằng một tấm lòng ấm áp cùng sự gần gũi vô cùng đáng quý. Kính chúc cô mãi giữ vững phong thái rạng ngời, hiện đại và gặt hái được thật nhiều thành công rực rỡ trên hành trình gieo mầm tri thức của mình.",
        text1: "Tâm hồn trẻ trung và rạng rỡ...",
        text2: "...giữ vững phong thái hiện đại và gặt hái nhiều thành công."
    },
    {
        id: "12",
        name: "Cô Đào Thu Hà",
        title: "CÔ ĐÀO THU HÀ",
        folder: "12",
        photos: ["hà1.jpg", "hà2.png", "hà3.jpg"],
        wish: "Nhân ngày tôn vinh phái đẹp, chúng em kính chúc cô luôn rạng rỡ, xinh đẹp và tràn đầy nhiệt huyết. Mong cô mãi là đóa hoa tươi thắm nhất, luôn mang đến sự ấm áp và lòng yêu nghề sâu sắc tới đại gia đình khoa mình.",
        text1: "Luôn rạng rỡ, xinh đẹp và tràn đầy nhiệt huyết...",
        text2: "...mãi là đóa hoa tươi thắm mang đến sự ấm áp."
    },
    {
        id: "13",
        name: "Cô Phạm Vũ Hà Thanh",
        title: "CÔ PHẠM VŨ HÀ THANH",
        folder: "13",
        photos: ["thanh1.jpg", "thanh2.jpg", "thanh3.jpg"],
        wish: "Nhân ngày Quốc tế Phụ nữ 8/3, chúng em xin gửi tới cô lời tri ân chân thành nhất. Cảm ơn cô đã luôn sưởi ấm giảng đường bằng nụ cười tỏa nắng và truyền cho chúng em ngọn lửa nhiệt huyết tràn đầy sức sống qua từng bài giảng. Kính chúc cô một ngày lễ thật trọn vẹn, luôn giữ vững phong thái kiêu sa, hạnh phúc viên mãn và mãi là nguồn cảm hứng bất tận dẫn lối chúng em trên hành trình chinh phục tri thức.",
        text1: "Nụ cười tỏa nắng trên bục giảng...",
        text2: "...truyền ngọn lửa nhiệt huyết tràn đầy sức sống."
    },
    {
        id: "14",
        name: "Cô Đỗ Huyền Vy",
        title: "CÔ ĐỖ HUYỀN VY",
        folder: "14",
        photos: ["vy1.png", "vy2.png", "vy3.png"],
        wish: "Nhân ngày Quốc tế Phụ nữ 8/3, chúng em xin gửi tới cô Vy – đại diện cho thế hệ giảng viên trẻ đầy năng động và nhiệt huyết của Khoa Tài chính - Kế toán 1 – lời chúc mừng rực rỡ nhất. Kính chúc cô mãi giữ trọn nét tươi trẻ, nụ cười luôn tỏa nắng trên môi và gặt hái được thật nhiều thành công “vượt chỉ tiêu” trong sự nghiệp gieo mầm tri thức suốt năm 2026 đầy hứa hẹn này.",
        text1: "Đại diện thế hệ trẻ năng động và nhiệt huyết...",
        text2: "...gặt hái nhiều thành công vượt chỉ tiêu năm nay."
    }
];

// STATE MANAGEMENT
let state = {
    currentPage: 1,
    selectedImage: null, // DataURL of uploaded image
    selectedTeacherId: null, // ID of selected teacher
    avatarTransform: {
        x: 0,
        y: 0,
        scale: 1
    }
};

// DOM ELEMENTS
const pages = {
    1: document.getElementById('page-1'),
    2: document.getElementById('page-2'),
    3: document.getElementById('page-3'),
    4: document.getElementById('page-4'),
    5: document.getElementById('page-5'),
};

/**
 * INIT APP
 */
document.addEventListener('DOMContentLoaded', () => {
    initLyricsAnimation();
    initScrollEvent();
    populateTeacherSelect();
    initFormInteractions();
    initButtonInteractions();
    initAvatarControls();
});

// Chuyển trang (có effect fadeIn)
function goToPage(pageNum) {
    // Hide all
    Object.values(pages).forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('flex');
    });

    // Show target
    const targetPage = pages[pageNum];
    targetPage.classList.remove('hidden');
    targetPage.classList.add('flex');

    state.currentPage = pageNum;

    // Trigger page specific animations
    if (pageNum === 2) {
        setTimeout(() => {
            document.getElementById('welcome-card').classList.add('fade-in-up');
        }, 100);
    } else if (pageNum === 3) {
        setTimeout(() => {
            document.getElementById('form-card').classList.add('fade-in-up');
        }, 100);
    } else if (pageNum === 4) {
        renderGalleryPage();
        setTimeout(() => {
            document.getElementById('gallery-container').classList.add('fade-in-right');
        }, 100);
    } else if (pageNum === 5) {
        renderCardPage();
        setTimeout(() => {
            document.getElementById('card-actions').classList.add('fade-in-up');
        }, 500);
    }
}

// ------ ANIMATION LYRICS TRANG 1 -------
function initLyricsAnimation() {
    const textLines = [
        "Liên chi Đoàn Khoa Tài chính Kế toán 1",
        "không chỉ là nơi hội tụ của những con số,",
        "mà còn là nơi gắn kết những trái tim nhiệt huyết.",
        "Nhân ngày 8/3, chúng em muốn gửi gắm một chút bất ngờ nhỏ",
        "thay lời tri ân sâu sắc nhất tới những 'người lái đò' tận tụy của khoa chúng ta."
    ];

    const lyricsContent = document.getElementById('lyrics-content');
    lyricsContent.innerHTML = ''; // Clear old content
    let currentLineIdx = 0;

    // Create elements for all lines first
    const lineElements = textLines.map(line => {
        const p = document.createElement('p');
        p.className = 'mb-1 md:mb-2 opacity-100 min-h-[30px] md:min-h-[40px]';
        lyricsContent.appendChild(p);
        return p;
    });

    const scrollInstruction = document.getElementById('scroll-instruction');

    function typeWriter(text, element, i, callback) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(text, element, i + 1, callback), 50); // Speed of typing
        } else if (callback) {
            setTimeout(callback, 500); // Pause at end of line
        }
    }

    function showLine() {
        if (currentLineIdx < textLines.length) {
            const currentLineEl = lineElements[currentLineIdx];
            const textToType = textLines[currentLineIdx];

            // Cuộn lyrics block lên từ từ để dồn chữ
            lyricsContent.style.transform = `translateY(0)`; // Move up container

            // Xóa nội dung trước khi type
            currentLineEl.innerHTML = '';

            // Start typing
            typeWriter(textToType, currentLineEl, 0, () => {
                currentLineIdx++;
                showLine();
            });

        } else {
            // Hiển thị nút trượt xuống
            scrollInstruction.classList.remove('opacity-0');
        }
    }

    // Đợi 1 chút sau khi load trang mới bắt đầu
    setTimeout(() => {
        showLine();
    }, 1000);
}
let scrollTimeout;
function initScrollEvent() {
    let touchStartY = 0;

    const goNextOnScroll = () => {
        if (state.currentPage === 1) {
            goToPage(2);
        }
    };

    // For mouse wheel
    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) goNextOnScroll();
    });

    // For touch swipe
    window.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    });

    window.addEventListener('touchend', e => {
        let touchEndY = e.changedTouches[0].screenY;
        if (touchStartY - touchEndY > 50) { // Swiped up (scroll down)
            goNextOnScroll();
        }
    });

    // Handle clicks instead of scrolling just in case
    document.getElementById('scroll-instruction').addEventListener('click', () => {
        if (state.currentPage === 1) goToPage(2);
    })
}

// ------ PAGE 3: FORM -------
function populateTeacherSelect() {
    const select = document.getElementById('teacher-select');
    TEACHERS_DATA.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.name;
        select.appendChild(opt);
    });
}

function initFormInteractions() {
    const imageUpload = document.getElementById('image-upload');
    const select = document.getElementById('teacher-select');
    const btnTo4 = document.getElementById('btn-to-page4');
    const avatarImg = document.getElementById('avatar-img');
    const avatarPreviewIcon = document.querySelector('#avatar-preview i');
    const errText = document.getElementById('form-error');

    // Handle image upload with FileReader
    imageUpload.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                state.selectedImage = e.target.result;
                avatarImg.src = state.selectedImage;
                avatarImg.classList.remove('hidden');
                avatarPreviewIcon.classList.add('hidden');
                validateForm();
            };
            reader.readAsDataURL(file);
        }
    });

    select.addEventListener('change', function (e) {
        state.selectedTeacherId = e.target.value;
        validateForm();
    });

    function validateForm() {
        if (state.selectedImage && state.selectedTeacherId) {
            btnTo4.disabled = false;
            errText.classList.add('hidden');
        } else {
            btnTo4.disabled = true;
        }
    }

    btnTo4.addEventListener('click', () => {
        if (!btnTo4.disabled) {
            goToPage(4);
        } else {
            errText.classList.remove('hidden');
        }
    });
}

// ------ PAGE 4: GALLERY RENDERING -------
function renderGalleryPage() {
    const teacher = TEACHERS_DATA.find(t => t.id === state.selectedTeacherId);
    if (!teacher) return;

    // Reset animation logic
    const container = document.getElementById('gallery-container');
    container.classList.remove('fade-in-right');

    const title = document.getElementById('gallery-title');
    title.textContent = teacher.title;

    // Paths to images logic - we use the generic folder + filename structure based on current directory
    const encodePath = (folder, file) => `photo/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

    const img1 = document.getElementById('img-1');
    const img2 = document.getElementById('img-2');
    const img3 = document.getElementById('img-3');

    // Set paths
    if (teacher.photos[0]) img1.src = encodePath(teacher.folder, teacher.photos[0]);
    if (teacher.photos[1]) img2.src = encodePath(teacher.folder, teacher.photos[1]);
    if (teacher.photos[2]) img3.src = encodePath(teacher.folder, teacher.photos[2]);

    document.getElementById('text-1').textContent = `"${teacher.text1}"`;
    document.getElementById('text-2').textContent = `"${teacher.text2}"`;
}

// ------ PAGE 5: CARD SETTING & ACTIONS -------
function renderCardPage() {
    const teacher = TEACHERS_DATA.find(t => t.id === state.selectedTeacherId);
    if (!teacher) return;

    // Fill Image
    const avatarImg = document.getElementById('card-avatar');
    avatarImg.src = state.selectedImage;

    // Reset Avatar Transform state
    state.avatarTransform = { x: 0, y: 0, scale: 1 };
    document.getElementById('zoom-slider').value = 1;
    applyAvatarTransform();

    // Fill Name
    document.getElementById('card-name').textContent = teacher.name;
    // Fill Wish
    document.getElementById('card-wish').textContent = `"${teacher.wish}"`;
}

// ------ AVATAR DRAG & ZOOM CONTROLS -------
function applyAvatarTransform() {
    const avatarImg = document.getElementById('card-avatar');
    // Using translate3d for better performance
    avatarImg.style.transform = `translate3d(${state.avatarTransform.x}px, ${state.avatarTransform.y}px, 0) scale(${state.avatarTransform.scale})`;
}

function initAvatarControls() {
    const container = document.getElementById('avatar-container');
    const slider = document.getElementById('zoom-slider');

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialTx = 0;
    let initialTy = 0;

    // Handle Zoom
    slider.addEventListener('input', (e) => {
        state.avatarTransform.scale = parseFloat(e.target.value);
        applyAvatarTransform();
    });

    // Pointer Events for Drag (Support both Mouse & Touch via Pointer API)
    container.addEventListener('pointerdown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialTx = state.avatarTransform.x;
        initialTy = state.avatarTransform.y;
        container.setPointerCapture(e.pointerId);
        container.style.cursor = 'grabbing';
        e.preventDefault();
    });

    container.addEventListener('pointermove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        state.avatarTransform.x = initialTx + deltaX;
        state.avatarTransform.y = initialTy + deltaY;

        applyAvatarTransform();
    });

    const stopDrag = (e) => {
        isDragging = false;
        container.style.cursor = 'move';
        if (e.pointerId) container.releasePointerCapture(e.pointerId);
    };

    container.addEventListener('pointerup', stopDrag);
    container.addEventListener('pointercancel', stopDrag);
}

function initButtonInteractions() {
    // Page 2 -> 3
    document.getElementById('btn-to-page3').addEventListener('click', () => goToPage(3));

    // Page 4 -> 5
    document.getElementById('btn-to-page5').addEventListener('click', () => goToPage(5));

    // Page 5: Quick Edit Image
    document.getElementById('edit-image-upload').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                state.selectedImage = event.target.result;

                // Update Image instantly
                const avatarImg = document.getElementById('card-avatar');
                avatarImg.src = state.selectedImage;

                // Reset Zoom & Drag
                state.avatarTransform = { x: 0, y: 0, scale: 1 };
                document.getElementById('zoom-slider').value = 1;
                applyAvatarTransform();
            };
            reader.readAsDataURL(file);
        }
    });

    // Page 5: Download
    document.getElementById('btn-download').addEventListener('click', () => {
        const cardArea = document.getElementById('greeting-card');

        // Hide slider and hints temporarily for a clean capture
        const zoomControls = cardArea.querySelectorAll('.fa-magnifying-glass-minus, .fa-magnifying-glass-plus, input[type="range"], span.italic');
        zoomControls.forEach(el => el.style.opacity = '0');

        html2canvas(cardArea, {
            backgroundColor: null,
            scale: 2, // higher res
            useCORS: true,
            logging: false,
        }).then(canvas => {
            // Restore visibility
            zoomControls.forEach(el => el.style.opacity = '1');

            // Convert and download
            const image = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.download = `Thiep_8_3_${TEACHERS_DATA.find(t => t.id === state.selectedTeacherId)?.name || 'KhoaTCKT'}.png`;
            link.href = image;
            link.click();

            showToast();
        });
    });
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('-translate-y-full', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('-translate-y-full', 'opacity-0');
    }, 3000);
}
