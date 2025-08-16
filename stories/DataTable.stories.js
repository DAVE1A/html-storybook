export default {
  title: 'Components/DataTable',
};

export const Default = () => `
  <section id="data-table" class="mb-12 md:mb-16">
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <h2 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2 md:mb-0">DataTable Component</h2>
      <div class="flex items-center">
        <span class="mr-2 text-gray-600 dark:text-gray-400">Status:</span>
        <span class="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded text-sm">Production Ready</span>
      </div>
    </div>

    <div class="component-card bg-white dark:bg-dark-800 p-4 md:p-6 rounded-xl mb-6">
      <!-- Table and actions go here -->
      <!-- Copy everything from <div class="overflow-x-auto"> to the end of your DataTable section -->
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Loading State -->
      <div class="component-card bg-white dark:bg-dark-800 p-4 md:p-6 rounded-xl">
        <h3 class="text-base md:text-lg font-semibold mb-3">Loading State</h3>
        <div class="data-table-loading">
          <div class="flex justify-center items-center h-48">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            <span class="ml-3 text-gray-600 dark:text-gray-400">Loading data...</span>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="component-card bg-white dark:bg-dark-800 p-4 md:p-6 rounded-xl">
        <h3 class="text-base md:text-lg font-semibold mb-3">Empty State</h3>
        <div class="data-table-empty">
          <div class="flex flex-col justify-center items-center h-48 text-center">
            <i class="fas fa-inbox text-gray-400 text-4xl mb-4"></i>
            <h4 class="text-base md:text-lg font-medium text-gray-900 dark:text-white mb-1">No data available</h4>
            <p class="text-gray-500 dark:text-gray-400 mb-4 px-4">There are no records to display at this time</p>
            <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700">Add New Item</button>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
