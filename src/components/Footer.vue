<template>
  <footer class="footer">
    <div class="footer-content">
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
