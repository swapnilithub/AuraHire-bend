import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import './Welcomepage.css';
import logo from './aurahire.png';

// Fireworks Component
const Fireworks = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth / 2; 
    canvas.height = window.innerHeight;

    let fireworks = [];
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF"];

    const randColor = () => colors[Math.floor(Math.random() * colors.length)];

    const makeFullCircleFirework = (x, y) => {
      const color = randColor();
      const velocity = Math.random() * 8 + 8;
      const max = 36;

      for (let i = 0; i < max; i++) {
        const rad = (i * Math.PI * 2) / max;
        fireworks.push({
          x,
          y,
          size: Math.random() * 1.5 + 1.5,
          color,
          vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
          vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
          alpha: 1,
          life: Math.round(Math.random() * 60) + 30,
          ay: 0.06,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((firework, index) => {
        firework.vx *= 0.98;
        firework.vy *= 0.98;
        firework.vy += firework.ay;
        firework.x += firework.vx;
        firework.y += firework.vy;
        firework.alpha -= 0.01;

        if (firework.alpha <= 0 || firework.life <= 0) {
          fireworks.splice(index, 1);
        } else {
          firework.life--;
          ctx.beginPath();
          ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${hexToRgb(firework.color)}, ${firework.alpha})`;
          ctx.fill();
        }
      });

      requestAnimationFrame(draw);
    };

    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.replace("#", ""), 16);
      return (
        ((bigint >> 16) & 255) +
        "," +
        ((bigint >> 8) & 255) +
        "," +
        (bigint & 255)
      );
    };

    const triggerFireworks = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height / 2; // Restrict to the top half
      makeFullCircleFirework(x, y);
    };

    setInterval(triggerFireworks, 1000);
    draw();
  }, []);

  return <canvas id="fireworks-canvas" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />;
};

// Updated WelcomePage Component
const WelcomePage = () => {
  const { setUserType } = useUser();
  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    if (type === 'student') {
      setUserType(type);
      navigate('/login'); 
    } else if (type === 'recruiter') {
      setUserType(type);
      navigate('/Login-Hr'); 
    } else {
      navigate('/home'); 
    }
  };

  return (
    <div className="container-wp">
      {/* Fireworks */}
      <Fireworks />

      <div className="left-side">
        <img src={logo} alt="AuraHire Logo" className="logo-wp" />
        <h1>Welcome to <strong>AuraHire</strong></h1>
      </div>
      <div className="right-side">
        <h3>Your Gateway to <strong>Opportunities</strong></h3>
        <div className="button-container-wp">
          <button className="button-wp" onClick={() => handleUserTypeChange('student')}>
            Continue as Student
          </button>
          <button className="button-wp" onClick={() => handleUserTypeChange('recruiter')}>
            Continue as Recruiter
          </button>
        </div>
        <button className="skip-button-wp" onClick={() => handleUserTypeChange('guest')}>
          Skip Sign In
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
