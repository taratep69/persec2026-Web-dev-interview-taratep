<template>
  <main class="content-area">
    <div class="content-header">
      <h2 class="content-title">คำถามข้อที่ 6</h2>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
      <div class="flex items-start gap-4 pb-6">
        <div>
          <span class="text-lg text-red-500 font-bold">โจทย์ : </span>
          <span class="mt-2 text-gray-700">
            ให้เขียน function รับค่า array string และ return ผลลัพธ์ที่เรียงแล้วออกมา โดยการเรียงจะดูจากในตัวอย่างเป็นหลัก
            ["TH19", "SG20", "TH2"] => ["SG20", "TH2", "TH19"]
            ["TH10", "TH3Netflix", "TH1", "TH7"] => ["TH1", "TH3Netflix", "TH7", "TH10"]
          </span> 
        </div>
      </div>
      <div class="lg:col-span-1 space-y-6 flex flex-col gap-2">
        <div class="space-y-4 gap-4">
          <div class="space-y-1">
            <span class="text-sm font-bold text-gray-700">Number of items (n)</span>
            <input 
              type="number" 
              v-model.number="nValue"
              min="0"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              @input="usePreset"
            />
          </div>
          <div class="space-y-1">
            <span class="text-sm font-bold text-gray-700">Signature (Comma separated)</span>
            <input 
              type="text" 
              v-model="signatureInput"
              placeholder="เช่น 1, 1, 1"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              @input="usePreset"
            />
          </div>
        </div>

        <button 
          @click="showSourceCode = true"
          class="w-40 bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-md font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          View Source Code
        </button> 
      </div>

      <span class="text-sm font-bold text-red-700 pt-5">Result: {{ JSON.stringify(sequence) }}</span>
    </div>

    <div v-if="showSourceCode" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-all overflow-y-auto">
      <div class="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        <div class="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 class="text-xl font-bold text-gray-800">Source Code: Question 6</h3>
          <button @click="showSourceCode = false" class="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-200 rounded-full transition-colors">
          </button>
        </div>
        <div class="p-8 overflow-y-auto bg-[#1e1e1e] text-gray-300 font-mono text-sm leading-relaxed whitespace-pre overflow-x-auto">
          <code class="block" v-text="sourceCode"></code>
        </div>
        <div class="px-8 py-5 border-t border-gray-100 flex justify-end bg-gray-50/50">
          <button @click="showSourceCode = false" class="px-8 py-2 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg">
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  const signatureInput = ref<string>('1, 1, 1');
  const nValue = ref<number>(6);
  const sequence = ref<number[]>([]);
  const showSourceCode = ref<boolean>(false);

  const presets = [
    { sig: [1, 3, 5], n: 5 },
    { sig: [2, 2, 2], n: 3 },
    { sig: [10, 10, 10], n: 4 },
    { sig: [1, 1, 1], n: 10 }
  ];

  const sourceCode = `const generateSequence = (signature: number[], n: number): number[] => {
    const res = [...signature];
    while (res.length < n) {
      const nextSum = res.slice(-3).reduce((a, b) => a + b, 0);
      res.push(nextSum);
    }
    return res;
  };`;

  const generateSequence = (signature: number[], n: number): number[] => {
    const res = [...signature];
    while (res.length < n) {
      const nextSum = res.slice(-3).reduce((a, b) => a + b, 0);
      res.push(nextSum);
    }
    return res;
  };

  const usePreset = () => {
    const sig = signatureInput.value.split(',').map(Number);
    const n = nValue.value;
    sequence.value = generateSequence(sig, n);
  };

  onMounted(() => {
    sequence.value = generateSequence(presets[0].sig, presets[0].n);
  });
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
