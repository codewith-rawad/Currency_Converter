# 💱 Currency Converter

A simple and fast currency converter web application using **JavaScript** and **FastForex API**.

## 🚀 Features
- Convert between multiple currencies.
- Real-time exchange rates.
- Stylish and interactive UI with a loading animation.
- Error handling for invalid inputs.



## 🛠️ Technologies Used
- **HTML** for structure
- **CSS** for styling and animations
- **JavaScript (ES6+)** for functionality
- **FastForex API** for live exchange rates

## 📥 Installation & Usage
1. **Clone the repository**
   ```bash
   git clone https://github.com/codewith-rawad/currency_converter.git
   cd currency-converter
   ```
2. **Open `index.html` in a browser**
   ```bash
   open index.html
   ```
3. **Enter the currency codes and amount, then click 'Convert'**

## 📝 API Configuration
Replace `YOUR_API_KEY` in `main.js` with your actual **FastForex API key**:
```js
const API_KEY = "YOUR_API_KEY";
```

## 🔥 How It Works
1. User selects **source and target currencies**.
2. Enters an **amount to convert**.
3. Clicks the **Convert** button.
4. App fetches real-time exchange rates and displays the **converted amount**.
5. If input is invalid, an **error message** appears.

## ⚠️ Error Handling
- If the user enters an invalid currency code, a red warning message appears.
- If the API request fails, a fallback message is shown.

## 🎨 UI Enhancements
- Animated **loading spinner** during API call.
- Highlighted **converted amount** in output.
- Responsive **modern design**.

## 🛠️ Future Improvements
- Add currency selection dropdowns.
- Support for historical exchange rates.
- Light & Dark mode toggle.

## 🤝 Contributing
Want to improve this project? Feel free to **fork**, create a **pull request**, or open an **issue**.

## 📜 License
This project is licensed under the **MIT License**.

---

🚀 **Happy Coding!** 💰

