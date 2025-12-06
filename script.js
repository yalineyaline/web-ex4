// 表单验证
function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const phoneReg = /^1[3-9]\d{9}$/;

    if (!name) {
        alert('请输入您的姓名！');
        return false;
    }
    if (!phoneReg.test(phone)) {
        alert('请输入正确的手机号！');
        return false;
    }

    const btn = document.querySelector('.form-btn');
    btn.textContent = '提交成功！';
    btn.style.backgroundColor = '#28a745';

    const tip = document.createElement('p');
    tip.style.color = '#28a745';
    tip.style.marginTop = '1rem';
    tip.style.textAlign = 'center';
    tip.textContent = '感谢您的参与，我们会尽快与您联系！';
    document.querySelector('.wamao-form').appendChild(tip);

    setTimeout(() => {
        document.querySelector('.wamao-form').removeChild(tip);
        btn.textContent = '提交问卷';
        btn.style.backgroundColor = '#8B4513';
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('comment').value = '';
    }, 5000);

    return false;
}

// 视频控制
const video = document.querySelector('video');
if (video) { // 兼容无视频的情况
    video.addEventListener('play', () => {
        console.log('视频开始播放');
        video.style.borderColor = '#28a745';
    });
    video.addEventListener('pause', () => {
        console.log('视频暂停播放');
        video.style.borderColor = '#8B4513';
    });
}

// 滚动监听
const scrollArea = document.querySelector('.scroll-content-area');
scrollArea.addEventListener('scroll', () => {
    const scrollBg = document.querySelector('.scroll-bg');
    scrollBg.style.opacity = 1 - (scrollArea.scrollTop / scrollArea.scrollHeight);
});