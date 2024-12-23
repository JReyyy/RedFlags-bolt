import { ReactNode } from 'react';

    interface LayoutProps {
      children: ReactNode;
    }

    export default function Layout({ children }: LayoutProps) {
      return (
        <div className="min-h-screen bg-gray-100">
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-xl">Chat Analysis App</h1>
          </header>
          <main className="p-4">{children}</main>
          <footer className="bg-blue-600 text-white p-4 text-center">
            &copy; 2023 Chat Analysis App
          </footer>
        </div>
      );
    }
