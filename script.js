// DJS_YT Portfolio JavaScript - Domain Expansion Theme

// Domain Expansion Data
const domainData = {
    months: {
        'JAN': 'DEATHLY', 'FEB': 'FROZEN', 'MAR': 'HEAVENLY', 'APR': 'EVIL',
        'MAY': 'GOLDEN', 'JUN': 'FORBIDDEN', 'JUL': 'SILVER', 'AUG': 'FROSTID',
        'SEP': 'RUSTED', 'OCT': 'SECRET', 'NOV': 'BLESSED', 'DEC': 'ENDLESS'
    },
    days: {
        '01': 'COFFIN', '02': 'BELL', '03': 'SHRINE', '04': 'PARADE',
        '05': 'SHORE', '06': 'CITY', '07': 'DUNGEON', '08': 'ALTAR',
        '09': 'CHAIN', '10': 'VOLCANO', '11': 'CAGE', '12': 'CASTLE',
        '13': 'SWORD', '14': 'THRONE', '15': 'MOON', '16': 'CROWN',
        '17': 'TOWER', '18': 'GARDEN', '19': 'FLAME', '20': 'MIRROR',
        '21': 'BRIDGE', '22': 'TEMPLE', '23': 'STORM', '24': 'FOREST',
        '25': 'OCEAN', '26': 'MOUNTAIN', '27': 'DESERT', '28': 'VALLEY',
        '29': 'RIVER', '30': 'FIELD', '31': 'STAR'
    },
    years: {
        1963: 'OF THE DARK VEIL', 1964: 'OF THE SACRED SEAL', 1965: 'OF SACRIFICE',
        1966: 'OF THE DREADED SUN', 1967: 'OF THE CURSED STORM', 1968: 'OF GLORY',
        1969: 'OF ANCIENT', 1970: 'OF THE ROTTEN SLUM', 1971: 'OF SOLID EARTH',
        1972: 'OF THE HOLY SUN', 1973: 'OF THE BURNING FIELD', 1974: 'OF DESTRUCTION',
        1975: 'OF INFINITY', 1976: 'OF THE VOICE', 1977: 'OF THE ROTTEN SLUM',
        1978: 'OF SOLID EARTH', 1979: 'OF THE HOLY SUN', 1980: 'OF THE BURNING FIELD',
        1981: 'OF DESTRUCTION', 1982: 'OF INFINITY', 1983: 'OF THE VOICE',
        1984: 'OF THE DARK VEIL', 1985: 'OF THE SACRED SEAL', 1986: 'OF SACRIFICE',
        1987: 'OF THE DREADED SUN', 1988: 'OF THE CURSED STORM', 1989: 'OF GLORY',
        1990: 'OF ANCIENT', 1991: 'OF THE ROTTEN SLUM', 1992: 'OF SOLID EARTH',
        1993: 'OF THE HOLY SUN', 1994: 'OF THE BURNING FIELD', 1995: 'OF DESTRUCTION',
        1996: 'OF INFINITY', 1997: 'OF THE VOICE', 1998: 'OF THE DARK VEIL',
        1999: 'OF THE SACRED SEAL', 2000: 'OF SACRIFICE', 2001: 'OF THE DREADED SUN',
        2002: 'OF THE CURSED STORM', 2003: 'OF GLORY', 2004: 'OF ANCIENT',
        2005: 'OF THE ROTTEN SLUM', 2006: 'OF SOLID EARTH', 2007: 'OF THE HOLY SUN',
        2008: 'OF THE BURNING FIELD', 2009: 'OF DESTRUCTION', 2010: 'OF INFINITY',
        2011: 'OF THE VOICE', 2012: 'OF THE DARK VEIL', 2013: 'OF THE SACRED SEAL',
        2014: 'OF SACRIFICE', 2015: 'OF THE DREADED SUN', 2016: 'OF THE CURSED STORM',
        2017: 'OF GLORY', 2018: 'OF ANCIENT', 2019: 'OF THE ROTTEN SLUM',
        2020: 'OF SOLID EARTH', 2021: 'OF THE HOLY SUN', 2022: 'OF THE BURNING FIELD',
        2023: 'OF DESTRUCTION', 2024: 'OF INFINITY', 2025: 'OF THE VOICE'
    }
};

