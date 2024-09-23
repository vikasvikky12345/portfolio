import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Circle = () => {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });

  const colors = [
    "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
    "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
    "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
    "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
    "#48005f", "#3d005e"
  ];

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const onMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        gsap.to(circle, {
          duration: 0.1,
          left: x - 12,
          top: y - 12,
          scale: (circles.length - index) / circles.length
        });

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className="circle"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: 'black',
            pointerEvents: 'none',
            zIndex: 99999999,
          }}
        />
      ))}
    </>
  );
};

export default Circle;
