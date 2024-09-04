import React from 'react'

export default function BlogList() {
  return (
    <section className='max-w-[1320px] mx-auto mt-16 py-[50px]'>
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<h2 className='text-center text-4xl font-bold mb-5'>Blog List</h2>

    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Artificial Intelligence
                </th>
                <td class="px-6 py-4">
                Artificial Intelligence (AI) is revolutionizing modern healthcare by enhancing diagnostics, treatment planning, and patient care. AI algorithms can analyze medical images, predict disease progression, and personalize treatment plans. This technology has the potential to improve patient outcomes, reduce healthcare costs
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Bootstrap’s list
                </th>
                <td class="px-6 py-4">
                Bootstrap’s list of the best blog website templates makes them fully responsive and mobile-friendly. What’s more, they are all compatible with modern web browsers and quick to edit. You can use these superb blog templates for lifestyle, food, personal, fashion, finance, travel, technology, or other blogging projects
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Check out your competition.
                </th>
                <td class="px-6 py-4">
                "It’s worth taking a look at popular, highly reviewed blogs because their strategy and execution is what got them to grow in credibility. The purpose of doing this isn’t to copy these elements, but to gain better insight into what readers appreciate in a quality blog." https://blog.hubspot.com/marketing/how-to-start-a-blog
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </section>
  )
}
