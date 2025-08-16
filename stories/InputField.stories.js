export default {
  title: 'Components/InputField',
};

export const Default = () => `
  <section id="input-field" class="mb-12 md:mb-16">
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2 md:mb-0">InputField Component</h2>
      <div class="flex items-center">
        <span class="mr-2 text-gray-600 dark:text-gray-400">Status:</span>
        <span class="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded text-sm">Production Ready</span>
      </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <!-- Default Input -->
      <div class="component-card bg-white dark:bg-dark-800 p-4 md:p-6 rounded-xl">
        <h3 class="text-base md:text-lg font-semibold mb-3">Default Input</h3>
        <div class="input-field">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
          <input type="text" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your name">
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Enter your full legal name</p>
        </div>
      </div>
      <!-- Add the other input states here (Disabled, Error, Password Toggle) -->
    </div>
    
    <div class="bg-gray-50 dark:bg-dark-700 p-4 md:p-6 rounded-xl mb-8">
      <h3 class="text-lg font-semibold mb-4">Component Specifications</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-100 dark:bg-dark-800">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Prop</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-200">value</td>
              <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-200">string</td>
              <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-200">''</td>
              <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-200">The value of the input</td>
            </tr>
            <!-- Add the other props here -->
          </tbody>
        </table>
      </div>
    </div>
  </section>
`;
