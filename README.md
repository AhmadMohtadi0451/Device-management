# 📊 Device Management Dashboard

A modern, single-page dashboard for managing network devices built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates clean architecture, type safety, and best practices in React development.

## ✨ Features

- **Device Management** – View, add, and delete devices with status badges (Online/Offline/Warning)
- **Search & Filter** – Real-time search with debounce and status filtering
- **URL Sync** – Filters persist on page refresh via URLSearchParams
- **Form Validation** – Zod schema validation with IPv4 format checking
- **Modern UI** – Responsive design with skeleton loading and toast notifications
- **Type Safety** – Full TypeScript with strict mode

## 🛠 Tech Stack

- **Next.js 15** – React framework with App Router
- **TypeScript** – Type safety and better developer experience
- **Tailwind CSS** – Utility-first styling
- **React Hook Form** – Form management
- **Zod** – Schema validation
- **Zustand** – State management
- **TanStack Query** – Data fetching and caching

## 🏗 Architecture (MVVM)

This project follows the **Model-View-ViewModel** pattern:

- **View** – React components (DeviceList, DeviceCard, etc.)
- **ViewModel** – Custom hooks (useDevices, useDebounce)
- **Model** – Data layer (DeviceService, DeviceModel)

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/AhmadMohtadi0451/Device-management.git

# Install dependencies
npm install

# Run development server
npm run dev
```
