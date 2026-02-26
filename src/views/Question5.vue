<template>
  <main class="content-area">
    <div class="content-header">
      <h2 class="content-title">คำถามข้อที่ 5</h2>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 font-primary">
      <div class="flex items-start gap-4">
        <div>
          <span class="text-lg text-red-500 font-bold">โจทย์ : </span>
          <span class="mt-2 text-gray-700">
            ให้เขียน function รับค่า array string และ return ผลลัพธ์ที่เรียงแล้วออกมา โดยการเรียงจะดูจากในตัวอย่างเป็นหลัก
            ["TH19", "SG20", "TH2"] => ["SG20", "TH2", "TH19"]
            ["TH10", "TH3Netflix", "TH1", "TH7"] => ["TH1", "TH3Netflix", "TH7", "TH10"]
          </span> 
        </div>
      </div>
      <div class="max-w-xl mx-auto space-y-8 pt-6">
        <div class="text-center flex gap-2">
          <input 
            type="number" 
            v-model.number="inputNumber" 
            class="w-full max-w-sm px-6 py-2 text-xl font-bold text-center bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-200"
            @input="usePreset(inputNumber)"
          />
          <button 
            @click="showSourceCode = true"
            class="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-md font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View Source Code
          </button> 
        </div>

        <div class="flex flex-col items-center gap-4">
          <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
          
          <div class="text-xs font-bold text-gray-400 uppercase tracking-widest">Sort Result</div>
          <div class="relative group">
            <div v-if="outputNumber !== null" class="text-6xl font-black text-indigo-600 tracking-tighter animate-in zoom-in duration-300">
              {{ outputNumber }}
            </div>
            <div v-if="outputNumber !== null" class="absolute -inset-4 bg-indigo-500/5 blur-2xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showSourceCode" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-all overflow-y-auto">
      <div class="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        <div class="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 class="text-xl font-bold text-gray-800">Source Code: Question 5</h3>
          <button @click="showSourceCode = false" class="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-200 rounded-full transition-colors">
          </button>
        </div>
        <div class="p-8 overflow-y-auto bg-[#1e1e1e] text-gray-300 font-mono text-sm leading-relaxed whitespace-pre overflow-x-auto">
          <code class="block" v-text="sourceCode"></code>
        </div>
        <div class="px-8 py-5 border-t border-gray-100 flex justify-end bg-gray-50/50">
          <button @click="showSourceCode = false" class="px-8 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg">
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const inputNumber = ref<number | null>(null);
  const outputNumber = ref<number | null>(null);
  const showSourceCode = ref<boolean>(false);

  const presets = [3008, 1989, 2679, 9163];

  const sourceCode = `
  const handleSortDigits = (num: number): number => {
    const sortedStr = num
      .toString()
      .split('')
      .sort((a, b) => parseInt(b) - parseInt(a))
      .join('');
      
    return parseInt(sortedStr);
  };
  `;

  const handleSortDigits = (num: number): number => {
    const sortedStr = num
      .toString()
      .split('')
      .sort((a, b) => parseInt(b) - parseInt(a))
      .join('');
      
    return parseInt(sortedStr);
  };

  const usePreset = (val: number) => {
    inputNumber.value = val;
    outputNumber.value = handleSortDigits(val);
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
