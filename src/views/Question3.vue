<template>
  <main class="content-area">
    <div class="content-header">
      <h2 class="content-title">คำถามข้อที่ 3</h2>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
      <div class="flex items-start gap-4 pb-4">
        <div>
          <span class="text-lg text-red-500 font-bold">โจทย์ : </span>
          <span class="mt-2 text-gray-700 block whitespace-pre-line">
            ให้เขียน function autocomplete โดยฟังชั่นนี้จะรับ parameter 3 ตัวดังนี้
            a. search เป็น string โดยเป็นคำที่จะใช้ในการค้นหา
            b. items เป็น array string ของคำที่จะใช้ในการแนะนำ
            c. maxResult เป็นค่าจำนวนผลลัพธ์มากที่สุดที่อยากได้
            โดยการค้นหาให้นำ search ไปค้นหาใน items โดย ignore case
            ผลลัพธ์ที่ต้องการคือคำใน items ที่มี search เป็นส่วนหนึ่งของข้อความ โดยให้เรียงลำดับผลลัพธ์ตามนี้
            • กรณีค่านั้นๆ ขึ้นต้นให้อยู่ลำดับแรกๆ ของผลลัพธ์เช่น search = th ข้อความใน items ที่ขึ้นต้นด้วย th ควรจะอยู่ลำดับแรกๆ ของผลลัพธ์
            • กรณีค่า search อยู่ระหว่างกลางของคำ
            • กรณีค่า search อยู่ท้ายของคำ
          </span> 
        </div>
      </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Search Term</label>
            <input 
              type="text" 
              v-model="searchTerm" 
              placeholder="ลองพิม 'th'..."
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              @input="usePreset"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Max Result</label>
              <input 
                type="number" 
                v-model.number="maxResult" 
                min="1"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                @input="usePreset"
              />
            </div>
            <div class="flex items-end">
              <button 
                @click="showSourceCode = true"
                class="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View Source Code
              </button>
            </div>
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Data Items (Comma separated)</label>
            <textarea 
              v-model="itemsInput"
              rows="3"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-mono text-xs"
              @input="usePreset"
            ></textarea>
          </div>
        </div>

        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col">
          <div class="mt-6 pt-6 text-center">
            <p class="text-[10px] text-gray-400 font-bold uppercase">Raw Output:</p>
            <code class="text-indigo-600 font-bold text-sm">{{ JSON.stringify(results) }}</code>
          </div>
        </div>
      </div>
    </div>  

    <div v-if="showSourceCode" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-all overflow-y-auto">
      <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 class="text-xl font-bold text-gray-800">Source Code: Question 3</h3>
          <button @click="showSourceCode = false" class="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-200 rounded-full">
          </button>
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
  import { ref, onMounted } from 'vue';

  const searchTerm = ref<string>('th');
  const itemsInput = ref<string>('Mother, Think, Worthy, Apple, Android');
  const maxResult = ref<number>(2);
  const results = ref<string[]>([]);
  const showSourceCode = ref<boolean>(false);

  const sourceCode = `
  const autocomplete = (search: string, itemsRaw: string, maxRes: number): string[] => {
    const s = search.toLowerCase();
    const items = itemsRaw.split(',').map(item => item.trim()).filter(item => item !== '');
    
    const filtered = items.filter(item => item.toLowerCase().includes(s));
    
    return [...filtered].sort((a, b) => {
      const idxA = a.toLowerCase().indexOf(s);
      const idxB = b.toLowerCase().indexOf(s);
      if (idxA !== idxB) return idxA - idxB;
      return a.localeCompare(b);
    }).slice(0, maxRes);
  };
  `;

  const autocomplete = (search: string, itemsRaw: string, maxRes: number): string[] => {
    const s = search.toLowerCase();
    const items = itemsRaw.split(',').map(item => item.trim()).filter(item => item !== '');
    
    const filtered = items.filter(item => item.toLowerCase().includes(s));
    
    return [...filtered].sort((a, b) => {
      const idxA = a.toLowerCase().indexOf(s);
      const idxB = b.toLowerCase().indexOf(s);
      if (idxA !== idxB) return idxA - idxB;
      return a.localeCompare(b);
    }).slice(0, maxRes);
  };

  const usePreset = () => {
    results.value = autocomplete(searchTerm.value, itemsInput.value, maxResult.value);
  };

  onMounted(() => {
    usePreset();
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
