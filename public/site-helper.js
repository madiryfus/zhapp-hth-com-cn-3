(function() {
    const CONFIG = {
        siteUrl: 'https://zhapp-hth.com.cn',
        keyword: '华体会',
        apiEndpoint: '/api/status'
    };

    const pageTips = [
        { type: 'info', text: '欢迎访问我们的服务门户' },
        { type: 'highlight', text: `关键词【${CONFIG.keyword}】相关功能已上线` },
        { type: 'guide', text: '请使用现代浏览器以获得最佳体验' }
    ];

    const keywordTags = [
        { name: CONFIG.keyword, importance: 'primary' },
        { name: '体育赛事', importance: 'secondary' },
        { name: '实时资讯', importance: 'secondary' },
        { name: '互动社区', importance: 'normal' }
    ];

    function createTipCard(tip) {
        const card = document.createElement('div');
        card.className = `tip-card tip-${tip.type}`;
        card.textContent = tip.text;
        return card;
    }

    function createBadge(tag) {
        const badge = document.createElement('span');
        badge.className = `keyword-badge badge-${tag.importance}`;
        badge.textContent = `#${tag.name}`;
        return badge;
    }

    function renderTipsContainer() {
        const container = document.getElementById('page-tips');
        if (!container) return;
        pageTips.forEach(tip => container.appendChild(createTipCard(tip)));
    }

    function renderBadgesContainer() {
        const container = document.getElementById('keyword-badges');
        if (!container) return;
        keywordTags.forEach(tag => container.appendChild(createBadge(tag)));
    }

    function renderAccessInfo() {
        const infoBox = document.getElementById('access-info');
        if (!infoBox) return;
        infoBox.innerHTML = `<p>当前服务地址：<a href="${CONFIG.siteUrl}" target="_blank" rel="noopener">${CONFIG.siteUrl}</a></p>
                             <p>如需帮助，请参考站内指引或联系客服</p>`;
    }

    function initSiteHelper() {
        renderTipsContainer();
        renderBadgesContainer();
        renderAccessInfo();
        console.log('[SiteHelper] 页面辅助模块已初始化');
    }

    document.addEventListener('DOMContentLoaded', initSiteHelper);
})();