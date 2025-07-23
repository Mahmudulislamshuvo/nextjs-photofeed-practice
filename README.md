# PhotoFeed 📸

Welcome to **PhotoFeed**, a sleek and performant photo gallery application built with **Next.js** and **Tailwind CSS**. It offers a clean, modern interface for browsing high-quality images and includes support for internationalization (i18n).

![App Screenshot](./public/screenshot.png) <!-- Replace with an actual screenshot -->

---

## ✨ Features

- **🚀 Blazing Fast Performance**: Built with Next.js 14 using SSR and SSG for optimal speed.
- **🖼️ Optimized Images**: Leverages the `next/image` component for efficient image loading.
- **📱 Fully Responsive Design**: Tailwind CSS ensures it looks great on all devices.
- **🌐 Internationalization (i18n)**: Built-in support for English and Bengali, with automatic locale detection.
- **🎨 Modern UI/UX**: Modal views and smooth transitions for an immersive browsing experience.
- **✍️ Custom Fonts**: Uses `next/font` for fast local font loading.
- **🔍 SEO Friendly**: Clean URLs and rich metadata for better search visibility.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next/font](https://nextjs.org/docs/basic-features/font-optimization)
- [FormatJS (intl-localematcher)](https://formatjs.io/)
- [Negotiator](https://github.com/jshttp/negotiator)

---

## 🚀 Getting Started

Follow these steps to run the project locally for development and testing.

### Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/photo-feed.git
   cd photo-feed
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env` file in the root directory with the following:

```env
BASE_URL="http://localhost:3000/api"
```

This variable is used to access internal API routes.

### Running the Application

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app. Your browser's preferred language will automatically be detected and routed to `/en` or `/bn`.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to catch issues.

---

## 🤝 Contributing

Contributions make the open-source community amazing. Any contributions you make are **greatly appreciated**.

To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

Alternatively, open an issue with the tag `enhancement`.

---

## 📫 Contact

If you have any questions, suggestions, or just want to connect — feel free to reach out!

- **GitHub**: [github.com/Mahmudulislamshuvo](https://github.com/Mahmudulislamshuvo)
- **Facebook**: [facebook.com/mahmudulislamshuvo.bd](https://www.facebook.com/mahmudulislamshuvo.bd/)
- **LinkedIn**: [linkedin.com/in/mahmudul-islam-shuvo](https://www.linkedin.com/in/mahmudul-islam-shuvo/)

---

## 📄 License

Distributed under the **MIT License**. See the `LICENSE` file for more information.