// Global variables for admin and app functionality
let allSubmissions = [];
let filteredSubmissions = [];
let currentDomainName = '';

// Initialize application on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    createParticles();
    populateBirthDays();
    setupEventListeners();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    switch(currentPage) {
        case 'admin':
            initializeAdmin();
            break;
        case 'app':
            initializeAppDashboard();
            break;
        case 'contact':
            initializeContactForm();
            break;
        case 'domain':
            initializeDomainGenerator();
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('admin.html')) return 'admin';
    if (path.includes('app.html')) return 'app';
    if (path.includes('contact.html')) return 'contact';
    if (path.includes('domain.html')) return 'domain';
    if (path.includes('about.html')) return 'about';
    if (path.includes('project.html')) return 'project';
    return 'home';
}

// ============================================================================
// PARTICLES SYSTEM
// ============================================================================

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 15000);
    }

    // Create initial particles
    for (let i = 0; i < 30; i++) {
        setTimeout(createParticle, i * 100);
    }

    // Continuously create particles
    setInterval(createParticle, 500);
}

// ============================================================================
// DOMAIN GENERATOR FUNCTIONALITY
// ============================================================================

function populateBirthDays() {
    const birthDaySelect = document.getElementById('birthDay');
    if (!birthDaySelect) return;
    
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        const dayValue = i.toString().padStart(2, '0');
        option.value = dayValue;
        option.textContent = i.toString();
        birthDaySelect.appendChild(option);
    }
}

function initializeDomainGenerator() {
    // Add any domain-specific initialization here
    console.log('Domain Generator initialized');
}

function generateDomain() {
    const month = document.getElementById('birthMonth')?.value;
    const day = document.getElementById('birthDay')?.value;
    const year = parseInt(document.getElementById('birthYear')?.value);

    if (!month || !day || !year) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    const monthWord = domainData.months[month] || 'MYSTERIOUS';
    const dayWord = domainData.days[day] || 'REALM';
    
    // Find closest year
    const years = Object.keys(domainData.years).map(Number);
    const closestYear = years.reduce((closest, current) => {
        return Math.abs(current - year) < Math.abs(closest - year) ? current : closest;
    });
    const yearPhrase = domainData.years[closestYear] || 'OF THE UNKNOWN';
    
    currentDomainName = `${monthWord} ${dayWord} ${yearPhrase}`;
    
    const resultContainer = document.getElementById('domainResult');
    if (resultContainer) {
        resultContainer.innerHTML = `
            <div style="margin-bottom: 1.5rem;">
                <div style="width: 120px; height: 120px; margin: 0 auto 1rem; border-radius: 50%; border: 3px solid var(--neon-cyan); background: linear-gradient(135deg, var(--neon-blue), var(--neon-cyan)); display: flex; align-items: center; justify-content: center; animation: float 3s ease-in-out infinite;">
                    <div style="font-size: 2.5rem;">👁️</div>
                </div>
            </div>
            <h4 style="color: white; font-family: var(--font-orbitron); margin-bottom: 1rem;">Domain Expansion:</h4>
            <div class="domain-name">${currentDomainName}</div>
            <div style="font-size: 0.9rem; color: #ccc; margin-top: 1rem; line-height: 1.6;">
                <p>📅 Birth Month: <span style="color: var(--neon-cyan);">${month} (${monthWord})</span></p>
                <p># Birth Day: <span style="color: var(--neon-cyan);">${day} (${dayWord})</span></p>
                <p>🕐 Birth Year: <span style="color: var(--neon-cyan);">${year} (${yearPhrase})</span></p>
            </div>
        `;
        
        // Show share buttons
        const shareButtons = document.getElementById('shareButtons');
        if (shareButtons) {
            shareButtons.classList.remove('hidden');
        }
    }
}

