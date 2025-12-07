import { useEffect, useRef } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;
    
    const points = circles.map(() => ({ x: 0, y: 0 }));

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        points[index].x += (x - points[index].x) * 0.35; 
        points[index].y += (y - points[index].y) * 0.35;

        if (circle) {
          circle.style.left = `${points[index].x}px`;
          circle.style.top = `${points[index].y}px`;
          
          circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
          
          x = points[index].x;
          y = points[index].y;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-trail-container">
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i} 
          className="trail-circle"
          ref={el => circlesRef.current[i] = el} 
        />
      ))}
    </div>
  );
};

export default CursorTrail;