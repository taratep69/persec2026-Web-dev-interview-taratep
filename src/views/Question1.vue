<template>
  <main class="content-area">
    <div class="content-header">
      <h2 class="content-title">คำถามข้อที่ 1</h2>
    </div>
    <div class="bg-white p-4 rounded-lg">
      <span class="text-lg text-red-500 font-bold">โจทย์ : </span>
      <span>ให้สร้าง function ที่รับข้อมูล เป็น string 1 ชุด โดยข้อมูลจะเป็นตัวอักษรดังนี้ '(', '[', '{', '}', ']', ')'
      ทํา การตรวจสอบว่า ข้อมูลที่รับมามีการเปิดปิดของสัญลักษณ์ครบคู่หรือไม่ เช่น
      ข้อมูล "()" คํา ตอบจะเป็น true เพราะมีการเปิดปิดวงเล็บครบคู่
      ข้อมูล "([{)" คํา ตอบจะเป็น false เพราะมีการเปิดปิดไม่ครบคู่</span>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 ">
        <span v-if="outputData !== null" class="text-lg font-bold px-4 py-2 rounded-lg" :class="outputData ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'">{{ outputData ? 'True' : 'False' }}</span>
        <input 
          type="text" 
          v-model="inputData" 
          class="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow text-gray-800"
          @keyup.enter="submitData(inputData)"
        />
        <button 
          @click="submitData(inputData)"
          class="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          ตรวจสอบ
        </button>
        <button 
          @click="showSourceCode = true"
          class="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          View Source Code
        </button>
      </div>
    </div>

    <div v-if="showSourceCode" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-all overflow-y-auto">
      <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 class="text-xl font-bold text-gray-800">Source Code: Question 1</h3>
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

  const inputData = ref<string>('');
  const outputData = ref<boolean | null>(null);
  const showSourceCode = ref<boolean>(false);

  const sourceCode = `
  const submitData = (inputData: string): boolean => {
    if (!inputData) {
      return false;
    }
    const inputDatas = inputData.replace(/["',\sa-zA-Z0-9]/g, '').trim();
    console.log(inputDatas);
    const stack: string[] = [];
    const pairs: Record<string, string> = {
      ')': '(',
      ']': '[',
      '}': '{'
    };

    let isValid = true;
    for (const char of inputDatas) {
      if (pairs[char]) {
        if (stack.pop() !== pairs[char]) {
          isValid = false; 
          break;
        }
      } else {
        stack.push(char);
      }
    }

    if (stack.length !== 0) {
      isValid = false;
    }

    outputData.value = isValid;
    return isValid;
  }
  `;

  const submitData = (inputData: string): boolean => {
    if (!inputData) {
      return false;
    }
    const inputDatas = inputData.replace(/["',\sa-zA-Z0-9]/g, '').trim();
    console.log(inputDatas);
    const stack: string[] = [];
    const pairs: Record<string, string> = {
      ')': '(',
      ']': '[',
      '}': '{'
    };

    let isValid = true;
    for (const char of inputDatas) {
      if (pairs[char]) {
        if (stack.pop() !== pairs[char]) {
          isValid = false; 
          break;
        }
      } else {
        stack.push(char);
      }
    }

    if (stack.length !== 0) {
      isValid = false;
    }

    outputData.value = isValid;
    return isValid;
  }
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