function copyDomainToClipboard() {
    if (!currentDomainName) {
        showNotification('Generate a domain first!', 'error');
        return;
    }
    
    navigator.clipboard.writeText(`My Domain Expansion: ${currentDomainName}`).then(() => {
        showNotification('Domain copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy to clipboard', 'error');
    });
}

function shareDomain() {
    if (!currentDomainName) {
        showNotification('Generate a domain first!', 'error');
        return;
    }
    
    const shareText = `My Domain Expansion: ${currentDomainName} 🎯\n\nGenerated on DJS_YT's Domain Expansion Generator!\nCheck it out: ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Domain Expansion',
            text: shareText,
        });
    } else {
        copyDomainToClipboard();
    }
}

// ============================================================================
// CONTACT FORM FUNCTIONALITY
// ============================================================================

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validate form data
    if (!data.name || !data.email || !data.service || !data.description) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            showNotification('Order request submitted successfully! We\'ll contact you soon.', 'success');
            e.target.reset();
        } else {
            throw new Error('Failed to submit');
        }
    } catch (error) {
        console.error('Contact form error:', error);
        showNotification('Failed to submit your request. Please try again or contact us directly.', 'error');
    }
}

// ============================================================================
// ADMIN PANEL FUNCTIONALITY
// ============================================================================

function initializeAdmin() {
    setupAdminEventListeners();
    refreshSubmissions();
}

function setupAdminEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const serviceFilter = document.getElementById('serviceFilter');
    const dateFilter = document.getElementById('dateFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterSubmissions);
    }
    
    if (serviceFilter) {
        serviceFilter.addEventListener('change', filterSubmissions);
    }
    
    if (dateFilter) {
        dateFilter.addEventListener('change', filterSubmissions);
    }
}

async function refreshSubmissions() {
    const submissionsList = document.getElementById('submissionsList');
    if (!submissionsList) return;
    
    try {
        submissionsList.innerHTML = `
            <div class="loading-state">
                <div class="loading-spinner">🔄</div>
                <p>Loading submissions...</p>
            </div>
        `;
        
        const response = await fetch('/api/contact/submissions');
        
        if (!response.ok) {
            throw new Error('Failed to fetch submissions');
        }
        
        allSubmissions = await response.json();
        filteredSubmissions = [...allSubmissions];
        
        updateSubmissionsStats();
        renderSubmissions();
        
    } catch (error) {
        console.error('Error refreshing submissions:', error);
        submissionsList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #ff6b6b;">
                ⚠️ Error loading submissions. Please try again.
            </div>
        `;
    }
}

function updateSubmissionsStats() {
    const totalEl = document.getElementById('totalSubmissions');
    const todayEl = document.getElementById('todaySubmissions');
    const weekEl = document.getElementById('weekSubmissions');
    
    if (!totalEl || !todayEl || !weekEl) return;
    
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const todayCount = allSubmissions.filter(sub => {
        const subDate = new Date(sub.timestamp);
        return subDate >= today;
    }).length;
    
    const weekCount = allSubmissions.filter(sub => {
        const subDate = new Date(sub.timestamp);
        return subDate >= weekAgo;
    }).length;
    
    totalEl.textContent = allSubmissions.length;
    todayEl.textContent = todayCount;
    weekEl.textContent = weekCount;
}

function filterSubmissions() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const serviceFilter = document.getElementById('serviceFilter')?.value || '';
    const dateFilter = document.getElementById('dateFilter')?.value || '';
    
    filteredSubmissions = allSubmissions.filter(submission => {
        // Search filter
        const matchesSearch = !searchTerm || 
            submission.name.toLowerCase().includes(searchTerm) ||
            submission.email.toLowerCase().includes(searchTerm) ||
            submission.description.toLowerCase().includes(searchTerm);
        
        // Service filter
        const matchesService = !serviceFilter || submission.service === serviceFilter;
        
        // Date filter
        let matchesDate = true;
        if (dateFilter) {
            const subDate = new Date(submission.timestamp);
            const now = new Date();
            
            switch(dateFilter) {
                case 'today':
                    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                    matchesDate = subDate >= today;
                    break;
                case 'week':
                    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                    matchesDate = subDate >= weekAgo;
                    break;
                case 'month':
                    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                    matchesDate = subDate >= monthAgo;
                    break;
            }
        }
        
        return matchesSearch && matchesService && matchesDate;
    });
    
    renderSubmissions();
}

