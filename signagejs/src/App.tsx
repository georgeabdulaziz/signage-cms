import React, { useRef, useEffect, useState } from 'react';
import { StaticCanvas, FabricText } from 'fabric'

function App() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<StaticCanvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      const canvas = new StaticCanvas(canvasRef.current);
      const helloWorld = new FabricText('Hello world!');
      canvas.add(helloWorld);
      canvas.centerObject(helloWorld);
      setCanvas(canvas);
    }
  }, []);

  const handleDonwload = () => {
    const image = canvas?.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'canvas.png';
    link.click();
  }

  return (
    <div>
      <h1>Hello World</h1>
      <canvas id="canvas" ref={canvasRef} />
      <button onClick={handleDonwload}>Download</button>
    </div>
  );
}

export default App;
