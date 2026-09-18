function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        About SkyMart
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        SkyMart is a demo e-commerce frontend built entirely with React and
        Tailwind CSS, as a learning project to practice component design,
        state management, routing, and responsive UI.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        All product data is local and no real payments, accounts, or
        backend services are involved — every interaction (cart, wishlist,
        checkout) runs entirely in your browser.
      </p>
    </div>
  );
}

export default About;
