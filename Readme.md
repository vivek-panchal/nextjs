## Nextjs Notes 

### Define NextJs
Next js is an open-source Javascript framework that is build on **top of react** a popular javascript library for building user interfaces. it is designed to make it easier to create **server-rendered**  react applications with a focus on developer productivity , performance , and SEO (Search Engine Optimization ). Next js provides a set of tools and conversation that simplify various aspects of building web applications.

### Features

 - **Server-side rendering (SSR)** : Next js allows you to render react components on the server side before sending them to the client. this can improve page load times and SEO, as search engines can easily index the content.
 - **Static site generation (SSG)** :- Next Js also supports static site generation , where you can pre-render pages at build time. This approach is great for content heavy websites and can offer even better performance and SEO benefits.
 - **API routes** :- it offers a build-in API route feature that allows you to create serverless API endpoints within your next js project, making it easy to handle backend logic.

### Routing
Routing is like giving direction to a website , when you type a web address (URL) into your browser, routing tells the website  which page or thing to slow you. its like a map that guides the website to the right place when you click a link or enter a web address. So, routing helps the website know what to display based on what you are looking for.

### Link
 - Link is a component provided by Next js that allows you to create links to navigate between pages in your application.
 - Its primarily used for declaration , client-side navigation. When you click on a link created with link, it prevents the default browser full page refresh and fetches the new page content on the client side, resulting in faster and smoother user experience.
 - Its typically used in your components JSX code to create clickable links that lead to other pages within your Next.Js application.

### UseRouter()

 - useRouter is a hook provides by Next.Js that allows you to access the router object and its properties within you component.
 - It provides programmatic control over the router and allows you to navigate to different pages or perform other routing-related actions in response to user interactions or events within your components.
 - It useful when you need to handle navigation or access  route specific information directly in your component logic.

### Dynamic routes
Dynamic routes in Next.Js refer to a feature that allow you to create web pages with variable or dynamic parts in the URL. Instead of defining individual  routes for every possible URL, you can create  a single route pattern that match a variety of dynamic values. This is extremely useful when you have pages that share a common structure but differ based on specific information in the URL.

### Catch-All Routes
In Next.Js , The **[...foldername]** notation indicated that you are using a catch-all route, which allows you to capture multiple URL segments and treat them as a dynamic array of values. This is useful when you want to create dynamic routes that can handle varying numbers of URL segments
