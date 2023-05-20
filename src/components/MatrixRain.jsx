import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let drops = [];
    

    const matrix = "改めてこのメインビジュアル見るとワイリ";
    const font_size = 12;
    const columns = Math.ceil(window.innerWidth / font_size);
    const rows = Math.ceil(window.innerHeight / font_size);

    canvas.width = columns * font_size;
    canvas.height = rows * font_size;

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * rows) + 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    //   "#f4427d"
    //#6e7598
    //'#64d86b'
      ctx.fillStyle = '#64d86b';
      ctx.font = font_size + "px arial";

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };
    //35
    const intervalId = setInterval(draw, 45);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain-canvas" />;
};

export default MatrixRain;
