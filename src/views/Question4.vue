<template>
  <main class="content-area">
    <div class="content-header">
      <h2 class="content-title">คำถามข้อที่ 4</h2>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
      <div class="flex items-start gap-4 pb-4">
        <div>
          <span class="text-lg text-red-500 font-bold">โจทย์ : </span>
          <span class="mt-2 text-gray-700">
            ให้เขียน function รับค่า array string และ return ผลลัพธ์ที่เรียงแล้วออกมา โดยการเรียงจะดูจากในตัวอย่างเป็นหลัก
            ["TH19", "SG20", "TH2"] => ["SG20", "TH2", "TH19"]
            ["TH10", "TH3Netflix", "TH1", "TH7"] => ["TH1", "TH3Netflix", "TH7", "TH10"]
          </span> 
        </div>
      </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <label class="text-sm font-bold text-indigo-600 uppercase tracking-widest">Number ➔ Roman</label>
          </div>
          <div class="relative py-2">
            <input 
              type="number" 
              v-model.number="inputInt" 
              class="w-full px-2 py-2 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-xl font-bold"
              @input="callConvertIntToRoman"
            />
          </div>
          <div class="h-24 flex items-center justify-center bg-indigo-50 rounded-2xl border border-indigo-100 overflow-hidden px-4">
            <span v-if="outputRoman" class="text-3xl font-serif font-black text-indigo-700 tracking-widest break-all text-center">
              {{ outputRoman }}
            </span>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <label class="text-sm font-bold text-green-600 uppercase tracking-widest">Roman ➔ Number</label>
          </div>
          <div class="relative py-2">
            <input 
              type="text" 
              v-model="inputRoman" 
              class="w-full px-2 py-2 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all text-xl font-bold uppercase font-serif tracking-widest"
              @input="callConvertRomanToInt"
            />
          </div>
          <div class="h-24 flex items-center justify-center bg-green-50 rounded-2xl border border-green-100 px-4">
            <span v-if="outputInt !== null" class="text-4xl font-black text-green-700">
              {{ outputInt.toLocaleString() }}
            </span>
          </div>
        </div>

      </div>

      <div class="mt-12 pt-8 border-t border-gray-100 flex justify-center">
        <button 
          @click="showSourceCode = true"
          class="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          View Source Code
        </button>
      </div>
    </div>

    <div v-if="showSourceCode" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-all overflow-y-auto">
      <div class="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        <div class="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 class="text-xl font-bold text-gray-800">Source Code: Roman Numerals Converter</h3>
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

  const inputInt = ref<number | null>(null);
  const outputRoman = ref<string>('');
  const inputRoman = ref<string>('');
  const outputInt = ref<number | null>(null);
  const showSourceCode = ref<boolean>(false);

  const romanMap: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];

  const romanValues: Record<string, number> = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };

  const callConvertIntToRoman = () => {
    outputRoman.value = convertIntToRoman(inputInt.value);
  }
  const convertIntToRoman = (num: number): string => {
    let result = '';
    for (const [value, symbol] of romanMap) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
    return result;
  };

  const callConvertRomanToInt = () => {
    outputInt.value = convertRomanToInt(inputRoman.value);
  }
  const convertRomanToInt = (input: string): number => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
      const current = romanValues[input[i]];
      const next = romanValues[input[i + 1]];
      console.log(current, next);

      if (next > current) {
        total += (next - current);
        i++;
      } else {
        total += current;
      }
    }
    return total;
  };

  const sourceCode = `
  const convertIntToRoman = (num: number): string => {
    let result = '';
    for (const [value, symbol] of romanMap) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
    return result;
  };
  
  const convertRomanToInt = (input: string): number => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
      const current = romanValues[input[i]];
      const next = romanValues[input[i + 1]];

      if (next > current) {
        total += (next - current);
        i++;
      } else {
        total += current;
      }
    }
    return total;
  };`;
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
