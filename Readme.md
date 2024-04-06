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
In Next.Js , The **[...foldername]** notation indicated that you are using a catch-all route, which allows you to capture multiple URL segments and treat them as a dynamic array of values. This is useful when you want to create dynamic routes that can handle varying numbers of URL segments.

### Server Components

React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies:

  -   [Static Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default)
   -   [Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering)
   -   [Streaming](https://nextjs.org/docs/app/building-your-application/rendering/server-components#streaming)

### Benefits of Server Rendering
There are a couple of benefits to doing the rendering work on the server, including:

-   **Data Fetching**: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the number of requests the client needs to make.
-   **Security**: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.
-   **Caching**: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
-   **Performance**: Server Components give you additional tools to optimize performance from the baseline. For example, if you start with an app composed of entirely Client Components, moving non-interactive pieces of your UI to Server Components can reduce the amount of client-side JavaScript needed. This is beneficial for users with slower internet or less powerful devices, as the browser has less client-side JavaScript to download, parse, and execute.
-   **Initial Page Load and  [First Contentful Paint (FCP)](https://web.dev/fcp/)**: On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
-   **Search Engine Optimization and Social Network Shareability**: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
-   **Streaming**: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.


**By default, Next.js uses Server Components. This allows you to automatically implement server rendering with no additional configuration, and you can opt into using Client Components when needed, see Client Components**

### Client Components

Client Components allow you to write interactive UI that is  [prerendered on the server](https://github.com/reactwg/server-components/discussions/4)  and can use client JavaScript to run in the browser.

This page will go through how Client Components work, how they're rendered, and when you might use them.

### Benefits of Client Rendering
There are a couple of benefits to doing the rendering work on the client, including:

-   **Interactivity**: Client Components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.
-   **Browser APIs**: Client Components have access to browser APIs, like  [geolocation](https://developer.mozilla.org/docs/Web/API/Geolocation_API)  or  [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage).

### Layout 
A layout is like a bluePrint that helps you make all the pages of your website look the same. It's a way to put common things, header , footer and other stuff that appears on every page, in one place. This makes it easy to keep a similar look on all your web pages. So, a layout is a handy tool that lets you keep things tidy and consistent on your website.

### Middleware

In next js, middleware's are function or pieces of code that run in between a user's request to a web page and the server's response. They help you process and modify the request or response, adding extra functionality to your web application.
