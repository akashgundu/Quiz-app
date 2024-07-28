# CSS Documentation

This document outlines the CSS styles for the Quiz App, organized into sections for clarity.

## Contents

1. [Body Styles](#body-styles)
2. [Login Container Styles](#login-container-styles)
3. [Quiz Container Styles](#quiz-container-styles)
4. [Result Container Styles](#result-container-styles)
5. ...

## 1. Body Styles
The styles applied to the overall body of the HTML document.

```css
body {
  font-family: 'Arial', sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}
```

...

## 2. Login Container Styles
Styles for the login container where users enter their credentials.

```css
#login {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
```

...

## 3. Quiz Container Styles
Styles for the container holding the dynamically generated quiz questions.

```css
#quiz {
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
```

...

## 4. Result Container Styles
Styles for the container displaying the quiz result.

```css
#result {
  width: 50%;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

#result .result {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}
```

...

Feel free to add more sections for other styles related to buttons, timers, etc., following the same structure for clarity and ease of navigation.