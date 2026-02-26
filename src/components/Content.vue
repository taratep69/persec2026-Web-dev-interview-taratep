<template>
  <main class="content-area">
    <div class="content-header">
      <h2 class="content-title">ภาพรวมระบบ (Dashboard)</h2>
      <div class="content-actions">
        <button class="btn btn-outline">ดาวน์โหลดรายงาน</button>
        <button class="btn btn-primary">+ สร้างการสัมภาษณ์ใหม่</button>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="(stat, index) in stats" :key="index">
        <div class="stat-icon" :style="{ backgroundColor: stat.color + '20', color: stat.color }">
          <span v-html="stat.icon"></span>
        </div>
        <div class="stat-details">
          <h3 class="stat-value">{{ stat.value }}</h3>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
        <div class="stat-trend" :class="stat.trend > 0 ? 'positive' : 'negative'">
          {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
        </div>
      </div>
    </div>

    <div class="recent-interviews">
      <div class="section-header">
        <h3>รอบสัมภาษณ์ล่าสุด</h3>
        <a href="#" class="view-all">ดูทั้งหมด &rarr;</a>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ผู้สมัคร</th>
              <th>ตำแหน่ง</th>
              <th>วันที่/เวลา</th>
              <th>สถานะ</th>
              <th>ผู้สัมภาษณ์</th>
              <th>จัดการ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td>
                <div class="person-cell">
                  <div class="avatar-sm">สม</div>
                  <div class="person-info">
                    <p class="person-name">สมชาย ใจดี {{ i }}</p>
                    <p class="person-email">somchai{{ i }}@example.com</p>
                  </div>
                </div>
              </td>
              <td class="role-cell">Frontend Developer</td>
              <td>26 ก.พ. 2026, 10:00 น.</td>
              <td>
                <span class="status-badge" :class="i % 2 === 0 ? 'status-pending' : 'status-completed'">
                  {{ i % 2 === 0 ? 'รอสัมภาษณ์' : 'เสร็จสิ้น' }}
                </span>
              </td>
              <td>
                <div class="interviewer-avatars">
                  <img src="https://ui-avatars.com/api/?name=HR&background=random" class="interviewer-avatar" />
                  <img src="https://ui-avatars.com/api/?name=Tech&background=random" class="interviewer-avatar" />
                </div>
              </td>
              <td>
                <button class="action-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="action-icon"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script setup>
const stats = [
  { label: 'ผู้สมัครทั้งหมด', value: '1,248', trend: 12.5, color: '#4F46E5', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>' },
  { label: 'รอสัมภาษณ์', value: '42', trend: -2.4, color: '#F59E0B', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>' },
  { label: 'สัมภาษณ์เสร็จสิ้น', value: '856', trend: 8.2, color: '#10B981', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>' },
  { label: 'คลังคำถาม', value: '342', trend: 5.1, color: '#8B5CF6', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>' }
];
</script>

<style scoped>
.content-area {
  padding: 32px;
  flex: 1;
  overflow-y: auto;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.content-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
}

.content-actions {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.btn-outline {
  background-color: transparent;
  border: 1px solid var(--border);
  color: var(--text-main);
}

.btn-outline:hover {
  background-color: var(--surface);
  border-color: var(--primary);
  color: var(--primary);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.stat-card {
  background-color: var(--surface);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
}

.stat-icon svg {
  width: 24px;
  height: 24px;
}

.stat-details {
  flex: 1;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 4px;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.stat-trend {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 20px;
}

.stat-trend.positive {
  background-color: rgba(16, 185, 129, 0.1);
  color: #10B981;
}

.stat-trend.negative {
  background-color: rgba(239, 68, 68, 0.1);
  color: #EF4444;
}

.recent-interviews {
  background-color: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  overflow: hidden;
}

.section-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-header h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-main);
}

.view-all {
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: 500;
}

.view-all:hover {
  text-decoration: underline;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  padding: 16px 24px;
  text-align: left;
}

.data-table th {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: #F8FAFC;
}

.data-table td {
  font-size: 0.95rem;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}

.data-table tr:hover td {
  background-color: #F8FAFC;
}

.person-cell {
  display: flex;
  align-items: center;
}

.avatar-sm {
  width: 36px;
  height: 36px;
  background-color: #E0E7FF;
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 12px;
}

.person-name {
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 2px;
}

.person-email {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.status-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.status-completed {
  background-color: #D1FAE5;
  color: #065F46;
}

.status-pending {
  background-color: #FEF3C7;
  color: #92400E;
}

.interviewer-avatars {
  display: flex;
}

.interviewer-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid white;
  margin-right: -10px;
}

.action-btn {
  background: transparent;
  color: var(--text-muted);
  padding: 8px;
  border-radius: var(--radius-md);
}

.action-btn:hover {
  background-color: var(--background);
  color: var(--primary);
}

.action-icon {
  width: 20px;
  height: 20px;
}
</style>
