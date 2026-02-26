<template>
  <main class="content-area">
    <div class="content-header">
      <h2 class="content-title">คำถามข้อที่ 2</h2>
    </div>
    <div class="bg-white p-4 rounded-lg">
      <span class="text-lg text-red-500 font-bold">โจทย์ : </span>
      <span class="mt-2 text-gray-700">
        ให้เขียน function รับค่า array string และ return ผลลัพธ์ที่เรียงแล้วออกมา โดยการเรียงจะดูจากในตัวอย่างเป็นหลัก
        ["TH19", "SG20", "TH2"] => ["SG20", "TH2", "TH19"]
        ["TH10", "TH3Netflix", "TH1", "TH7"] => ["TH1", "TH3Netflix", "TH7", "TH10"]
      </span>

      <div class="flex flex-col gap-6 pt-8 mt-6 pb-4">
        <div class="flex flex-wrap items-center justify-center gap-4">
          <div class="flex flex-col gap-1">
            <label class="text-xs font-bold text-gray-500 uppercase ml-1">Input Array (comma separated)</label>
            <input 
              type="text" 
              v-model="inputString" 
              placeholder='เช่น TH19, SG20, TH2'
              class="w-full sm:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow text-gray-800"
              @keyup.enter="handleSort"
            />
          </div>
          <div class="flex gap-2 self-end mb-1">
            <button 
              @click="handleSort"
              class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              เรียงลำดับ
            </button>
            <button 
              @click="showSourceCode = true"
              class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              View Source Code
            </button>
          </div>
        </div>

        <div v-if="sortedOutput.length > 0" class="flex pb-4 flex-col items-center animate-in fade-in slide-in-from-top-4 duration-300">
          {{ formatOutput(sortedOutput) }}
        </div>
      </div>

      <div class="mt-4 flex flex-wrap justify-center gap-3">
        <button 
          v-for="(preset, idx) in presets" 
          :key="idx"
          @click="usePreset(preset)"
          class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 transition-colors"
        >
          {{ preset }}
        </button>
      </div>
    </div>

    <div v-if="showSourceCode" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-all overflow-y-auto">
      <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 class="text-xl font-bold text-gray-800">Source Code: Question 2</h3>
        </div>
        <div class="p-6 overflow-y-auto bg-[#1e1e1e] text-gray-300 font-mono text-sm leading-relaxed whitespace-pre overflow-x-auto">
          <code class="block" v-text="sourceCode"></code>
        </div>
        <div class="px-6 py-4 border-t border-gray-100 flex justify-end bg-gray-50/50">
          <button @click="showSourceCode = false" class="px-6 py-2 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-900 transition-colors">
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const inputString = ref<string>('');
  const sortedOutput = ref<string[]>([]);
  const showSourceCode = ref<boolean>(false);

  const presets = [
    ["TH19", "SG20", "TH2"],
    ["TH10", "TH3Netflix", "TH1", "TH7"]
  ];

  const sourceCode = `const handleSort = (input: string): string[] => {
  const raw = input.replace(/[\\[\\]]/g, '');
  const arr = raw.split(',')
    .map(s => s.trim().replace(/^["']|["']$/g, ''))
    .filter(s => s !== '');
    
  return [...arr].sort((a, b) => 
    a.localeCompare(b, undefined, { numeric: true })
  );
};`;

  const usePreset = (preset: string[]) => {
    inputString.value = preset.join(', ');
    handleSort();
  };

  const handleSort = () => {
    const raw = inputString.value.replace(/[\[\]]/g, '');
    const arr = raw.split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
    sortedOutput.value = [...arr].sort((a, b) => 
      a.localeCompare(b, undefined, { numeric: true })
    );
  };

  const formatOutput = (arr: string[]) => {
    return '[' + arr.map(s => `"${s}"`).join(', ') + ']';
  };
</script>

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
</style>
