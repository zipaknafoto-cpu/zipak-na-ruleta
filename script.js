body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111;
    font-family: Arial, sans-serif;
    color: white;
}

.contenedor {
    text-align: center;
}

h1 {
    letter-spacing: 3px;
}

.ruleta-container {
    position: relative;
    margin: 30px auto;
}

canvas {
    border-radius: 50%;
}

.flecha {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 40px solid white;
}

button {
    padding: 15px 40px;
    font-size: 18px;
    cursor: pointer;
    border: none;
    border-radius: 30px;
}

#resultado {
    margin-top: 20px;
}
