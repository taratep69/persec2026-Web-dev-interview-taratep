<template>
  <main class="content-area">
    <div class="content-header">
      <h2 class="content-title">คำถามข้อที่ 2</h2>
    </div>
    <div class="blank-state">
      <p>เนื้อหาสำหรับคำถามข้อที่ 2 จะแสดงที่นี่</p>
    </div>
  </main>
</template>

<style scoped>
.content-area {
  padding: 32px;
  flex: 1;
  overflow-y: auto;
}
.content-header {
  margin-bottom: 32px;
}
.content-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
}
.blank-state {
  background-color: var(--surface);
  border-radius: var(--radius-lg);
  padding: 48px;
  text-align: center;
  color: var(--text-muted);
  border: 1px dashed var(--border);
}
</style>