function renderSubmissions() {
    const submissionsList = document.getElementById('submissionsList');
    if (!submissionsList) return;
    
    if (filteredSubmissions.length === 0) {
        submissionsList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #ccc;">
                📧 No submissions found.<br>
                <small style="margin-top: 0.5rem; display: block;">Contact form submissions will appear here.</small>
            </div>
        `;
        return;
    }
    
    submissionsList.innerHTML = filteredSubmissions
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .map(submission => `
            <div class="submission-item">
                <div class="submission-header">
                    <div class="submission-info">
                        <h4>👤 ${escapeHtml(submission.name)}</h4>
                        <p>📧 ${escapeHtml(submission.email)}</p>
                    </div>
                    <div class="submission-date">
                        📅 ${new Date(submission.timestamp).toLocaleDateString()}<br>
                        ${new Date(submission.timestamp).toLocaleTimeString()}
                    </div>
                </div>
                <div class="submission-service">
                    <span class="tag">
                        ⚙️ ${formatServiceName(submission.service)}
                    </span>
                </div>
                <div class="submission-description">
                    <p><strong>📝 Project Description:</strong></p>
                    <div class="description-content">
                        ${escapeHtml(submission.description)}
                    </div>
                </div>
            </div>
        `).join('');
}

function formatServiceName(service) {
    return service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

async function exportSubmissions() {
    if (filteredSubmissions.length === 0) {
        showNotification('No submissions to export', 'error');
        return;
    }
    
    const csvData = generateCSV(filteredSubmissions);
    downloadCSV(csvData, 'contact-submissions.csv');
    showNotification('Submissions exported successfully!', 'success');
}

function generateCSV(data) {
    const headers = ['Name', 'Email', 'Service', 'Description', 'Timestamp'];
    const rows = data.map(item => [
        item.name,
        item.email,
        formatServiceName(item.service),
        item.description.replace(/"/g, '""'), // Escape quotes
        new Date(item.timestamp).toISOString()
    ]);
    
    const csvContent = [headers, ...rows]
        .map(row => row.map(field => `"${field}"`).join(','))
        .join('\n');
    
    return csvContent;
}

function downloadCSV(csvData, filename) {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function clearAllSubmissions() {
    showModal(
        'Clear All Submissions',
        'Are you sure you want to delete all contact form submissions? This action cannot be undone.',
        async () => {
            try {
                const response = await fetch('/api/contact/submissions', {
                    method: 'DELETE'
                });
                
                if (response.ok) {
                    allSubmissions = [];
                    filteredSubmissions = [];
                    updateSubmissionsStats();
                    renderSubmissions();
                    showNotification('All submissions cleared successfully', 'success');
                } else {
                    throw new Error('Failed to clear submissions');
                }
            } catch (error) {
                console.error('Error clearing submissions:', error);
                showNotification('Failed to clear submissions', 'error');
            }
        }
    );
}

// ============================================================================
// APP DASHBOARD FUNCTIONALITY
// ============================================================================

function initializeAppDashboard() {
    updateDashboardStats();
    loadRecentActivity();
    checkSystemStatus();
}

function updateDashboardStats() {
    // Simulate dashboard stats updates
    animateCounter('totalProjects', 12);
    animateCounter('totalClients', 48);
    animateCounter('completionRate', 98, '%');
    
    const avgRatingEl = document.getElementById('avgRating');
    if (avgRatingEl) {
        avgRatingEl.textContent = '4.9';
    }
}

function animateCounter(elementId, targetValue, suffix = '') {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let currentValue = 0;
    const increment = targetValue / 50;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(currentValue) + suffix;
    }, 30);
}

function loadRecentActivity() {
    // Recent activity is static HTML, but you could load it dynamically here
    console.log('Recent activity loaded');
}

function checkSystemStatus() {
    // Simulate system status checks
    setTimeout(() => {
        updateSystemStatus('MineCloud.gg Server', 'online');
        updateSystemStatus('Botonomy Bot', 'online');
        updateSystemStatus('Database', 'warning');
        updateSystemStatus('Discord Webhook', 'online');
    }, 1000);
}

function updateSystemStatus(serviceName, status) {
    const statusItems = document.querySelectorAll('.status-item');
    statusItems.forEach(item => {
        const label = item.querySelector('.status-label');
        if (label && label.textContent === serviceName) {
            const indicator = item.querySelector('.status-indicator');
            const value = item.querySelector('.status-value');
            
            if (indicator) {
                indicator.className = `status-indicator status-${status}`;
            }
            
            if (value) {
                switch(status) {
                    case 'online':
                        value.textContent = Math.random() > 0.5 ? 'Online' : 'Active';
                        break;
                    case 'warning':
                        value.textContent = 'High Usage';
                        break;
                    case 'offline':
                        value.textContent = 'Offline';
                        break;
                }
            }
        }
    });
}

// Dashboard action handlers
function createNewProject() {
    showNotification('Project creation wizard would open here', 'info');
}

function viewAnalytics() {
    showNotification('Analytics dashboard would open here', 'info');
}

function manageClients() {
    showNotification('Client management panel would open here', 'info');
}

// ============================================================================
// MODAL FUNCTIONALITY
// ============================================================================

function showModal(title, message, confirmCallback) {
    const modal = document.getElementById('actionModal');
    if (!modal) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const confirmButton = document.getElementById('confirmAction');
    
    if (modalTitle) modalTitle.textContent = title;
    if (modalMessage) modalMessage.textContent = message;
    
    if (confirmButton) {
        confirmButton.onclick = () => {
            confirmCallback();
            closeModal();
        };
    }
    
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('actionModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// ============================================================================
// NOTIFICATION SYSTEM
// ============================================================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 2000;
        padding: 1rem 2rem;
        background: ${getNotificationColor(type)};
        border: 1px solid ${getNotificationBorderColor(type)};
        border-radius: 8px;
        color: white;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
        word-wrap: break-word;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function getNotificationColor(type) {
    switch(type) {
        case 'success': return 'rgba(34, 197, 94, 0.9)';
        case 'error': return 'rgba(239, 68, 68, 0.9)';
        case 'warning': return 'rgba(245, 158, 11, 0.9)';
        default: return 'rgba(59, 130, 246, 0.9)';
    }
}

function getNotificationBorderColor(type) {
    switch(type) {
        case 'success': return '#22c55e';
        case 'error': return '#ef4444';
        case 'warning': return '#f59e0b';
        default: return '#3b82f6';
    }
}

// ============================================================================
// GENERAL EVENT LISTENERS
// ============================================================================

function setupEventListeners() {
    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        const modal = document.getElementById('actionModal');
        if (modal && e.target === modal) {
            closeModal();
        }
    });
    
    // Smooth scrolling for anchor links (if any)
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    
    // Navigation active state management
    updateActiveNavLink();
}

function updateActiveNavLink() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (
            (currentPage === 'home' && href === 'index.html') ||
            (currentPage === 'about' && href === 'about.html') ||
            (currentPage === 'project' && href === 'project.html') ||
            (currentPage === 'contact' && href === 'contact.html') ||
            (currentPage === 'domain' && href === 'domain.html') ||
            (currentPage === 'admin' && href === 'admin.html') ||
            (currentPage === 'app' && href === 'app.html')
        ) {
            link.classList.add('active');
        }
    });
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

// ============================================================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ============================================================================

// Make functions globally available for onclick handlers
window.generateDomain = generateDomain;
window.copyDomainToClipboard = copyDomainToClipboard;
window.shareDomain = shareDomain;
window.refreshSubmissions = refreshSubmissions;
window.exportSubmissions = exportSubmissions;
window.clearAllSubmissions = clearAllSubmissions;
window.closeModal = closeModal;
window.createNewProject = createNewProject;
window.viewAnalytics = viewAnalytics;
window.manageClients = manageClients;

console.log('DJS_YT Portfolio JavaScript loaded successfully! 🚀');