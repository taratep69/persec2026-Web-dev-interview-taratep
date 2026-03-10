<template>
  <aside class="sidebar" :class="{ 'collapsed': isCollapsed }">
    <div class="sidebar-header">
      <div class="logo-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="logo-icon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <span class="logo-text" v-if="!isCollapsed">Logic Test System</span>
      <button class="toggle-btn" @click="toggleSidebar">
        <svg v-if="!isCollapsed" viewBox="0 0 24 24" fill="none" class="toggle-icon"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg v-else viewBox="0 0 24 24" fill="none" class="toggle-icon"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>

    <nav class="sidebar-nav">
      <ul class="nav-list">
        <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
          <router-link :to="item.link" class="nav-link" active-class="active">
            <span class="nav-icon" v-html="item.icon"></span>
            <span class="nav-label" v-if="!isCollapsed">{{ item.label }}</span>
            <div class="active-indicator" v-if="$route && $route.path === item.link && !isCollapsed"></div>
          </router-link>
        </li>
      </ul>
    </nav>

  </aside>
</template>

<script setup>
import { ref } from 'vue';

const isCollapsed = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const menuItems = [
  { label: 'คำถามข้อที่ 1', link: '/q1' },
  { label: 'คำถามข้อที่ 2', link: '/q2' },
  { label: 'คำถามข้อที่ 3', link: '/q3' },
  { label: 'คำถามข้อที่ 4', link: '/q4' },
  { label: 'คำถามข้อที่ 5', link: '/q5' },
  { label: 'คำถามข้อที่ 6', link: '/q6' },
];
</script>

<style scoped>
.sidebar {
  width: 280px;
  background-color: var(--sidebar-bg);
  color: var(--sidebar-text);
  display: flex;
  flex-direction: column;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-right: 1px solid rgba(255,255,255,0.05);
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  z-index: 50;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar-header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
}

.logo-box {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, var(--primary), #8B5CF6);
  border-radius: var(--radius-md);
  margin-right: 15px;
  flex-shrink: 0;
}

.logo-icon {
  width: 24px;
  height: 24px;
  color: white;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  white-space: nowrap;
  background: linear-gradient(to right, #fff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.toggle-btn {
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 4px solid var(--background);
  z-index: 100;
  cursor: pointer;
  transition: var(--transition);
}

.toggle-btn:hover {
  background-color: var(--primary-hover);
  transform: translateY(-50%) scale(1.1);
}

.toggle-icon {
  width: 16px;
  height: 16px;
}

.sidebar-nav {
  padding: 20px 0;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}
.sidebar-nav::-webkit-scrollbar {
  width: 5px;
}
.sidebar-nav::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;
}

.nav-item {
  width: 100%;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  color: #9CA3AF;
  transition: var(--transition);
  position: relative;
}

.sidebar.collapsed .nav-link {
  justify-content: center;
  padding: 12px 0;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.nav-link.active {
  background: linear-gradient(90deg, rgba(79, 70, 229, 0.1) 0%, transparent 100%);
  color: #fff;
}

.nav-icon {
  width: 24px;
  height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.sidebar.collapsed .nav-icon {
  margin-right: 0;
}

.nav-label {
  margin-left: 16px;
  font-weight: 500;
  font-size: 0.95rem;
  white-space: nowrap;
}

.active-indicator {
  position: absolute;
  left: 0;
  top: 10%;
  width: 4px;
  height: 80%;
  background-color: var(--primary);
  border-radius: 0 4px 4px 0;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.user-profile {
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
  padding: 12px;
  border-radius: var(--radius-md);
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: white;
  font-size: 0.8rem;
  margin-right: 12px;
}

.user-info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.user-name {
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-role {
  font-size: 0.75rem;
  color: #9CA3AF;
  margin-top: 4px;
}
</style>
