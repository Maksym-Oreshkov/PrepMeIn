# 🎯 Interview Ready - AI-Powered Practice & Feedback

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Firebase-orange?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" />
  <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</div>

<div align="center">
  <h3>Master your interviews with AI-powered practice sessions and real-time feedback</h3>
  <p>Practice makes perfect - get interview-ready with personalized AI coaching</p>
</div>

---

## ✨ Features

### 🤖 AI-Powered Interview Simulation

- **Smart Question Generation** - AI creates relevant questions based on your target role
- **Real-time Feedback** - Get instant analysis of your answers
- **Personalized Coaching** - Receive tips tailored to your performance

### 📊 Comprehensive Practice Tools

- **Multiple Interview Types** - Technical, behavioral, and situational interviews
- **Progress Tracking** - Monitor your improvement over time
- **Answer History** - Review and learn from past sessions

### 🔐 Secure & Private

- **Firebase Authentication** - Secure login with email/password
- **Private Sessions** - Your interview data stays confidential
- **Cloud Storage** - Access your progress from anywhere

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase account for authentication
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/interview-prep-app.git
   cd interview-prep-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
interview-prep-app/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   │   ├── sign-in/       # Sign in page
│   │   └── sign-up/       # Sign up page
│   ├── (root)/            # Protected routes
│   │   └── interview/     # Interview practice pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   └── ui/               # UI components
│       ├── Agent.tsx     # AI interview agent
│       ├── AuthForm.tsx  # Authentication form
│       └── InterviewCard.tsx
├── firebase/             # Firebase configuration
│   ├── admin.ts         # Admin SDK setup
│   └── client.ts        # Client SDK setup
├── lib/                  # Utility functions
│   └── actions/         # Server actions
│       └── auth.action.ts
└── types/               # TypeScript definitions
```

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Firebase](https://firebase.google.com/)** - Authentication & Database
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components

## 🔧 Configuration

### Firebase Setup

1. Create a new Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication with Email/Password provider
3. Create a Firestore database
4. Copy your configuration keys to `.env.local`

### Deployment

Deploy easily with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/interview-prep-app)

Or deploy manually:

```bash
npm run build
npm start
```

## 📝 Usage

1. **Sign Up/Sign In** - Create an account or login
2. **Choose Interview Type** - Select technical, behavioral, or custom
3. **Start Practice** - Begin your AI-powered interview session
4. **Receive Feedback** - Get instant analysis and tips
5. **Track Progress** - Monitor your improvement over time

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE]

## 🙏 Acknowledgments

- OpenAI for AI capabilities
- Firebase team for excellent authentication services
- Next.js team for the amazing framework
- All contributors who help improve this project

---

<div align="center">
  <p>Made with ❤️ by Oreshkov Maksym, for developers preparing for their dream jobs</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
