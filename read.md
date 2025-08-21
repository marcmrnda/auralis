# auralis

A Cough Analyzer for Tubercolosis. The recording made by the user will be converted into Spectogram and our model will analyze the Spectogram Image whether the user has a low or high risk of having Tubercolosis

---

## 🚀 Getting Started

### 1. Create the project

```bash
npx create-expo-app@latest --template blank ./
````

### 2. Keep only necessary files

Keep these folders/files:

```
app/
assets/
components/
constants/
app.json
.gitignore
node_modules/
package-lock.json
package.json
readme.md
```

### 3. Install dependencies

**Expo Router & supporting libraries:**

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

**Fonts:**

```bash
npx expo install @expo-google-fonts/outfit @expo-google-fonts/poppins expo-font
```

**Icons:**

```bash
npx expo install @expo/vector-icons
```
**Recording:**

```bash
npx expo install react-native-audio-recorder-player
```

### 4. Run the app

```bash
npx expo start
```

Scan the QR code with **Expo Go** for live preview on your device.

---

## 🗂 Folder Structure

* **app/** – Screens and routes
* **assets/** – Images, fonts, and static assets
* **components/** – Reusable UI components
* **constants/** – App-wide constants (colors, sizes, etc.)

---

## ⚡ Features

* Expo Router navigation
* Google Fonts: Outfit & Poppins
* Vector icons support
* Real-time debugging with Expo Go

---

## 📌 Notes

* Make sure all dependencies are installed properly.
* Clean up unnecessary files after creating the project for a lightweight setup.

