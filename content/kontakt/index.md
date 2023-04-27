---
title: Kontakt
type: plain
---
{{< html >}}
<section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
        <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">Kontakt
        </h2>
        <form name="kontakt" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="space-y-8">
            <div>
                <p class="hidden">
                    <label>
                        Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                </p>
            </div>
            <input type="hidden" name="subject" value="Kontakt: KjG Dossenheim" />
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Name:
                    <input type="text" name="Name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"/></label>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    E-Mail:
                    <input type="email" name="E-Mail"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@kjg-dossenheim.org" required /></label>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Nachricht:
                    <textarea name="Nachricht" rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Hinterlasse eine Nachricht..."></textarea ></label>
            </div>
            <div>
                <button type="submit" class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-500 sm:w-fit hover:bg-primary-500-focus focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-500-600 dark:hover:bg-primary-500-700 dark:focus:ring-primary-800">Senden</button>
            </div>
        </form>
    </div>
</section>
{{< /html >}}