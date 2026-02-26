<template>
  <header class="header glass">
    <div class="header-left">
      <h1 class="page-title">คำถามสัมภาษณ์งาน (Pre-Interview System)</h1>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 40;
  background-color: var(--surface);
}

.header-left {
  display: flex;
  align-items: center;
}

.page-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
  background: linear-gradient(90deg, #111827 0%, #4F46E5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 250px;
  height: 40px;
  padding: 0 16px 0 40px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background-color: var(--background);
  font-size: 0.9rem;
  transition: var(--transition);
  color: var(--text-main);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  width: 280px;
  background-color: var(--surface);
}

.search-icon {
  position: absolute;
  left: 14px;
  width: 16px;
  height: 16px;
  color: var(--text-muted);
}

.notification {
  position: relative;
}

.notif-btn {
  background: transparent;
  padding: 8px;
  border-radius: 50%;
  color: var(--text-muted);
}

.notif-btn:hover {
  background-color: var(--background);
  color: var(--text-main);
}

.bell-icon {
  width: 20px;
  height: 20px;
}

.badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: #EF4444;
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid var(--surface);
}

.user-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--border);
  transition: var(--transition);
}

.user-menu:hover .profile-img {
  border-color: var(--primary);
}
</style>
