<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2026 Pre-Interview System. Made for Web Dev Interview.</p>
      <div class="footer-links">
        <a href="#">นโยบายความเป็นส่วนตัว</a>
        <a href="#">ข้อกำหนดการใช้งาน</a>
        <a href="#">ติดต่อเรา</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: auto;
  border-top: 1px solid var(--border);
  background-color: var(--surface);
  padding: 16px 24px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer-links a {
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--primary);
  text-decoration: underline;
}
</style>
