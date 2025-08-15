# Byte_Click 💻

🛒 This is an E-Commerce Website built with Next.js 14, Tailwind CSS, Firebase, Stripe, and Algolia.

![{C2313D63-5363-4221-937D-E2A016C4C8C6}](https://github.com/user-attachments/assets/3bb0c14b-a219-4592-8183-d082d5f75916)

## ✨ Features

- User authentication with Firebase
- Product browsing and searching with Algolia
- Shopping cart functionality
- Secure payment processing with Stripe
- Admin panel for managing products, orders, and users

## 🛠️ Technologies Used

- Frontend: Next.js 14, Tailwind CSS
- Backend: Firebase (Firestore, Authentication)
- Payment: Stripe
- Search: Algolia

## 🚀 Getting Started

1️⃣ Clone the repository:

```sh
git clone https://github.com/Matein0411/Byte_Click.git
```

2️⃣ Install dependencies:

```sh
cd e-commerce
npm install
```

3️⃣ Set up your environment variables in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=...
NEXT_PUBLIC_ALGOLIA_APP_ID=...
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=...
```

4️⃣ Start the development server:

```sh
npm run dev
```

## 📁 Project Structure

```
e-commerce/
	app/           #  Next.js app directory
	components/    #  Reusable React components
	context/       #  React context providers
	lib/           #  Firebase and Firestore logic
	public/        #  Static assets
	instantsearch-app/ #  Algolia instant search demo
	...
```